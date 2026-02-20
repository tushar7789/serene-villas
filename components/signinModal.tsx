import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

import Cross from "../public/static_images/cross.png"
import { OverlayPropsInterface } from '../interfaces/component_interfaces';
import { SignInOptionsList } from '../utils/data/imageDirectory';

const SigninModal: React.FC<OverlayPropsInterface> = ({ callbackSetter }) => {

    const handleOverlayClose = () => {
        if (callbackSetter !== undefined) {
            callbackSetter();
        }
    }

    const handleSignInOptionClick = (signInOption: string) => {
        if (signInOption === "Google") {
            localStorage.setItem("redirectReason", "signin");
            signIn(signInOption);
        }
    }

    return (
        <div className='z-20 absolute h-screen w-screen bg-black/70 text-[50px] flex items-center justify-center'>
            <div className='h-112.5 w-100 p-6.25 flex flex-col justify-start bg-gray-200 rounded-md'>
                <p className='h-12.5 w-full flex justify-between items-center text-[33px]'>
                    <i>TSV</i>
                    <Image src={Cross.src} height={40} width={40} alt="" style={{ cursor: 'pointer' }} onClick={handleOverlayClose} />
                </p>
                {
                    SignInOptionsList.map((ele, ind) => {
                        return (
                            <div className='h-12.5 w-full px-7.5 mt-5 shadow-md flex justify-between items-center rounded-md cursor-pointer hover:shadow-2xl' key={ind} onClick={() => handleSignInOptionClick(ele[0].toString())}>
                                <Image src={ele[1]} height={35} width={35} alt="" style={{ cursor: 'pointer' }} />
                                <span className='h-full w-65  flex justify-center items-center text-[16px]'>Sign in with {ele[0].toString()}</span>
                            </div>
                        )
                    })
                }
                <p className='h-12.5 w-full mt-4 flex justify-center items-center text-[12px]'>
                    Know more about our
                    <span className='text-blue-700 mx-0.75'>
                        <Link href=''>Policy</Link>
                    </span>
                    and
                    <span className='text-blue-700 mx-0.75'>
                        <Link href=''>Terms and Conditions</Link>
                    </span>
                    .
                </p>
            </div>
        </div>
    )
}

export default SigninModal;
