import React, { useState } from "react";
import { IMeme } from "../../interfaces/Meme";

interface ICardProps {
  content: IMeme;
}

export const MemeCard: React.FC<ICardProps> = ({ content }) => {
  return (
    <div className="w-[300px] bg-zinc-50 shadow-md border-[1px] border-purple-700 border-opacity-20 rounded-md flex flex-col justify-center items-center m-2 p-3">
      <h3 className="text-lg font-semibold">{content.name}</h3>
      <div className="flex flex-col items-center p-2">
        <div className="max-w-full">
          <img
            src={content.url}
            alt={content.name}
            className="object-scale-down"
          />
        </div>
        <span className="text-sm text-gray-500">
          Image dimension: {content.width}x{content.height}
        </span>
      </div>

      <span className="self-start pl-4 pt-1 flex font-semibold">
        Template ID: <p className="pl-2 font-normal">{content.id}</p>
      </span>
      <span className="self-start pl-4 pt-1 flex font-semibold">
        Caption times: <p className="pl-2 font-normal">{content.captions}</p>
      </span>
      <button
        type="button"
        className="border-2 border-purple-700 text-purple-700 font-semibold rounded-md p-1 mt-4 w-full hover:bg-purple-700 hover:text-white transition-all ease-in-out"
      >
        Ver meme
      </button>
    </div>
  );
};
