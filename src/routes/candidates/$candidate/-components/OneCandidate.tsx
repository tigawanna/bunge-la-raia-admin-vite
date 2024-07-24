import {  useParams } from "@tanstack/react-router";
import { oneCandidatesQueryOptions } from "../../-components/query";
import { useSuspenseQuery } from "@tanstack/react-query";
import { OneCandidateAspirations } from "./OneCandidateAspirations";
import { CandidateBasicDetailsDialog } from "../../-components/form/basics-details/CandidateBasicDetailsDialog";
import { useViewer } from "@/lib/tanstack/query/use-viewer";

interface OneCandidateProps {}

export function OneCandidate({}: OneCandidateProps) {
  const params = useParams({ from: "/candidates/$candidate/" });
  const query = useSuspenseQuery(oneCandidatesQueryOptions(params.candidate));
  const data = query.data.data;
  const { userQuery } = useViewer();
  const viewer = userQuery?.data?.data;
  return (
    <div className="w-full h-full flex flex-col p-2">
      <div className="w-full h-full flex flex-col justify-center items-center sm:flex-row gap-2 p-2 relative">
        <img
          height={200}
          width={200}
          className="aspect-square  o  rounded-lg"
          src={data?.avatar_url || ""}
          alt={data?.name}
        />
        <div className="w-full h-full flex flex-col p-2">
          <h1 className="text-2xl text-accent-text">{data?.name}</h1>
          <p className="text-sm md:line-clamp-6">{data?.bio}</p>
        </div>
        {viewer?.id === params.candidate && (
          <div className="absolute top-[2%] right-[2%]">
            <CandidateBasicDetailsDialog candidate={data} />
          </div>
        )}
      </div>
      <OneCandidateAspirations candidate_id={params.candidate} />
    </div>
  );
}
