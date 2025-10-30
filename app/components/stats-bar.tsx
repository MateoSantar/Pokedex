import { stat } from "fs";

export default function StatsBar(stats: {
    label: string;
    value: Number;
    max: Number;
}) {

    return (
        <>
            <div className="bg-gray-300 rounded-md px-2 py-3 text-black w-fit-content shadow">
                {stats.label.toUpperCase()}
            </div>
            <div className="bg-gray-300 rounded-md px-2 py-3 text-black shadow">
                {stats.value.toString()}
            </div>
    </>

    );
}