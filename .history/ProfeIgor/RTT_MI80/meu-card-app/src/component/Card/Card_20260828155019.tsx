import "tailwindcss";
import React from "react";

interface CardProps{
    title : string;
    description : string;
    tag : string;
    price : number
};

export const Card :  React.FC<CardProps> = ({title, description, tag, price}) => {
    return (
        <div className="max-w-sm rounded-2xl bg-slate-800 p-6 ">

        </div>
    )
}