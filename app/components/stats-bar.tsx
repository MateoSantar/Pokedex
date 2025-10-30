export default function StatsBar(stats: {
    label: string;
    value: number;
    max: number;
}) {

    return (
        <>
            <div className="bg-gray-300 border rounded-md px-2 py-3 text-black shadow text-center text-md md:text-lg">
                {stats.label.toUpperCase()}
            </div>
            <div className="flex items-center border justify-center bg-gray-400 rounded-md px-2 py-3 text-white shadow text-center text-lg">
                {stats.value.toString()}
            </div>
        </>

    );
}