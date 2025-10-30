'use client';

import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchClient() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get('q') as string;
    if (q) window.location.href = `/pokedex/${q.toLowerCase()}`;
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 md:flex-row">
      <input
        name="q"
        placeholder="Buscar por nombre..."
        className="border rounded px-3 py-2 w-full bg-yellow-200 text-blue-900"
      />
      <button className="border flex justify-center md:block rounded p-3 px-3 cursor-pointer bg-blue-900 text-yellow-400"><MagnifyingGlassIcon className="size-6 " /></button>
    </form>
  );
}
