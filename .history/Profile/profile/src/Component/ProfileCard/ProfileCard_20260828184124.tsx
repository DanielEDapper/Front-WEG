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
        <div>
            <div>
                <div>
                    <span>
                    {avatarUrl}
                    </span>

                    <div>
                        <span>{name}</span>
                        <span>{role}</span>
                    </div>
                </div>
                <span>{isOnline}</span>
            </div>
            
            <div>
                <span>
                    <h2>{32}</h2>
                    <p>Projetos</p>
                </span>

                <span>
                    <h2></h2>
                    <p>Projetos</p>
                </span>
            </div>
        </div>
    );
}