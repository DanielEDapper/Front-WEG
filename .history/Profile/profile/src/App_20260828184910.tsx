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
          avatarUrl=""
          projectsCount={}
          followersCount={}
          />
        </section>
      </main>
    )
}