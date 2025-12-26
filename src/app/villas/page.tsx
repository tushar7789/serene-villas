'use client'

import Image from "next/image";
import Divider from '@mui/material/Divider';

import Cabin_1 from "../../../public/static_images/living-room-i.png";
import Button from "@/_components/button";
import DatesInputBox from "@/_components/datesInputBox";
import VillaSpecsComp from "@/_components/villaSpecsComp";

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
                            <div className='h-[300px] w-screen px-[150px] mt-[20px]' key={ind}>
                                <Button to={`villas/${ind + 1}`} type={"image-button"}>
                                    <Image src={Cabin_1} alt="cabin" height={340} width={450} style={{ borderRadius: '8px' }} />
                                    <div className="h-[260px] w-[400px] flex flex-col items-center rounded-r-xl ">
                                        <ul className={`h-[180px] w-[370px] text-[14px] pt-[20px]`}>
                                            <VillaSpecsComp />
                                        </ul>
                                        <Divider variant="middle" flexItem />
                                        <div className="h-[60px] w-full flex items-center justify-end">
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
