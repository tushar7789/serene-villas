import React from 'react'

import Arrow from '../_components/arrows';

const TestComp = () => {
    return (
        <div className='h-17 w-240 flex justify-center items-center'>
            <div className='h-full w-120 flex justify-start items-center'>
                <div className='h-full w-50 mr-10 flex-col justify-end text-green-600'>
                    <span className='block h-5 w-full text-sm mb-2'><i>From</i></span>
                    <input type="text" className='block h-8 w-full bg-gray-50 shadow-xl px-2 rounded-sm focus:outline-2 outline-green-600 text-black' placeholder='' />
                </div>
                <div className='h-full w-50 flex-col justify-end'>
                    <span className='block h-5 w-full text-sm mb-2 text-green-600'><i>To</i></span>
                    <input type="text" className='block h-8 w-full bg-gray-50 shadow-xl px-2 rounded-sm focus:outline-2 outline-green-600 text-black' placeholder='' />
                </div>
            </div>
            <div className='h-full w-60 flex justify-center items-center'>
                <div className='h-full w-50 flex-col justify-end'>
                    <span className='block h-5 w-full text-sm mb-2 text-green-600'><i>No. of visitors</i></span>
                    <input type="number" className='block h-8 w-full bg-gray-50 shadow-xl px-2 rounded-sm  focus:outline-2 outline-green-600 text-black' />
                </div>
            </div>
            <div className='h-full w-60'>
                <span className='block h-5 w-full text-sm mb-2 text-green-600'><i>Filter</i></span>
                <div className='h-8 w-full flex itmes-center'>
                    <select name="filter" id="filter" className='h-full w-40 mr-4 bg-gray-50 shadow-xl'>
                        <option value="price">Price</option>
                        <option value="price">Living Rooms</option>
                        <option value="price">Bath Rooms</option>
                        <option value="price">Balcony</option>
                        <option value="price">Kitchen</option>
                    </select>
                    <div className='h-full w-15 flex justify-between'>
                        <span className='h-full w-7 flex justify-center items-center'>
                            <Arrow mode='up' />
                        </span>
                        <span className='h-full w-7 flex justify-center items-center'>
                            <Arrow mode='down' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestComp;
