import React from 'react'
import Link from 'next/link'

import { FooterLogoList } from '../_utils/imageDirectory'
import Image from 'next/image'
import Button from './button'

const itemsArr = [
    "Company",
    "Jobs",
    "Press",
    "Investor Relations",
    "Mobile App - search quicker",
    "Other Services"
]

const Footer = () => {
    return (
        <div className='
                w-screen
                h-[400px]
                px-[150px]
                bg-gray-900
                flex
                justify-between
                items-center
        '>
            <div className='
                    h-full
                    w-[200px]
                    flex
                    flex-col
                    text-white
            '>
                <p className='h-[calc(35%)] w-full flex items-center text-[20px] font-extrabold'>
                    <i>The Serene Villas</i>
                </p>
                <ul className='h-[calc(65%)] w-full text-[14px]'>
                    {
                        itemsArr.map((ele) => {
                            return (
                                <li className='text-[14px] py-[5px]' key={ele}>
                                    <Link href="/villas">{ele}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='
                    h-full
                    w-[550px]
                    text-white
            '>
                <p className='h-[calc(35%)] w-full flex justify-end items-center'>
                    <FooterLogos />
                </p>
                <p className='h-[calc(15%)] w-full flex items-center text-[22px]'>
                    Reach out to us by dropping an Email
                </p>
                <p className='h-[calc(18%)] w-full flex justify-between items-center'>
                    <input type="text" className='h-[calc(60%)] w-[calc(65%)] focus:outline-none focus:ring-0 border-b-2 border-b-green-400' />
                    <Button to={'/'} type="search">Search</Button>
                </p>
                <p className='h-[calc(15%)] w-full flex flex-col jsustify-between items-end text-[10px]'>
                    <span>Building 213, Ruddington Street, Arvolia Zone C</span>
                    <span>Gazette State, URE</span>
                    <span>Pin: 65XX09</span>
                </p>
            </div>
        </div >
    )
}

const FooterLogos = () => {
    return (
        <>
            {
                FooterLogoList.map((ele, ind) => {
                    return (
                        <span className='h-[40px] w-[40px] flex justify-center items-center' key={ind}>
                            <Image src={ele.src} height={25} width={25} alt="" style={{ cursor: 'pointer' }} />
                        </span>
                    )
                })
            }
        </>
    )
}

export default Footer;
