
const Cards = ({data}) => {
    const {name, image, admission_dates, events, research_history, sports} = data;
    return (
        <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-md bg-white">
            <img src={image} alt={name} className="w-full h-56 object-cover object-center" />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-600 text-sm mb-4">Admission Dates: {admission_dates}</p>
                <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Events</h3>
                <ul className="list-disc list-inside">
                    {events.map((event, index) => (
                    <li key={index}>{event}</li>
                    ))}
                </ul>
                </div>
                <p className="text-gray-600 mb-4">{research_history}</p>
                <div>
                <h3 className="text-lg font-semibold mb-2">Sports</h3>
                <ul className="list-disc list-inside">
                    {sports.map((sport, index) => (
                    <li key={index}>{sport}</li>
                    ))}
                </ul>
                </div>
                <button
                className="block mx-auto mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg focus:outline-none">
                    Details
                </button>
            </div>
        </div>
    );
};

export default Cards;