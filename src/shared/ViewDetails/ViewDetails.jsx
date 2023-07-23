import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const collageDetails = useLoaderData();
    const {name, image, details, research_history, events, admission_process, sports} = collageDetails;

    return (
        <div className="">
            <div className="relative">
                <img src={image} alt={name} className="w-full h-96 object-cover object-center opacity-70" />
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl text-center z-10 p-4">
                {name}
                </h2>
            </div>

            <div className="md:w-[1400px] w-full mx-auto p-2 rounded-lg overflow-hidden shadow-md bg-white">
                <h2 className="text-2xl font-semibold mb-2">College Details:</h2>
                <p className="text-gray-600 text-sm mb-4"> {details}</p>
                <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Admission Process</h3>
                <p className="text-gray-600">{admission_process}</p>
                </div>
                <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Events</h3>
                <ul className="list-disc list-inside">
                    {events.map((event, index) => (
                    <li key={index}>
                        <strong>{event.name}</strong> - {event.date}
                        <p className="text-gray-600">{event.description}</p>
                    </li>
                    ))}
                </ul>
                </div>
                <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Research Works</h3>
                <p className="text-gray-600">{research_history}</p>
                </div>
                <div>
                <h3 className="text-lg font-semibold mb-2">Sports Categories</h3>
                <ul className="list-disc list-inside">
                    {sports.map((sport, index) => (
                    <li key={index}>{sport}</li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;