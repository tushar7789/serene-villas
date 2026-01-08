'use client'

import React, { useState, useContext } from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Divider from '@mui/material/Divider';

import Button from '../../_components/button';
import Overlay from '../../_components/overlay'

import CabinImg from "../../../public/static_images/balcony-i.png"
import VillaSpecsComp from '../../_components/villaSpecsComp';
import AlbumIcon from "../../../public/static_images/album-icon.png"
import { RootContext } from '../../_components/rootProvider';

function VillaId() {
    const pathname = usePathname();
    const id = pathname.split("/")[2];

    const [overlayState, setOverlayState] = useState(false);
    const { callbackSetter } = useContext(RootContext);

    const handleAlbumOverlayOpen = () => {
        if (callbackSetter !== undefined) {
            callbackSetter(s => !s);
        }
    }

    return (
        <>
            <div className='h-full w-screen px-[150px] flex flex-row items-center justify-between'>
                <div className='h-[calc(85%)] w-[1000px] flex flex-row items-center justify-between bg-gradient-to-r from-gray-100/60 to-gray-200/40 rounded-xl shadow-2xl'>
                    <div className='h-full w-[420px] flex flex-col items-start justify-between'>
                        <Image src={CabinImg.src} height={350} width={420} alt="" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                        <div className='h-[225px] w-full flex flex-col justify-between items-center border-r-0 border-r-black'>
                            <ul className='h-[160px] w-[365px] text-[14px] pt-[40px]'>
                                <VillaSpecsComp />
                            </ul>
                            <Divider variant="middle" flexItem />
                            <p className='h-[40px] w-full px-[20px] flex justify-between text-[20px]'>
                                <span>Total Price</span>
                                <span>Rs. 43200</span>
                            </p>
                        </div>
                    </div>
                    <Image src={AlbumIcon.src} alt="" height={30} width={30} style={{ position: 'relative', zIndex: '10', bottom: '210px', right: '50px', cursor: 'pointer' }} onClick={handleAlbumOverlayOpen} />
                    <div className='h-full w-[500px] flex flex-col items-start justify-between text-white bg-red-400'>
                        <span className='text-[100px]'>
                            Villa #{id}
                        </span>
                        <div className='flex flex-row w-[380px] items-center justify-end '>
                            <Button to="/" type="booking" callbackSetter={setOverlayState}>Book</Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* {
                overlayState ?
                    <Overlay type="form" callbackSetter={setOverlayState} /> :
                    null
            } */}
        </>
    )
}

export default VillaId;
