import React from 'react'
import Link from 'next/link'

function Navigation() {
    return (
        <div className="w-screen h-16 bg-gray-300 grid grid-rows-1">
            <ul className="grid grid-cols-12 border-yellow">
                <li className='grid col-span-2 border-yellow border-2 justify-center content-center'>
                    <Link href="/" className='italic'> The Serene Villas </Link>
                </li>
                <li className="col-span-8">

                </li>
                <li className="grid grid-cols-2 col-span-2">
                    <Link href="/about" className="grid">
                        <p className="grid border-black border-2 justify-center content-center">About Us</p>
                    </Link>
                    <button>Sign In</button>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;
