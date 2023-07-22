import { useEffect, useState } from "react";
import Cards from "../../../shared/Cards/Cards";
import Banner from "../Banner/Banner";

const CollageCard = () => {
    const [collegesData, setCollagesData] = useState([]);

    const url = 'collage.json';
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
            <Banner></Banner>
            <div className="cmt-10 md:w-[1400px] w-full mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    collegesData.map(data => <Cards
                        key={data.id}
                        data={data}
                    ></Cards>)
                }
            </div>
        </div>
    );
};

export default CollageCard;