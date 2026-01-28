'use client'

import React, { useState, useContext } from 'react'
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Divider from '@mui/material/Divider';

import Button from '../../_components/button';
import Overlay from '../../_components/overlay'
import { AmmenitiesComp, TitleComp } from '../../_components/villaSpecsComp';

import CabinImg from "../../../public/static_images/balcony-i.png"
import AlbumIcon from "../../../public/static_images/album-icon.png"
import { RootContext } from '../../_components/rootProvider';

function VillaId() {
    const pathname = usePathname();
    const id = pathname.split("/")[2];

    const villaDetailsString = useSearchParams().get('villaDetails');
    const villaDetails = villaDetailsString !== null ? JSON.parse(villaDetailsString) : null;


    const [overlayState, setOverlayState] = useState(false);
    const { callbackSetter } = useContext(RootContext);

    const handleAlbumOverlayOpen = () => {
        if (callbackSetter !== undefined) {
            callbackSetter(s => !s);
        }
    }

    return (
        <>
            <div className='h-full w-screen px-37.5 flex flex-row items-center justify-between'>
                <div className='h-[calc(85%)] w-250 flex flex-row items-center justify-between bg-linear-to-r from-gray-100/60 to-gray-200/40 rounded-xl shadow-2xl'>
                    <div className='h-full w-105 flex flex-col items-start justify-between'>
                        <Image src={CabinImg.src} height={350} width={420} alt="" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                        <div className='h-56.25 w-full flex flex-col justify-between items-center border-r-0 border-r-black'>
                            <div className='h-40 w-full px-5 py-2 text-[14px]'>
                                <TitleComp name={villaDetails.name} area={villaDetails.area} rating={villaDetails.rating.toLocaleString()} titleType='2' />
                                <AmmenitiesComp ammenities={villaDetails.ammenities.ammenities} ammenitiesType='2' />
                            </div>
                            <Divider variant="middle" flexItem />
                            <p className='h-10 w-full px-5 flex justify-between text-[20px]'>
                                <span>Total Price</span>
                                <span>Rs. {villaDetails.cost}</span>
                            </p>
                        </div>
                    </div>
                    <Image src={AlbumIcon.src} alt="" height={30} width={30} style={{ position: 'relative', zIndex: '10', bottom: '210px', right: '50px', cursor: 'pointer' }} onClick={handleAlbumOverlayOpen} />
                    <div className='h-full w-125 flex flex-col items-start justify-between '>
                        <div className='h-70 w-full flex flex-col justify-start items-center'>
                            <span className='h-15 w-full px-4 flex items-center text-[30px]'>
                                Description
                            </span>
                            <span className='h-40 w-full px-4 flex items-center text-justify overflow-x-clip'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga officia cupiditate nam ex quam nulla, ad soluta optio distinctio asperiores, odio praesentium eveniet iste doloremque deleniti expedita magni assumenda reiciendis.
                            </span>
                        </div>
                        <div className='h-40 w-full px-5 flex flex-col justify-evenly items-center'>
                            <Button to="/" type="boundary-button">Add to Wishlist</Button>
                            <Button to="/" type="boundary-button">Book</Button>
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
