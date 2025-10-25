import Image from "next/image";

import Cabin_1 from "../../../public/static_images/living-room-i.png";
import Cabin_2 from "../../../public/static_images/bedroom-i.png";
import Button from "@/_components/button";


function Villas() {

    return (
        <>
            <div className="
                flex 
                flex-row 
                items-center 
                justify-center
                w-screen 
                h-[130px] 
                my-[15px] 
                text-white 
                text-[110px]">
                Villas
            </div>
            <div className="flex flex-col w-screen flex-1">
                {
                    Array.from({ length: 5 }, (v, ind) => {
                        const villaOneId = (ind + 1) * 2 - 1;
                        const villaTwoId = (ind + 1) * 2;

                        return (
                            <div className='flex flex-row h-[500px] w-screen mb-[50px] justify-evenly items-center' key={ind}>
                                <div className='flex backdrop-blur-sm h-[380px] w-[530px]'>
                                    <Button to={`villas/${villaOneId}`} type={"image-button"}>
                                        <Image src={Cabin_1} alt="cabin" fill={true} />
                                        <span
                                            className="
                                            flex
                                            relative 
                                            bottom-[100px]
                                            right-[30px]
                                            h-[80px]
                                            w-[380px]
                                            text-[40px]
                                            text-black
                                            bg-white
                                            pl-[20px]
                                            items-center
                                    ">
                                            Villa {villaOneId}
                                        </span>
                                    </Button>
                                </div>
                                <div className='flex backdrop-blur-sm h-[380px] w-[530px]'>
                                    <Button to={`villas/${villaTwoId}`} type={"image-button"}>
                                        <Image src={Cabin_2} alt="cabin" fill={true} />
                                        <span
                                            className="
                                            flex
                                            relative 
                                            bottom-[100px]
                                            right-[30px]
                                            h-[80px]
                                            w-[380px]
                                            text-[40px]
                                            text-black
                                            bg-white
                                            pl-[20px]
                                            items-center
                                    ">
                                            Villa {villaTwoId}
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Villas;
