'use client'

import React, { MouseEvent } from 'react'
import Link from 'next/link'
import { ButtonPropInterface } from '@/_interfaces/component_interfaces'

function Button({ children, to, type, callbackSetter }: ButtonPropInterface) {

    function handleClick(e: MouseEvent) {
        if (type === 'booking' || type === 'secondary') {
            if (callbackSetter !== undefined) {
                e.preventDefault();
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
                ${type === "primary"
                    ? 'w-[var(--primary-button-width)] h-[var(--primary-button-height)] justify-start ml-[10px] text-[22px] italic'
                    : type === "secondary"
                        ? 'w-[var(--secondary-button-width)] h-[var(--secondary-button-height)]  hover:bg-green-400 justify-center'
                        : type === 'search'
                            ? 'w-[170px] h-[40px] cursor-pointer justify-center bg-green-400 rounded-sm'
                            : type === 'booking'
                                ? 'w-[var(--secondary-button-width)] h-[var(--secondary-button-height)] text-[20px] backdrop-opacity-90 hover:bg-[white] hover:text-[black] justify-center'
                                : type === 'selected'
                                    ? 'w-[var(--secondary-button-width)] h-[var(--secondary-button-height)] bg-green-400 justify-center'
                                    : 'h-full w-full px-[40px] flex justify-between items-center bg-gray-100/70 hover:shadow-xl'
                }
            `}
            onClick={handleClick}
        >
            {children}
        </Link>
    )
}

export default Button
