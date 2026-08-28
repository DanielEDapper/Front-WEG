import React from "react";

interface ProfileCardProps{
    name : string;
    role : string;
    avatarUrl : string;
    isOnline : boolean;
};

export const ProfileCard: React.FC<ProfileCardProps> = ({name, role, avatarUrl, isOnline}) =>
{

}