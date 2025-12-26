import Image from "next/image";
import Divider from '@mui/material/Divider';

import Cabin_1 from "../../../public/static_images/living-room-i.png";
import Button from "@/_components/button";
import DatesInputBox from "@/_components/datesInputBox";


function Villas() {

    return (
        <>
            <div className="h-[150px] w-screen px-[150px] flex items-center justify-start bg-white sticky top-0">
                <DatesInputBox />
            </div>
            <Divider variant="middle" />
            <div className="min-h-[400px] w-screen flex flex-col justify-start items-center">
                {
                    Array.from({ length: 5 }, (v, ind) => {

                        return (
                            <div className='h-[300px] w-screen px-[150px] mt-[20px]' key={ind}>
                                <Button to={`villas/${ind + 1}`} type={"image-button"}>
                                    <Image src={Cabin_1} alt="cabin" height={340} width={450} style={{ borderRadius: '8px' }} />
                                    <div className="h-[260px] w-[430px] flex items-center justify-center rounded-r-xl bg-amber-400">
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
