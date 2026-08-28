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
        <div className="max-w-sm rounded-2xl bg-slate-800 p-6 shadow-xl border border-slate-700">

            <span className="inline-block rounded=full bg-sky-500/10 px-3 py-1 text-xs font-semibold">

            </span>

        </div>
    )
}