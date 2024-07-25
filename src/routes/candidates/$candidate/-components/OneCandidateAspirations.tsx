import { TanstackSupabaseError } from "@/lib/supabase/components/TanstackSupabaseError";
import { useViewer } from "@/lib/tanstack/query/use-viewer";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { AspirationsView } from "../aspirations/-components/view/AspirationsView";
import { listCandidateAspirationsQueryOptions } from "../aspirations/-components/list/aspiration-query-options";

interface OneCandidateAspirationsProps {
  candidate_id: string;
}

export function OneCandidateAspirations({ candidate_id }: OneCandidateAspirationsProps) {
  const { userQuery } = useViewer();
  const viewer = userQuery.data.data;
  const query = useSuspenseQuery(
    listCandidateAspirationsQueryOptions({
      candidate_id,
      search_query: "",
    })
  );
  const data = query.data.data ?? [];
  const error = query.data.error || query.error;
  if (error) {
    return <TanstackSupabaseError error={error} />;
  }
  if (data.length < 1 && viewer?.id === candidate_id) {
    return (
      <div className="w-full h-full min-h-[50vh] flex flex-col items-center justify-center bg-bg-muted">
        <Link
          className="flex gap-2 items-center justify-center rounded-lg bg-accent-default p-3 hover:bg-accent-emphasized "
          to="/candidates/$candidate/aspirations/new"
          params={{ candidate: candidate_id }}>
          add your candidate aspiration <Plus />
        </Link>
      </div>
    );
  }
  if (data.length < 1) {
    return (
      <div className="w-full h-full min-h-[50vh] flex flex-col items-center justify-center bg-bg-muted">
        <Link
          className="flex gap-2 items-center justify-center rounded-lg bg-accent-default p-3 hover:bg-accent-emphasized "
          to="/candidates/$candidate/aspirations/new"
          params={{ candidate: candidate_id }}>
          add your candidate aspiration <Plus />
        </Link>
      </div>
    );
  }
  // const item = data[0];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      {viewer?.id === candidate_id && (
        <Link
          className="flex gap-2 items-center justify-center rounded-lg bg-accent-default p-1 hover:bg-accent-emphasized absolute top-3 right-[5%]"
          to="/candidates/$candidate/aspirations/new"
          params={{ candidate: candidate_id }}>
          <Plus /> new
        </Link>
      )}
      {/* <AspirationsView aspiration={item} /> */}
      {data?.map((item, idx) => {
        return (
          <Link
            to="/candidates/$candidate/aspirations/$aspiration"
            params={{ candidate: candidate_id, aspiration: item.id }}
            key={idx}>
            <AspirationsView aspiration={item} candidate_id={candidate_id} viewer_id={viewer?.id} />
          </Link>
        );
      })}
      <Link to="/candidates/$candidate/aspirations" params={{ candidate: candidate_id }}>
        show more
      </Link>
    </div>
  );
}
