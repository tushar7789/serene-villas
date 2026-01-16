'use client'

import Image from "next/image";
import Divider from '@mui/material/Divider';

import Cabin_1 from "../../public/static_images/living-room-i.png";
import Button from "../_components/button";
import VillaSpecsComp from "../_components/villaSpecsComp";
import FilterPanel from "../_components/filterPanel";
import { villaList } from "../_utils/dummyData";

const Villas = () => {

    return (
        <>
            <div className="h-35 w-screen px-40 pb-10 flex items-end justify-start bg-linear-to-r from-gray-50 to-gray-100 sticky top-0 z-20">
                <FilterPanel />
            </div>
            <div className="h-100 w-screen flex flex-col justify-start items-center">
                {
                    villaList.map((villaDetails, ind) => {
                        const id = villaDetails.name.split(" ")[1];
                        return (
                            <div className='w-screen px-40 mt-10' key={ind}>
                                <Button to={`villas/${id}`} type={"image-button"}>
                                    <Image src={Cabin_1} alt="cabin" height={320} width={350} style={{ borderRadius: '8px' }} />
                                    <div className="h-full w-140 rounded-r-xl ">
                                        <VillaSpecsComp villaDetails={villaDetails} />
                                        <Divider variant="middle" flexItem />
                                    </div>
                                </Button>
                            </div >
                        )
                    })
                }
            </div >
        </>
    )
}

export default Villas;
