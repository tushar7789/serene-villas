'use client'

import Image from "next/image";
import Divider from '@mui/material/Divider';

import Cabin_1 from "../../public/static_images/living-room-i.png";
import Button from "../_components/button";
import DatesInputBox from "../_components/datesInputBox";
import VillaSpecsComp from "../_components/villaSpecsComp";

const Villas = () => {

    return (
        <>
            <div className="h-35 w-screen px-35 flex items-center justify-start bg-white sticky top-0 z-20">
                <DatesInputBox />
            </div>
            <div className="h-100 w-screen flex flex-col justify-start items-center">
                {
                    Array.from({ length: 5 }, (v, ind) => {

                        return (
                            <div className='w-screen px-40 mt-10' key={ind}>
                                <Button to={`villas/${ind + 1}`} type={"image-button"}>
                                    <Image src={Cabin_1} alt="cabin" height={320} width={350} style={{ borderRadius: '8px' }} />
                                    <div className="h-full w-140 rounded-r-xl ">
                                        <VillaSpecsComp />
                                        {/* <Divider variant="middle" flexItem /> */}
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
