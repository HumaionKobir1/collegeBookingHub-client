import { useEffect, useState } from "react";
import Cards from "../../shared/Cards/Cards";

const Collage = () => {
    const [collegesData, setCollagesData] = useState([]);

    const url = 'http://localhost:5000/allCollage';
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCollagesData(data)
            console.log(data)
        })
    }, [])




    return (
        <div>
            <div className=" banner relative bg-gradient-to-r from-blue-500 to-purple-500 py-12">
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 opacity-40 bg-black"
                />
                <div
                    className="absolute top-0 left-0 right-0 bottom-0"
                    
                />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-10 relative">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                            All University & Collage
                        </h1>
                    </div>
                </div>
            </div>
            <div className=" md:w-[1400px] w-full mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                

                {
                    collegesData.map(data => <Cards
                        key={data._id}
                        data={data}
                    ></Cards>)
                }

                
            </div>
        </div>
    );
};

export default Collage;