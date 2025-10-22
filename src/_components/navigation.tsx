import React from 'react'

import Button from './button';

function Navigation() {
    return (
        <ul className="flex flex-row justify-between h-[50px] bg-amber-400">
            <li className='w-[var(--primary-button-width)] flex justify-start items-center'>
                <Button to='/' type="primary">The Serene Villas</Button>
            </li>
            <li className="flex flex-row w-[var(--primary-button-width)] justify-center items-center">
                <Button to='/about' type="secondary">About Us </Button>
                <Button to='/signin' type="secondary">Sign In </Button>
            </li>
        </ul>
    )
}

export default Navigation;
