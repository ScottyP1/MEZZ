export default function Tour() {
    const tourDates = Array.from({ length: 10 }, (_, i) => ({
        date: `June ${i + 1}, 2025`,
        venue: `Stadium ${i + 1}`,
        location: `City ${i + 1}, State`,
        link: "#"
    }));

    return (
        <div className="mt-32 px-4 max-w-6xl mx-auto">
            <h1 className="text-center text-4xl tracking-[10px] mb-8">2025 TOUR</h1>

            {/* Headers - match 4 columns */}
            <div className="grid grid-cols-4 text-center text-sm font-semibold border-b pb-2 border-white/20 uppercase">
                <div>Date</div>
                <div>Venue</div>
                <div>Location</div>
                <div></div>
            </div>

            {/* Tour List */}
            <ul className="mt-4 divide-y divide-white/10">
                {tourDates.map((date, idx) => (
                    <li key={idx} className="grid grid-cols-4 text-center py-4 items-center text-sm">
                        <div>{date.date}</div>
                        <div>{date.venue}</div>
                        <div>{date.location}</div>
                        <div>
                            <a
                                href={date.link}
                                className="px-3 py-1 text-xs border border-white rounded hover:bg-white hover:text-black transition"
                            >
                                Tickets
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    );
}
