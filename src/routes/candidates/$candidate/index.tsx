import { createFileRoute } from "@tanstack/react-router";
import { oneCandidateQueryOptions } from "../-components/candidate-query-options";
import { OneCandidate } from "../-components/candidates/views/OneCandidate";


export const Route = createFileRoute("/candidates/$candidate/")({
  component: OneCandidatePage,

  loader: async ({ params, context }) => {
    context.queryClient.ensureQueryData(
      oneCandidateQueryOptions({ candidate_id: params.candidate })
    );
  },
});

interface OneCandidatePageProps {}

export function OneCandidatePage({}: OneCandidatePageProps) {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center ">
      <OneCandidate />
    </div>
  );
}
