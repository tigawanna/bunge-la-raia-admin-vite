import { useParams, Navigate, useSearch, useNavigate } from "@tanstack/react-router";
import { AspirationsForm } from "./AspirationsForm";
import { useSuspenseQuery } from "@tanstack/react-query";
import { toaster } from "@/components/navigation/ParkuiToast";
import { oneCandidateAspirationsQueryOptions } from "../list/aspiration-query-options";

interface UpdateAspirationsProps {}

export function UpdateAspirations({}: UpdateAspirationsProps) {
  const { aspiration, candidate } = useParams({
    from: "/candidates/$candidate/aspirations/$aspiration/update",
  });
    const { basics } = useSearch({
      from: "/candidates/$candidate/aspirations/$aspiration/update",
    });
    const navigate = useNavigate({
      from: "/candidates/$candidate/aspirations/$aspiration/update",
    })

  const query = useSuspenseQuery(
    oneCandidateAspirationsQueryOptions({ aspiration_id: aspiration, candidate_id: candidate })
  );
  const one_aspiration = query.data?.data;

  if (!one_aspiration) {
    toaster.create({
      title: "Aspiration not found",
      description: "Redirecting back to aspirations dashboard",
      type: "info",
    });
    return <Navigate to="/candidates/$candidate/aspirations" params={{ candidate }} />;
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
        <AspirationsForm navigate={navigate}
        aspiration={one_aspiration as any} 
        start_from_basics={basics??false}/>
    </div>
  );
}
