'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import Divider from '@mui/material/Divider';
import Button from './button';

import { OverlayPropsInterface } from '@/_interfaces/component_interfaces';

const Navigation: React.FC<OverlayPropsInterface> = ({ callbackSetter }) => {

    const pathname = usePathname().split('/')[1];

    return (
        <>
            <ul className="h-[50px] flex flex-row justify-between px-[150px]">
                <li>
                    <Button to='/' type="primary">The Serene Villas</Button>
                </li>
                <li className="flex flex-row w-[260px] mr-[20px] justify-between items-center">
                    {
                        pathname === 'villas' ?
                            <Button to='/villas' type="selected">Villas</Button> :
                            <Button to='/villas' type="secondary">Villas</Button>
                    }
                    {
                        pathname === 'signin' ?
                            <Button to='/signin' type="selected">Sign In</Button> :
                            <Button to='/signin' type="secondary" callbackSetter={callbackSetter}>Sign In</Button>
                    }
                    {
                        pathname === 'menu' ?
                            <Button to='/menu' type="selected">Menu</Button> :
                            <Button to='/menu' type="secondary">Menu</Button>
                    }
                </li>
            </ul>
            <Divider variant="middle" />
        </>
    )
}

export default Navigation;
