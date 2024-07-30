import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { geminiEmbedding } from "../helpers/generate-embedding.ts";
import { Database } from "../database.ts";
import { createClient } from "jsr:@supabase/supabase-js";
import { validateAspiration } from "../helpers/validate-aspiration.ts";

interface RequestBody {
  record: Database["public"]["Tables"]["candidate_aspirations"]["Row"] & {
    vibe_check: Array<{ query: string; answer: string }>;
  };
}

Deno.serve(async (req) => {
  try {
    const { record } = (await req.json()) as RequestBody;

   
    const raw_string_input = validateAspiration(record)
    if(raw_string_input instanceof Response) {
      return raw_string_input
    }
    
    const authHeader = req.headers.get("Authorization")!;
    const embeddingResult = await geminiEmbedding({ inputText: raw_string_input });
    const supabaseClient = createClient<Database>(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } },
    );

    const { data, error } = await supabaseClient
      .from("candidate_aspirations")
      .update({
        embedding: embeddingResult,
      })
      .eq("id", record.id)
      .select("*")
      .single();

    if (error) {
      throw new Error("error embedding aspiration :", error.message);
    }

    return new Response(
      "aspiration embedding " + data?.id + " updated successfully",
      { headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    return new Response("Something went wrong: " + error.message, {
      status: 500,
    });
  }
});