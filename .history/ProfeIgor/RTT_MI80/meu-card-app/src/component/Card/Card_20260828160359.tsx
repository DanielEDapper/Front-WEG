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

            <span className="inline-block rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400 border border-sky-500/20">
                {tag}
            </span>

            <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">{description}</p>

            <div className="mt-6 flex items-center justify-between border-t border-slate-700/60 pt-4">
                <div>
                    <span className="block text-xs text-slate-500"></span>
                    <span className="text-2xl font-bold text-white">R$ {price}</span>
                </div>

                <button className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-">

                </button>
            </div>
        </div>
    )
}