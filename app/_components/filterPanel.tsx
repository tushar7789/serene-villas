import React from 'react'
import { DatePicker, DatePickerProps } from 'antd';

import Arrow from '../_components/arrows';
import getTodaysDate from '../_utils/timeAndDate';
import useFilterDataStore from '../store/filterDataStore';
import Button from './button';

const FilterPanel = () => {
    const noOfVisitors = useFilterDataStore((state) => state.noOfVisitors);
    const setFrom = useFilterDataStore((state) => state.setFrom);
    const setTo = useFilterDataStore((state) => state.setTo);
    const setNoOfVisitors = useFilterDataStore((state) => state.setNoOfVisitors);
    const setFilterValue = useFilterDataStore((state) => state.setFilterValue);
    const setFilterDirection = useFilterDataStore((state) => state.setFilterDirection);

    const onFromDateChange: DatePickerProps['onChange'] = (date, dateString) => {
        if (dateString !== null) {
            setFrom(dateString);
        }
    }

    const onToDateChange: DatePickerProps['onChange'] = (date, dateString) => {
        if (dateString !== null) {
            setTo(dateString);
        }
    }

    const handleNoOfVisitorsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) >= 0 && Number(e.currentTarget.value) <= 8) {
            setNoOfVisitors(e.target.value.toString());
        }
    }

    const handleFilterValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterValue(e.currentTarget.value);
    }

    const handleFilterDirection = (dir: string) => {
        setFilterDirection(dir);
    }

    const handleApplyFilters = () => {
        // console.log(noOfVisitors, "--", filterValue, "--", filterDirection, "--", fromDate, "--", toDate);
    }

    const handleClearFilters = () => {

    }

    return (
        <div className='h-35 w-240 flex flex-col justify-evenly'>
            <div className='h-17 w-full flex justify-center items-center '>
                <div className='h-full w-120 flex justify-start items-center'>
                    <div className={`h-full w-50 mr-10 flex-col justify-end`} >
                        <span className='block h-5 w-full text-sm mb-2 text-green-600'><i>From</i></span>
                        <DatePicker className='block h-8 w-full bg-gray-50 shadow-xl px-2 rounded-sm focus:outline-2 outline-green-600 text-black' variant="borderless" placeholder={getTodaysDate()} onChange={onFromDateChange} />
                    </div >
                    <div className={`h-full w-50 flex-col justify-end`} >
                        <span className='block h-5 w-full text-sm mb-2 text-green-600'><i>To</i></span>
                        <DatePicker className='block h-8 w-full bg-gray-50 shadow-xl px-2 rounded-sm focus:outline-2 outline-green-600 text-black' variant="borderless" placeholder={getTodaysDate()} onChange={onToDateChange} />
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
                        <select name="filter" id="filter" className='h-full w-40 mr-4 bg-gray-50 shadow-xl' onChange={handleFilterValueChange}>
                            <option value="Price">Price</option>
                            <option value="LivingRoom">Living Rooms</option>
                            <option value="Bathrooms">Bath Rooms</option>
                            <option value="Balcony">Balcony</option>
                            <option value="Kitchen">Kitchen</option>
                        </select>
                        <div className='h-full w-15 flex justify-between'>
                            <span className='h-full w-7 flex justify-center items-center' onClick={() => handleFilterDirection("inc")}>
                                <Arrow mode='up' />
                            </span>
                            <span className='h-full w-7 flex justify-center items-center' onClick={() => handleFilterDirection("dec")}>
                                <Arrow mode='down' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-10 w-full flex justify-start items-center '>
                <Button type="secondary">Apply Filter</Button>
                <Button type="secondary">Clear</Button>
            </div>
        </div>
    )
}

export default FilterPanel;