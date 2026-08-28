import { Card } from "./component/Card/Card";

export default function App()
{
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-white">
      

      <Card
        title = "Batatinha"
        description="É uma batata"
        tag="comida"
        price={200}/>
    </div>
  )
}