import { Card } from "./component/Card/Card";

export default function App()
{
  return (
    
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-white">
      
      <h1 className="text-3xl font-bold text-sky-400">Tailwind V4 + React + Type</h1>
      <div className=" flex justify-center">
        <Card
        title = "Batatinha"
        description="É uma batata"
        tag="comida"
        price={200}/>
      </div>
      
    </div>
  )
}