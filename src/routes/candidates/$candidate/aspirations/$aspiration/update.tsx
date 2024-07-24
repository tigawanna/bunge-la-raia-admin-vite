import { createFileRoute } from "@tanstack/react-router";
import { UpdateAspirations } from "../-components/form/UpdateAspirations";
import { Suspense } from "react";
import { CardsListSuspenseFallback } from "@/components/loaders/GenericDataCardsListSuspenseFallback";

export const Route = createFileRoute("/candidates/$candidate/aspirations/$aspiration/update")({
  component: UpdateAspirationPage,
  
});

export function UpdateAspirationPage() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center gap-2">
    <Suspense fallback={<CardsListSuspenseFallback cardClassName="w-[40%]" cards={2} />}>
        <UpdateAspirations />
      </Suspense>
    </div>
  );
}
