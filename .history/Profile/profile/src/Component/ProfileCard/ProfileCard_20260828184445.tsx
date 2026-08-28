import React from "react";

interface ProfileCardProps{
    name : string;
    role : string;
    avatarUrl : string;
    isOnline : boolean;
    projectsCount : number;
    followersCount : number;
};

export const ProfileCard: React.FC<ProfileCardProps> = ({name, role, avatarUrl, isOnline, projectsCount, followersCount}) =>
{
    return (
    <div className="w-70 rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg">

        <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 shrink-0">
                <img
  
  
  
  src={avatarUrl}
                    alt={name}
                    className="h-14 w-14 rounded-full object-cover"
                />
                <span
                    className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-slate-900 ${
                        isOnline ? "bg-emerald-500" : "bg-slate-500"
                    }`}
                />
            </div>

            <div>
                <span className="block text-sm font-semibold text-white">{name}</span>
                <span className="block text-xs text-slate-400">{role}</span>
            </div>
        </div>

        <div className="mt-4 flex items-center gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${isOnline ? "bg-emerald-500" : "bg-slate-500"}`} />
            <span className={`text-xs font-medium ${isOnline ? "text-emerald-400" : "text-slate-400"}`}>
                {isOnline ? "Online" : "Offline"}
            </span>
        </div>

        <div className="mt-4 flex border-t border-slate-800 pt-3.5">
            <div className="flex-1 text-center">
                <h2 className="text-lg font-semibold text-white">{projectsCount}</h2>
                <p className="text-xs text-slate-400">Projetos</p>
            </div>

            <div className="w-px bg-slate-800" />

            <div className="flex-1 text-center">
                <h2 className="text-lg font-semibold text-white">{followersCount}</h2>
                <p className="text-xs text-slate-400">Seguidores</p>
            </div>
        </div>

        <div className="mt-4 flex gap-2.5">
            <button className="flex-1 rounded-lg bg-sky-400 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-sky-300 cursor-pointer">
                Seguir
            </button>
            <button className="flex-1 rounded-lg border border-slate-700 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800 cursor-pointer">
                Mensagem
            </button>
        </div>

    </div>
);
}