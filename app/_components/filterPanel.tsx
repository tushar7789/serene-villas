import React from 'react'
import { DatePicker } from 'antd';

import Arrow from '../_components/arrows';
import getTodaysDate from '../_utils/timeAndDate';

interface A {
    text?: string,
    extraStyle?: string,
    category?: string
}

const FilterPanel = () => {
    return (
        <div className='h-17 w-240 flex justify-center items-center'>
            <div className='h-full w-120 flex justify-start items-center'>
                <BitChunkTwo extraStyle='mr-10' category='1' text="from" />
                <BitChunkTwo category='1' text="to" />
            </div>
            <div className='h-full w-60 flex justify-center items-center'>
                <BitChunkTwo category='2' text="No. of visitors" />
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

const HeadText: React.FC<A> = ({ text }) => {
    return (
        <span className='block h-5 w-full text-sm mb-2 text-green-600'><i>{text}</i></span>
    )
}

const BitChunk: React.FC<A> = ({ text, category }) => {
    return (
        <>
            <HeadText text={text} />
            {
                category === "2" ?
                    <input id={text} type="number" className='block h-8 w-full bg-gray-50 shadow-xl px-2 rounded-sm  focus:outline-2 outline-green-600 text-black' />
                    :
                    <DatePicker id={text} className='block h-8 w-full bg-gray-50 shadow-xl px-2 rounded-sm focus:outline-2 outline-green-600 text-black' variant="borderless" placeholder={getTodaysDate()} />
            }
        </>
    )
}

const BitChunkTwo: React.FC<A> = ({ extraStyle, category, text }) => {
    return (
        <div className={`h-full w-50 ${extraStyle} flex-col justify-end`} >
            <BitChunk category={category} text={text} />
        </div >
    )
}

export default FilterPanel;