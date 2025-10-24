'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import { Carousel } from "antd";
import Image from 'next/image';

import Button from '@/_components/button';
import LivingRoomImg from '../../../../public/static_images/living-room-i.png';
import BedroomImg from '../../../../public/static_images/bedroom-i.png';
import KitchenImg from '../../../../public/static_images/kitchen-i.png';
import BathroomImg from '../../../../public/static_images/bathroom-i.png';
import BalconyImg from '../../../../public/static_images/balcony-i.png';


function VillaId() {
    const pathname = usePathname();
    const id = pathname.split("/")[2];
    return (
        <>
            <div className='flex flex-row h-[460px] width-[820px] items-center justify-between mt-[60px] mx-[50px] backdrop-brightness-30'>
                <div className='
                            flex 
                            flex-col
                            items-start 
                            justify-between
                            w-[640px]  
                            h-[400px]
                            text-white 
                            ml-[30px]
                            border-2 
                            border-red-500
                    '>
                    <span className='text-[100px]'>
                        Villa #{id}
                    </span>
                    <Button to="/" type="secondary">Book</Button>
                </div>
                <Carousel
                    autoplay={{ dotDuration: true }}
                    autoplaySpeed={5000}
                    className='
                        h-[400px] 
                        w-[400px]
                        mr-[30px]
                    '
                >
                    <div>
                        <Image
                            src={LivingRoomImg}
                            alt="living-room-img"
                        />
                    </div>
                    <div>
                        <Image
                            src={BedroomImg}
                            alt="bedroom-img"
                        />
                    </div>
                    <div>
                        <Image
                            src={KitchenImg}
                            alt="kitchen-img"
                        />
                    </div>
                    <div>
                        <Image
                            src={BathroomImg}
                            alt="bathroom-img"
                        />
                    </div>
                    <div>
                        <Image
                            src={BalconyImg}
                            alt="balcony-img"

                        />
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default VillaId;
