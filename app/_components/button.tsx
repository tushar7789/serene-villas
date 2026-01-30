'use client'

import React, { MouseEvent } from 'react'
import Link from 'next/link'

import { VillaType } from '../_store/villaDataStore'

interface ButtonPropInterface {
    children: React.ReactNode;
    to?: string,
    type: string,
    callbackSetter?: () => void,
    key?: React.Key,
    height?: string,
    width?: string,
    villaDetails?: VillaType
}

function Button({ children, to, height, width, type, callbackSetter, villaDetails }: ButtonPropInterface) {
    const hg = `${height !== undefined ? `h-${height}` : "h-15"}`
    const wt = `${width !== undefined ? `w-${width}` : "w-full"}`
    const regex = /^villas\/\d+$/;

    function handleClick(e: MouseEvent) {
        if (to === '/signin') {
            e.preventDefault();
            if (callbackSetter !== undefined) {
                console.log("inside condition");
                callbackSetter();
            }
        }
    }

    return (
        <Link
            href={{
                pathname: to === undefined ? "/" : to,
                query: to !== undefined ? regex.test(to) ? { villaDetails: JSON.stringify(villaDetails) } : null : null
            }}
            className={`
                flex 
                flex-row 
                items-center
                ${type === "primary"
                    ? 'w-[var(--primary-button-width)] h-[var(--primary-button-height)] justify-start text-[22px] italic'
                    : type === "secondary"
                        ? 'w-[var(--secondary-button-width)] h-[var(--secondary-button-height)] mx-1  hover:bg-emerald-600 hover:text-white justify-center'
                        : type === 'search'
                            ? 'w-[170px] h-[40px] cursor-pointer justify-center bg-emerald-600 rounded-sm'
                            : type === 'booking'
                                ? 'w-[var(--secondary-button-width)] h-[var(--secondary-button-height)] text-[20px] backdrop-opacity-90 hover:bg-[white] hover:text-[black] justify-center'
                                : type === 'selected'
                                    ? 'w-[var(--secondary-button-width)] h-[var(--secondary-button-height)] bg-emerald-600 justify-center text-white'
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
