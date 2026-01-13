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
            <div className="h-[150px] w-screen px-[150px] flex items-center justify-start bg-white sticky top-0 z-20">
                <DatesInputBox />
            </div>
            <div className="h-[400px] w-screen flex flex-col justify-start items-center">
                {
                    Array.from({ length: 5 }, (v, ind) => {

                        return (
                            <div className='h-[400px] w-screen px-30 mt-4 bg-green-300' key={ind}>
                                <Button to={`villas/${ind + 1}`} type={"image-button"}>
                                    <Image src={Cabin_1} alt="cabin" height={200} width={230} style={{ borderRadius: '8px' }} />
                                    <div className="h-35 w-160 flex flex-col items-center rounded-r-xl bg-amber-400">
                                        <ul className={`h-20 w-full text-[14px] pt-4`}>
                                            <VillaSpecsComp />
                                        </ul>
                                        <Divider variant="middle" flexItem />
                                        <div className="h-10 w-full flex items-center justify-end">
                                            Price : Rs. 42300
                                        </div>
                                    </div>
                                </Button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Villas;
