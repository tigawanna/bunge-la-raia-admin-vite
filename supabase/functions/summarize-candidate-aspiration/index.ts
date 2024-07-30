import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { generateVibeSummary } from "../helpers/generate-vibe-summary.ts";
import { createClient } from "jsr:@supabase/supabase-js";
import { Database } from "../database.ts";
import { validateAspiration } from "../helpers/validate-aspiration.ts";

interface GenerateVibeSummaryBody {
  record: Database["public"]["Tables"]["candidate_aspirations"]["Row"] & {
    vibe_check: Array<{ query: string; answer: string }>;
  };
}
Deno.serve(async (req) => {
  try {
    const authHeader = req.headers.get("Authorization")!;
    const supabaseClient = createClient<Database>(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } },
    );
    const { record } = (await req.json()) as GenerateVibeSummaryBody;
    const raw_string_input = validateAspiration(record);
    if (raw_string_input instanceof Response) {
      return raw_string_input;
    }

    const summary = await generateVibeSummary({ inputText: raw_string_input });
    const summary_text = summary.response.text();

    if (!summary || !summary?.response) {
      return new Response("aspiration summary generation failed", {
        status: 400,
      });
    }
    const { data, error } = await supabaseClient.from("candidate_aspirations")
      .update({
        aspiration_summary: summary_text,
      })
      .eq("id", record.id)
      .select("*")
      .single();
    if (error) {
      return new Response(
        "updating aspiration summary failed :" + error.message,
        { status: 400 },
      );
    }
    return new Response(
      "aspiration summary " + data?.id + " updated successfully",
      { status: 200 },
    );
  } catch (error) {
    return new Response("Something went wrong: " + error.message, {
      status: 500,
    });
  }
});


