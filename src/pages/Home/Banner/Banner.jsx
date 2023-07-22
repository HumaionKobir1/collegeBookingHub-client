import './style.css'
const Banner = () => {
    return (
        <div className=" banner relative bg-gradient-to-r from-blue-500 to-purple-500 py-12">
            <div
                className="absolute top-0 left-0 right-0 bottom-0 opacity-50 bg-black"
            />
            <div
                className="absolute top-0 left-0 right-0 bottom-0"
                
            />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                    Welcome to our Booking Website
                </h1>
                <div className="mt-6">
                    <form className="flex items-center justify-center max-w-md mx-auto">
                    <input
                        type="text"
                        className="px-4 py-2 w-full border-2 border-transparent focus:outline-none focus:border-white rounded-l-md"
                        placeholder="Search..."
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-[9.5px] rounded-r-md"
                    >
                        Search
                    </button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;