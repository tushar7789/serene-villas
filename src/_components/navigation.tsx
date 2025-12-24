import React from 'react'

import Button from './button';

function Navigation() {
    return (
        <ul className="flex flex-row justify-between h-[50px] backdrop-brightness-50 z-10">
            <li>
                <Button to='/' type="primary">The Serene Villas</Button>
            </li>
            <li className="flex flex-row w-[260px] mr-[20px] justify-between items-center">
                <Button to='/villas' type="secondary">Villas </Button>
                <Button to='/about' type="secondary">About Us </Button>
                <Button to='/signin' type="secondary">Sign In </Button>
            </li>
        </ul>
    )
}

export default Navigation;
