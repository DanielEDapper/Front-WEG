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
    <div className="w-70 rounded-2xl border border-[#617891]/30 bg-[#25344F] p-5 shadow-lg hover:scale- transition">

        <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 shrink-0">
                <img
                    src={avatarUrl}
                    alt={name}
                    className="h-14 w-14 rounded-full object-cover"
                />
                <span
                    className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#25344F] ${
                        isOnline ? "bg-[#D8B893]" : "bg-[#617891]"
                    }`}
                />
            </div>

            <div>
                <span className="block text-sm font-semibold text-[#D8B893]">{name}</span>
                <span className="block text-xs text-[#617891]">{role}</span>
            </div>
        </div>

        <div className="mt-4 flex items-center gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${isOnline ? "bg-[#D8B893]" : "bg-[#617891]"}`} />
            <span className={`text-xs font-medium ${isOnline ? "text-[#D8B893]" : "text-[#617891]"}`}>
                {isOnline ? "Online" : "Offline"}
            </span>
        </div>

        <div className="mt-4 flex border-t border-[#617891]/30 pt-3.5">
            <div className="flex-1 text-center">
                <h2 className="text-lg font-semibold text-[#D8B893]">{projectsCount}</h2>
                <p className="text-xs text-[#617891]">Projetos</p>
            </div>

            <div className="w-px bg-[#617891]/30" />

            <div className="flex-1 text-center">
                <h2 className="text-lg font-semibold text-[#D8B893]">{followersCount}</h2>
                <p className="text-xs text-[#617891]">Seguidores</p>
            </div>
        </div>

        <div className="mt-4 flex gap-2.5">
            <button className="flex-1 rounded-lg bg-[#6F4D38] py-2 text-sm font-semibold text-[#D8B893] transition-colors hover:bg-[#632024] cursor-pointer">
                Seguir
            </button>
            <button className="flex-1 rounded-lg border border-[#617891]/40 py-2 text-sm font-semibold text-[#617891] transition-colors hover:bg-[#617891]/10 cursor-pointer">
                Mensagem
            </button>
        </div>

    </div>
);
}

export default ProfileCard;