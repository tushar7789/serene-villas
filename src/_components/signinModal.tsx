import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Button from './button';
import Cross from "../../public/static_images/cross.png"
import { OverlayPropsInterface } from '@/_interfaces/component_interfaces';

const SigninModal: React.FC<OverlayPropsInterface> = ({ callbackSetter }) => {

    const handleOverlayClose = () => {
        console.log("lcosing::::::");
        if (callbackSetter !== undefined) {
            callbackSetter(s => !s);
        }
    }

    return (
        <div className='z-20 absolute h-screen w-screen bg-black/70 text-[50px] flex items-center justify-center'>
            <div className='h-[450px] w-[400px] p-[25px] flex flex-col justify-start bg-gray-200 rounded-md'>
                <p className='h-[50px] w-full flex justify-between items-center text-[33px]'>
                    <i>TSV</i>
                    <Image src={Cross.src} height={40} width={40} alt="" style={{ cursor: 'pointer' }} onClick={handleOverlayClose} />
                </p>
                {
                    Array.from({ length: 4 }, (ele, ind) => {
                        return (
                            <div className='h-[50px] w-full px-[30px] mt-[20px] shadow-md flex justify-between items-center rounded-md cursor-pointer hover:shadow-2xl' key={ind}>
                                <Image src={Cross.src} height={40} width={40} alt="" style={{ cursor: 'pointer' }} />
                                <span className='h-full w-[260px]  flex justify-center items-center text-[16px]'>Sign in with Cross</span>
                            </div>
                        )
                    })
                }
                <p className='h-[50px] w-full mt-[20px] flex justify-center items-center text-[12px]'>
                    Know more about our
                    <span className='text-blue-700 mx-[3px]'>
                        <Link href=''>Policy</Link>
                    </span>
                    and
                    <span className='text-blue-700 mx-[3px]'>
                        <Link href=''>Terms and Conditions</Link>
                    </span>
                    .
                </p>
            </div>
        </div>
    )
}

export default SigninModal;
