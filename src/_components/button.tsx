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
                align-middle 
                justify-center 
                items-center
                ${type === "primary"
                    ? 'w-[var(--primary-button-width)] h-[var(--primary-button-height)]'
                    : type === "secondary"
                        ? 'w-[var(--secondary-button-width)] h-[var(--secondary-button-height)] hover:bg-amber-50 hover:text-black'
                        : 'w-[var(--home-button-width)] h-[var(--home-button-height)] backdrop-brightness-35 hover:backdrop-brightness-25 text-[20px]'
                }
            `}>
            {children}
        </Link>
    )
}

export default Button
