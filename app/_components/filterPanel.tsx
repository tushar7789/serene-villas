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
        <div className='h-35 w-240 flex flex-col justify-evenly'>
            <div className='h-17 w-full flex justify-center items-center '>
                <div className='h-full w-120 flex justify-start items-center'>
                    <div className={`h-full w-50 mr-10 flex-col justify-end`} >
                        <span className='block h-5 w-full text-sm mb-2 text-green-600'><i>From</i></span>
                        <DatePicker className='block h-8 w-full bg-gray-50 shadow-xl px-2 rounded-sm focus:outline-2 outline-green-600 text-black' variant="borderless" placeholder={getTodaysDate()} onChange={(date, dateString) => setFrom(dateString)} />
                    </div >
                    <div className={`h-full w-50 flex-col justify-end`} >
                        <span className='block h-5 w-full text-sm mb-2 text-green-600'><i>To</i></span>
                        <DatePicker className='block h-8 w-full bg-gray-50 shadow-xl px-2 rounded-sm focus:outline-2 outline-green-600 text-black' variant="borderless" placeholder={getTodaysDate()} onChange={(date, dateString) => setTo(dateString)} />
                    </div >
                </div>
                <div className='h-full w-60 flex justify-center items-center'>
                    <div className={`h-full w-50 flex-col justify-end`} >
                        <span className='block h-5 w-full text-sm mb-2 text-green-600'><i>No of Visitors</i></span>
                        <input type="number" className='block h-8 w-full bg-gray-50 shadow-xl px-2 rounded-sm  focus:outline-2 outline-green-600 text-black' value={noOfVisitors} onChange={handleNoOfVisitorsChange} placeholder='0' />
                    </div >
                </div>
                <div className='h-full w-60'>
                    <span className='block h-5 w-full text-sm mb-2 text-green-600'><i>Filter By</i></span>
                    <div className='h-8 w-full flex itmes-center'>
                        <select name="filter" id="filter" className='h-full w-40 mr-4 bg-gray-50 shadow-xl' onChange={(e) => setFilterValue(e.currentTarget.value)}>
                            <option value="Price">Price</option>
                            <option value="LivingRoom">Living Rooms</option>
                            <option value="Bathrooms">Bath Rooms</option>
                            <option value="Balcony">Balcony</option>
                            <option value="Kitchen">Kitchen</option>
                        </select>
                        <div className='h-full w-15 flex justify-between'>
                            <span className='h-full w-7 flex justify-center items-center' onClick={() => setFilterDirection("unc")}>
                                <Arrow mode='up' />
                            </span>
                            <span className='h-full w-7 flex justify-center items-center' onClick={() => setFilterDirection("dec")}>
                                <Arrow mode='down' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-10 w-full flex justify-start items-center '>
                <Button type="secondary" callbackSetter={handleApplyFilters}>Apply Filter</Button>
                <Button type="secondary" callbackSetter={clearFilterValues}>Clear</Button>
            </div>
        </div >
    )
}

export default FilterPanel;