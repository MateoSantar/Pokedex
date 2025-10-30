'use client';
export default function Error({error}:{error:Error}) {
    return <p className="p-6 text-red-600">Error:{error.message}</p>;
}