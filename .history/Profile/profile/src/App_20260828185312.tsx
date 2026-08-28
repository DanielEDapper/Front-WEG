import { ProfileCard } from "./Component/ProfileCard/ProfileCard"

export default function App()
{
    return (
      <main className="flex flex-col min-h-screen items-center justify-center bg-slate-900 text-white gap-9">
        <h1 className="color-sky-700 font-bold">Nossos colaboradores</h1>

        <section className="flex flex-row gap-9">
          <ProfileCard
          name="Marco Grassi"
          role="Frontend Developer"
          avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
          isOnline = {true}
          projectsCount={32}
          followersCount={1200}
          />

          <ProfileCard
          name="Vinicius Zick"
          role="UX Designer"
          avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
          isOnline = {false}
          projectsCount={18}
          followersCount={890}
          />
        </section>
      </main>
    )
}