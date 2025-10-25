import React from 'react'
import Image from 'next/image';

import { OverlayPropsInterface } from '@/_interfaces/component_interfaces';
import Close from "../../public/static_images/close.png"

function Overlay({ type, callbackSetter }: OverlayPropsInterface) {

    function handleClick() {
        if (callbackSetter !== undefined)
            callbackSetter(s => !s);
    }

    return (
        <div className='
                h-screen 
                w-screen
                absolute
                bottom-[0px]
                flex
                flex-col
                justify-center
                items-center 
                backdrop-blur-md
        '>
            {
                type === "form" ?
                    <>
                        <Image
                            src={Close}
                            alt="close"
                            width={30}
                            height={30}
                            onClick={handleClick}
                            className='
                                    cursor-pointer
                                '
                        />
                        <div className='
                                w-[600px]
                                h-[440px]
                                bg-[black]
                                opacity-70
                        '>
                            Form
                        </div>
                    </> :
                    <span className='text-[white] text-[30px]'>
                        Loading...
                    </span>
            }
        </div>
    )
}

export default Overlay;
