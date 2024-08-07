import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { CandidateForm } from './-components/candidates/form/CandidateForm';
import { authGuard } from '@/lib/tanstack/query/use-viewer';

export const Route = createFileRoute("/candidates/new")({
  component: NewCandidateForm,
  async beforeLoad(ctx) {
    await authGuard({ ctx });
  },
});




export function NewCandidateForm() {
  const navigate = useNavigate({
    from: "/candidates/new",
  })
  return <div className="w-full h-full flex flex-col items-center justify-center">
    <CandidateForm navigate={navigate} start_from_basics={false}/>
  </div>;
}
