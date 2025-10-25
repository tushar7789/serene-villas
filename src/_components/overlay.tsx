import { OverlayPropsInterface } from '@/_interfaces/component_interfaces';
import React from 'react'

function Overlay({ callbackSetter }: OverlayPropsInterface) {

    function handleClick() {
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
                backdrop-blur-sm
        '>
            <div className='
                w-[screen]
                h-[50px]
                cursor-pointer
            '
                onClick={handleClick}
            >
                Cross
            </div>
            <div className='
                w-[800px]
                h-[400px]
                bg-blue-300
            '>
                Form
            </div>
        </div>
    )
}

export default Overlay;
