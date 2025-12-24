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
                justify-start
                w-[1200px] 
                h-[130px] 
                mb-[30px]
                mt-[50px]
                mx-auto
                text-white 
                text-[80px]">
                Villas
            </div>
            <div className="flex flex-col w-screen flex-1">
                {
                    Array.from({ length: 5 }, (v, ind) => {

                        return (
                            <div className='flex flex-row h-[170px] w-[1200px] mx-auto justify-start items-center' key={ind}>
                                <Button to={`villas/${ind + 1}`} type={"image-button"}>
                                    <Image src={Cabin_1} alt="cabin" height={170} width={280} />
                                    <div className="h-[170px] w-[820px] flex items-center justify-center border-2 border-red-300">
                                        Details
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
