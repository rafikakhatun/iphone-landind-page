import { useEffect, useState } from "react";
import MobileData from "./MobileData";

function MobileItemSection() {

    const [mobileData, setMobileData] = useState([]);

    const fetchJson = async () => {

        const responce = await fetch("/mobiledata.json");
        const result = await responce.json();
        setMobileData(result);

    }

    useEffect(() => {

        fetchJson();

    }, [])



    return (


        <>




            <section className=" px-15 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center" >
                {mobileData.map((data, index) => (

                    <MobileData key={index} datas={data}></MobileData>


                ))}

            </section>
            {/* view all button */}
            <div className="flex items-center justify-center">
                <button className="px-10 py-3 bg-blue-600 hover:bg-blue-900 rounded-md text-white">View All</button>
            </div>

        </>
    )
}


export default MobileItemSection;