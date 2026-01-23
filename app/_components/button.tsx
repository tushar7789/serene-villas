'use client'

import React, { MouseEvent } from 'react'
import Link from 'next/link'
import { ButtonPropInterface } from '../_interfaces/component_interfaces'

function Button({ children, to, height, weight, type, callbackSetter }: ButtonPropInterface) {
    const hg = `${height !== undefined ? `h-${height}` : "h-15"}`
    const wt = `${weight !== undefined ? `h-${weight}` : "w-full"}`

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
            href={to === undefined ? "/" : to}
            className={`
                flex 
                flex-row 
                items-center
                ${type === "primary"
                    ? 'w-[var(--primary-button-width)] h-[var(--primary-button-height)] justify-start ml-[10px] text-[22px] italic'
                    : type === "secondary"
                        ? 'w-[var(--secondary-button-width)] h-[var(--secondary-button-height)]  hover:bg-emerald-600 justify-center'
                        : type === 'search'
                            ? 'w-[170px] h-[40px] cursor-pointer justify-center bg-emerald-600 rounded-sm'
                            : type === 'booking'
                                ? 'w-[var(--secondary-button-width)] h-[var(--secondary-button-height)] text-[20px] backdrop-opacity-90 hover:bg-[white] hover:text-[black] justify-center'
                                : type === 'selected'
                                    ? 'w-[var(--secondary-button-width)] h-[var(--secondary-button-height)] bg-emerald-600 justify-center'
                                    : type === 'boundary-button-hover' ?
                                        `${hg} ${wt} flex justify-center items-center border-2 border-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white`
                                        : type === 'boundary-button' ?
                                            `${hg} ${wt} flex justify-center items-center bg-emerald-600 rounded-xl text-white`
                                            : 'h-50 w-full flex justify-between items-center hover:shadow-xl'
                }
            `}
            onClick={handleClick}
        >
            {children}
        </Link>
    )
}

export default Button
