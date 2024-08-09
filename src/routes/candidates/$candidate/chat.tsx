import { createFileRoute, useParams } from '@tanstack/react-router'
import { ChatWithCandidate } from '../-components/candidates/views/ChatWithCandidate';

export const Route = createFileRoute("/candidates/$candidate/chat")({
  component: CandidateChatPage,
});



export function CandidateChatPage(){
  const {candidate} = useParams({
    from:"/candidates/$candidate/chat"
  })
return (
 <div className='w-full h-screen overflow-y-y-hidden flex flex-col items-center justify-center'>
  <ChatWithCandidate candidate_id={candidate}/>
 </div>
);
}
