import { Card } from "./component/Card/Card";

export default function App()
{
  return (
    
    <main className="flex min-h-screen items-center justify-center bg-slate-900 text-white flex-col">
      
      <h1 className="text-3xl font-bold text-sky-400">Tailwind V4 + React + Type</h1>
      
      <section className="flex-row">
        <Card
        title = "Batatinha"
        description="É uma batata"
        tag="comida"
        price={200}/>
      
      <Card
        title = "Batatinha"
        description="É uma batata"
        tag="comida"
        price={200}/>
      </section>
      
    </main>
  )
}