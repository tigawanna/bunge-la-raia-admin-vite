import { ResizeTextAreaFormField, TextFormField } from "@/lib/react-hook-form/TextFields";
import { CandidateInsertType, CandidateRowType } from "../../types";
import { useViewer } from "@/lib/tanstack/query/use-viewer";
import { useForm, SubmitHandler } from "react-hook-form";
import { ImageURLInputField } from "@/lib/react-hook-form/ImageInput";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase/client";
import { MutationButton } from "@/lib/tanstack/query/MutationButton";
import { useNavigate } from "@tanstack/react-router";
import { toaster } from "@/components/navigation/ParkuiToast";

interface CandidateBasicDetailsFormProps {
  candidate?: CandidateRowType | null;
}

export function CandidateBasicDetailsForm({ candidate }: CandidateBasicDetailsFormProps) {
  const { userQuery } = useViewer();
  const navigate = useNavigate({
    from: "/candidates/new",
  });
  const viewer = userQuery?.data?.data;

  const { register, handleSubmit, formState, watch } = useForm<CandidateInsertType>({
    defaultValues: {
      name: candidate?.name ?? viewer?.fullname ?? "",
      bio: candidate?.bio ?? viewer?.bio ?? "",
      account_id: candidate?.account_id ?? viewer?.id ?? "",
      avatar_url: candidate?.avatar_url ?? viewer?.avatar_url ?? "",
    },
  });
  const mutation = useMutation({
    mutationFn: async (data: CandidateInsertType) => {
      const { error } = await supabase.from("candidates").upsert(data).returns();
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    onSuccess: () => {
      navigate({ to: "/candidates/$candidate", params: { candidate: viewer?.id! } });
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
      invalidates: ["candidates", viewer?.id],
    },
  });
  const onSubmit: SubmitHandler<CandidateInsertType> = (data) => {
    mutation.mutate(data);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] md:w-[60%] lg:w-[50%] h-fit flex flex-col items-center bg-bg-emphasized justify-center p-[5%] lg:p-[3%] rounded-lg gap-4 overflow-auto">
        <h1 className="text-2xl">Basic Details</h1>
        {/* register your input into the hook by invoking the "register" function */}
        <TextFormField<CandidateInsertType>
          fieldKey="name"
          formState={formState}
          register={register}
          required
        />
        <ResizeTextAreaFormField<CandidateInsertType>
          fieldKey="bio"
          formState={formState}
          register={register}
          required
        />
        <ImageURLInputField<CandidateInsertType>
          fieldKey="avatar_url"
          formState={formState}
          register={register}
          watch={watch}
          required
        />
        <MutationButton label="Save" type="submit" mutation={mutation} />
      </form>
    </div>
  );
}
