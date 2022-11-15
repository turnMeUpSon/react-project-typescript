import React from "react";
import { useAppSelector } from "../hooks/redux";

export function FavouritesPage() {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) return <p className="text-center">No items</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favourites.map((f) => (
          <li
            key={f}
            className="py-2 px-4 bg-gray-400 mr-2 rounded hover:shadow-md transition-all mb-5"
          >
            <a href={f} target="_blank">
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
