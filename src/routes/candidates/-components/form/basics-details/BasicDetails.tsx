import { TextAreaFormField, TextFormField } from "@/lib/react-hook-form/TextFields";
import { CandidateInsertType, CandidateRowType } from "../../types";
import { useViewer } from "@/lib/tanstack/query/use-viewer";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCurrentLocation } from "@/utils/hooks/use-current-location";

interface BasicDetailsProps {
  candidate?: CandidateRowType | null;
  formStep: number;
  handleNextFormStep(): void;
  handlePreviousFormStep(): void;
}

export function BasicDetails({ candidate }: BasicDetailsProps) {
  const { userQuery } = useViewer();
  const {location,error} = useCurrentLocation()
  const viewer = userQuery?.data?.data;
  const { register, handleSubmit,formState } = useForm<CandidateInsertType>({
    defaultValues: {
      name: candidate?.name ?? "",
      bio: candidate?.bio ?? "",
      gps: candidate?.gps ??location?.latitude.toString() + "," + location?.longitude.toString() ?? "",
      period: candidate?.period ?? "",
      vying_for: candidate?.vying_for ?? "mca",
      account_id: viewer?.id ?? "",
    },
  });
  
  const onSubmit: SubmitHandler<CandidateInsertType> = (data) => console.log(data);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] md:w-[60%] lg:w-[50%] h-full flex flex-col items-center justify-center p-[2%] bg-bg-muted rounded-md gap-4 ">
        {/* register your input into the hook by invoking the "register" function */}
        <TextFormField<CandidateInsertType>
          fieldKey="name"
          formState={formState}
          register={register}
          required
        />
        <TextAreaFormField<CandidateInsertType>
          fieldKey="bio"
          formState={formState}
          register={register}
          required
        />
      </form>
    </div>
  );
}
