import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wards/')({
  component: () => <div>Hello /wards/!</div>
})

interface WardsPageProps {

}

export function WardsPage({}:WardsPageProps){
return (
 <div className='w-full min-h-screen h-full flex flex-col items-center justify-center'>
  <h1 className='text-xl'>Wards</h1>
 </div>
);
}
