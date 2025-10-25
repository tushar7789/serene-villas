'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation';

import Button from '@/_components/button';
import VillaCarousel from '@/_components/villaCarousel';
import Overlay from '@/_components/overlay';

function VillaId() {
    const pathname = usePathname();
    const id = pathname.split("/")[2];

    const [overlayState, setOverlayState] = useState(false);

    return (
        <>
            <div className='flex flex-row h-[460px] width-[820px] items-center justify-between mt-[30px] mx-[50px] backdrop-brightness-30'>
                <div className='
                            flex 
                            flex-col
                            items-start 
                            justify-between
                            w-[380px]  
                            h-[400px]
                            text-white 
                            ml-[30px]
                    '>
                    <span className='text-[100px]'>
                        Villa #{id}
                    </span>
                    <div className='flex flex-row w-[380px] items-center justify-end '>
                        <Button to="/" type="booking" callbackSetter={setOverlayState}>Book</Button>
                    </div>
                </div>
                <VillaCarousel />
            </div>
            {
                overlayState ?
                    <Overlay type="form" callbackSetter={setOverlayState} /> :
                    null
            }
        </>
    )
}

export default VillaId;
