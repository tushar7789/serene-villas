import React from 'react'
import Link from 'next/link'

import { ButtonPropInterface } from '@/_interfaces/component_interfaces'

function Button({ children, to, type }: ButtonPropInterface) {
    return (
        <Link
            href={to}
            className={`
                flex flex-row 
                ${type === "primary" ? 'w-[var(--primary-button-width)]' : 'w-[var(--secondary-button-width)]'} 
                ${type === "primary" ? 'h-[var(--primary-button-height)]' : 'h-[var(--secondary-button-height)]'} 
                align-middle 
                justify-center 
                items-center
                hover:bg-amber-50
                `}>
            {children}
        </Link>
    )
}

export default Button
