import { CardsListSuspenseFallback } from '@/components/loaders/GenericDataCardsListSuspenseFallback';
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react';
import { z } from 'zod';
const searchparams = z.object({
  is_fresh: z.boolean().optional(),
  form_step: z.number().default(0),
});
export const Route = createFileRoute("/candidates/$candidate/update")({
  component: UpdateCandidate,
  validateSearch: (search) => searchparams.parse(search),
});



export function UpdateCandidate(){
return (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <Suspense fallback={<CardsListSuspenseFallback cardClassName="w-[40%]" cards={2} />}>
      <UpdateCandidate />
    </Suspense>
  </div>
);
}
