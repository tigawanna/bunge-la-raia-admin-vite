import { toaster } from "@/components/navigation/ParkuiToast";
import { supabase } from "@/lib/supabase/client";
import { useMutation } from "@tanstack/react-query";
import { useSearch, useNavigate } from "@tanstack/react-router";
import { aspirant_questions } from "@/components/forms/vibe-check/data";
import { VibecheckForm } from "@/components/forms/vibe-check/VibecheckForm";
import { VibecheckFormMutationProps } from "@/components/forms/vibe-check/types";
import { CandidateRowType } from "../../types";
import { candidate_questions } from "./candidate-questions";

interface CandidateVibeCheckFormProps {
  candidate: CandidateRowType;
  next: () => void;
}

export function CandidateVibeCheckForm({candidate,next}: CandidateVibeCheckFormProps) {
  const { form_step } = useSearch({
    from: "/candidates/$candidate/update",
  });
  const navigate = useNavigate({
    from: "/candidates/$candidate/update",
  });
  const mutation = useMutation({
    mutationFn: async ({ vibe }: VibecheckFormMutationProps) => {
      const { error } = await supabase
        .from("candidates")
        .update({
          vibe_check: vibe,
        })
        .eq("id", candidate.id);
      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      toaster.create({
        title: "Vibe checked",
        type: "success",
      });
      next();
    },
    onError: (error) => {
      toaster.create({
        title: "Something went wrong",
        description: `${error.message}`,
        type: "error",
        duration: 20000,
      });
    },
    meta: {
      invalidates: ["candidates", candidate.id],
    },
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <VibecheckForm
        navigate={navigate}
        questions={candidate_questions}
        form_step={form_step}
        mutation={mutation}
      />
    </div>
  );
}
