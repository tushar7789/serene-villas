import React, { useState } from 'react'
import { DatePicker } from 'antd';

import Arrow from '../_components/arrows';
import getTodaysDate from '../_utils/functions/timeAndDate';
import Button from './button';
import { filteredVillaFunction, clearFilterValues } from "../_utils/functions/filterPanelFunctions";

const FilterPanel = () => {
    const [from, setFrom] = useState<string | null>("");
    const [to, setTo] = useState<string | null>("");
    const [noOfVisitors, setNoOfVisitors] = useState<string>("");
    const [filterValue, setFilterValue] = useState<string>("");
    const [filterDirection, setFilterDirection] = useState<string>("");

    const handleNoOfVisitorsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) >= 0 && Number(e.currentTarget.value) <= 8) {
            setNoOfVisitors(e.target.value.toString());
        }
    }

    const handleApplyFilters = () => {
        console.log(from, " ", to, " ", noOfVisitors, " ", filterValue, " ", filterDirection);
        filteredVillaFunction(Number(noOfVisitors));
    }

    return (
        <div className='h-full w-80 px-5 flex flex-col justify-start bg-gray-50'>
            <div className='h-18 w-full flex justify-between items-end'>
                <Button type="secondary" callbackSetter={handleApplyFilters}>Apply Filter</Button>
                <Button type="secondary" callbackSetter={clearFilterValues}>Clear</Button>
            </div>
            <div className='h-15 w-full flex justify-end items-center'>
                <span className='h-full w-7 mr-2 flex justify-center items-center' onClick={() => setFilterDirection("unc")}>
                    <Arrow mode='up' />
                </span>
                <span className='h-full w-7 flex justify-center items-center' onClick={() => setFilterDirection("dec")}>
                    <Arrow mode='down' />
                </span>
            </div>
            <div className='h-min w-full flex flex-col justify-start items-center bg-emerald-600'>
                <div className='h-50 w-full flex flex-col justify-start items-center'>
                    <span className='h-12 w-full flex justify-start items-center text-[16px] mb-2 bg-gray-200'><i>Filter by Date</i></span>
                    <div className='h-15 w-full mb-3 flex-col justify-end' >
                        <span className='block h-5 w-full text-sm mb-2'><i>From</i></span>
                        <DatePicker className='block h-8 w-full bg-gray-50 shadow-xl px-2 rounded-sm focus:outline-2 outline-green-600 text-black' variant="borderless" placeholder={getTodaysDate()} onChange={(date, dateString) => setFrom(dateString)} />
                    </div >
                    <div className='h-15 w-full flex-col justify-end' >
                        <span className='block h-5 w-full text-sm mb-2'><i>To</i></span>
                        <DatePicker className='block h-8 w-full bg-gray-50 shadow-xl px-2 rounded-sm focus:outline-2 outline-green-600 text-black' variant="borderless" placeholder={getTodaysDate()} onChange={(date, dateString) => setTo(dateString)} />
                    </div >
                </div>
                <div className='h-25 w-full mt-3 flex flex-col justify-center items-center'>
                    <span className='h-12 w-full flex justify-start items-center text-[16px] mb-2 bg-gray-200'><i>Filter by No. of Visitors</i></span>
                    <input type="number" className='block h-8 w-full bg-gray-50 shadow-xl px-2 rounded-sm  focus:outline-2 outline-emerald-500 text-black' value={noOfVisitors} onChange={handleNoOfVisitorsChange} placeholder='0' />
                </div>
                <div className='h-25 w-full'>
                    <span className='h-12 w-full flex justify-start items-center text-[16px] mb-2 bg-gray-200'><i>Filter By Ammenities</i></span>
                    <div className='h-8 w-full flex flex-col justify-center itmes-center'>
                        <select name="filter" id="filter" className='h-full w-full bg-gray-50 shadow-xl' onChange={(e) => setFilterValue(e.currentTarget.value)}>
                            <option value="Price">Price</option>
                            <option value="LivingRoom">Living Rooms</option>
                            <option value="Bathrooms">Bath Rooms</option>
                            <option value="Balcony">Balcony</option>
                            <option value="Kitchen">Kitchen</option>
                        </select>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FilterPanel;