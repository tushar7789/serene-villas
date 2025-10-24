import React from 'react'
import Link from 'next/link'
import { ButtonPropInterface } from '@/_interfaces/component_interfaces'

function Button({ children, to, type }: ButtonPropInterface) {

    return (
        <Link
            href={to}
            className={`
                flex flex-row 
                text-white
                items-center
                ${type === "primary"
                    ? 'w-[var(--primary-button-width)] h-[var(--primary-button-height)] justify-start ml-[10px] text-[22px] italic'
                    : type === "secondary"
                        ? 'w-[var(--secondary-button-width)] h-[var(--secondary-button-height)]  border-l-[white] border-r-[white] hover:bg-amber-50 hover:text-black justify-center'
                        : type === 'home-button'
                            ? 'w-[var(--home-button-width)] h-[var(--home-button-height)] backdrop-brightness-35 hover:backdrop-brightness-25 text-[20px] justify-center'
                            : ''
                }
            `}
        // onClick={handleClick}
        >
            {children}
        </Link>
    )
}

export default Button
