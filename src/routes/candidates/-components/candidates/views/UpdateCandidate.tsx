import { useParams, Navigate } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { toaster } from "@/components/navigation/ParkuiToast";
import { oneCandidateQueryOptions } from "../../candidate-query-options";
import { CandidateForm } from "../form/CandidateForm";

interface UpdateAspirationsProps {}

export function UpdateAspirations({}: UpdateAspirationsProps) {
  const { candidate } = useParams({
    from: "/candidates/$candidate/update",
  });

  const query = useSuspenseQuery(oneCandidateQueryOptions({ candidate_id: candidate }));
  const one_candidate = query.data?.data;
  console.log({one_candidate});
  // if (!one_candidate) {
  //   toaster.create({
  //     title: "Aspiration not found",
  //     description: "Redirecting back to candidates dashboard",
  //     type: "info",
  //   });
  //   return <Navigate to="/candidates/$candidate" params={{ candidate }} />;
  // }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* <CandidateForm candidate={one_candidate as any} /> */}
      candidate form
    </div>
  );
}
