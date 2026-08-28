import { ProfileCard } from "./Component/ProfileCard/ProfileCard"

export default function App()
{
    return (
      <main className="flex flex-col min-h-screen items-center justify-center bg-slate-900 text-white">
        <h1>Algo</h1>

        <section>
          <ProfileCard
          name=""
          role=""
          avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
          projectsCount={32}
          followersCount={1200}
          />
        </section>
      </main>
    )
}