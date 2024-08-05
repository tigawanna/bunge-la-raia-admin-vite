import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from './-component/landing/HeroSection';



export const Route = createFileRoute("/")({
  component: HomePage,
  // async beforeLoad(ctx) {
  //   await authGuard({ctx});
  // }
});




export function HomePage(){
return (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <HeroSection />
  </div>
);
}
