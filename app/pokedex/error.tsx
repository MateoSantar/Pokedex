'use client';

import Link from "next/link";

export default function Error({error}:{error:Error}) {
    return (
        <div className="flex flex-col items-center">
        <p className="p-6 text-red-600">Error:{error.message}</p>
        <Link
            href="/pokedex"
        >
        <button className="bg-gray-500 p-4 text-white rounded-md">Volver</button>
        </Link>
        </div>
    );
}
