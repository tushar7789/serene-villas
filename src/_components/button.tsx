'use client'

import React, { MouseEvent } from 'react'
import Link from 'next/link'
import { ButtonPropInterface } from '@/_interfaces/component_interfaces'

function Button({ children, to, type, callbackSetter }: ButtonPropInterface) {

    function handleClick(e: MouseEvent) {
        if (type === 'booking') {
            e.preventDefault();
            if (callbackSetter !== undefined) {
                callbackSetter(s => !s);
            }
        }
    }

    return (
        <Link
            href={to}
            className={`
                flex flex-row 
                items-center
                text-white
                ${type === "primary"
                    ? 'w-[var(--primary-button-width)] h-[var(--primary-button-height)] justify-start ml-[10px] text-[22px] italic'
                    : type === "secondary"
                        ? 'w-[var(--secondary-button-width)] h-[var(--secondary-button-height)]  hover:bg-[white] hover:text-black justify-center'
                        : type === 'home-button'
                            ? 'w-[var(--home-button-width)] h-[var(--home-button-height)] backdrop-brightness-35 hover:backdrop-brightness-25 text-[20px] justify-center'
                            : type === 'booking'
                                ? 'w-[var(--secondary-button-width)] h-[var(--secondary-button-height)] text-[20px] backdrop-opacity-90 hover:bg-[white] hover:text-[black] justify-center'
                                : ''
                }
            `}
            onClick={handleClick}
        >
            {children}
        </Link>
    )
}

export default Button
