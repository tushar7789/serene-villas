import React from 'react'

import Arrow from './arrows'
import Link from 'next/link';

interface BackNavInterface {
    prevUrl?: string | null
}

const BackNav: React.FC<BackNavInterface> = ({ prevUrl }) => {
    return (
        <Link href={{
            pathname: prevUrl
        }}
            className='flex justify-center items-center'
        >
            <Arrow mode='left' />
            <span className='px-4'>Go Back</span>
        </Link>
    )
}

export default BackNav;
