'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import Divider from '@mui/material/Divider';
import Button from './button';
import { signOut, useSession } from 'next-auth/react'
import { Avatar, Dropdown } from 'antd';
import type { MenuProps } from 'antd';

import { OverlayPropsInterface } from '../_interfaces/component_interfaces';


interface ProfileCompInterface {
    session: any                    // eslint-disable-line @typescript-eslint/no-explicit-any
}


const items: MenuProps['items'] = [
    {
        label: (
            <Link href="" onClick={() => signOut()}>
                Sign Out
            </Link>
        ),
        key: '0',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <Link href="">
                Preferences
            </Link>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <Link href="">
                Bookings
            </Link>
        ),
        key: '2',
    },
    {
        type: 'divider',
    },
];

const Navigation: React.FC<OverlayPropsInterface> = ({ callbackSetter }) => {
    const pathname = usePathname().split('/')[1];
    const session = useSession();
    console.log("session in nav is:", session);

    return (
        <>
            <ul className="h-12.5 w-screen pl-6 pr-10 flex flex-row justify-between">
                <li>
                    <Button to='/' type="primary">The Serene Villas</Button>
                </li>
                <li className="h-full w-60 flex flex-row justify-between items-center">
                    {
                        pathname === 'villas' ?
                            <Button to='/villas' type="selected">Villas</Button> :
                            <Button to='/villas' type="secondary">Villas</Button>
                    }
                    {
                        session.status === 'authenticated' ?
                            <ProfileComp session={session} /> :
                            session.status === 'loading' ? null :
                                pathname === 'signin' ?
                                    <Button to='/signin' type="selected">Sign In</Button> :
                                    <Button to='/signin' type="secondary" callbackSetter={callbackSetter}>Sign In</Button>
                    }
                </li>
            </ul>
            <Divider variant="middle" />
        </>
    )
}

const ProfileComp: React.FC<ProfileCompInterface> = ({ session }) => {
    return (
        <div className='h-full w-min px-1 flex justify-evenly items-center'>
            <Dropdown menu={{ items }} trigger={['click']}>
                <Link href="" onClick={(e) => e.preventDefault()}>
                    <Avatar
                        style={{
                            backgroundColor: '#fde3cf',
                            color: '#f56a00',
                            cursor: 'pointer',
                            height: '22',
                            width: '22'
                        }}>
                        {session.data.user?.name?.split(" ").at(0)?.at(0)}
                        {session.data.user?.name?.split(" ").at(1)?.at(0)}
                    </Avatar>
                </Link>
            </Dropdown>
        </div>
    )
}

export default Navigation;
