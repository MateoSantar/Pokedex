'use client';

import React from "react";

export default function SearchClient() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get('q') as string;
    if (q) window.location.href = `/pokedex/${q.toLowerCase()}`;
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input
        name="q"
        placeholder="Buscar por nombre..."
        className="border rounded px-3 py-2 w-full"
      />
      <button className="border rounded px-3">Ir</button>
    </form>
  );
}
