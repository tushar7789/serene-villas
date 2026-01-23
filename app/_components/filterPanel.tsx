import React, { useState } from 'react'
import { DatePicker } from 'antd';
import Divider from '@mui/material/Divider';

import Arrow from '../_components/arrows';
import getTodaysDate from '../_utils/functions/timeAndDate';
import Button from './button';
import { filteredVillaFunction, clearFilterValues } from "../_utils/functions/filterPanelFunctions";

interface FilterPanelUtillityInterface {
    children?: React.ReactNode,
    title?: string
}

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
            <div className='h-15 w-full my-2 flex justify-end items-center'>
                <span className='h-full w-6 flex justify-center items-center' onClick={() => setFilterDirection("unc")}>
                    <Arrow type='filter-dir' mode='up' />
                </span>
                <span className='h-full w-6 flex justify-center items-center' onClick={() => setFilterDirection("dec")}>
                    <Arrow type="filter-dir" mode='down' />
                </span>
            </div>
            <SelectedFiltersComp />
            <div className='h-min w-full flex flex-col justify-start items-center'>
                <FilterTagComp title='Filter by Date'>
                    <div className='h-33 w-full my-2 flex flex-col justify-start items-center'>
                        <div className='h-15 w-full mb-3 flex-col justify-end' >
                            <span className='block h-5 w-full text-sm mb-2'><i>From</i></span>
                            <DatePicker className='block h-8 w-full bg-gray-50 shadow-xl px-2 rounded-sm focus:outline-2 outline-green-600 text-black' variant="borderless" placeholder={getTodaysDate()} onChange={(date, dateString) => setFrom(dateString)} />
                        </div>
                        <div className='h-15 w-full flex-col justify-end' >
                            <span className='block h-5 w-full text-sm mb-2'><i>To</i></span>
                            <DatePicker className='block h-8 w-full bg-gray-50 shadow-xl px-2 rounded-sm focus:outline-2 outline-green-600 text-black' variant="borderless" placeholder={getTodaysDate()} onChange={(date, dateString) => setTo(dateString)} />
                        </div>
                    </div>
                </FilterTagComp>
                <FilterTagComp title='Filter by No of Visitors'>
                    <input type="number" className='block h-8 my-2 w-full bg-gray-50 shadow-xl px-2  focus:outline-2 outline-emerald-500 text-black' value={noOfVisitors} onChange={handleNoOfVisitorsChange} placeholder='0' />
                </FilterTagComp>
                <FilterTagComp title='Filter by Ammenities'>
                    <div className='h-8 w-full my-2 flex flex-col justify-center itmes-center'>
                        <select name="filter" id="filter" className='h-full w-full px-2 bg-gray-50 shadow-xl' onChange={(e) => setFilterValue(e.currentTarget.value)}>
                            <option value="Price">Price</option>
                            <option value="LivingRoom">Living Rooms</option>
                            <option value="Bathrooms">Bath Rooms</option>
                            <option value="Balcony">Balcony</option>
                            <option value="Kitchen">Kitchen</option>
                        </select>
                    </div>
                </FilterTagComp>
                <FilterTagComp title='Filter by Ratings'>
                    <input type="number" className='block h-8 my-2 w-full bg-gray-50 shadow-xl px-2  focus:outline-2 outline-emerald-500 text-black' value={noOfVisitors} onChange={handleNoOfVisitorsChange} placeholder='0' />
                </FilterTagComp>
            </div>
        </div >
    )
}

const FilterTagComp = ({ title, children }: FilterPanelUtillityInterface) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setOpen(open => !open);
    }

    return (
        <>
            <div className='h-12 w-full my-2 flex'>
                <span className='h-full w-48 flex justify-start items-center text-[16px] mb-2' > <i>{title}</i></span >
                <span className='h-full w-12 flex justify-center items-center' onClick={handleToggle}>
                    {
                        !open ?
                            <Arrow type="filter" mode='down' /> :
                            <Arrow type="filter" mode='up' />
                    }
                </span>
            </div >
            <Divider variant='middle' flexItem />
            {open ? children : null}
        </>
    )
}

const SelectedFiltersComp = () => {
    return (
        <div className='h-min-5 w-full my-2 p-1 flex justify-between items-center bg-white rounded-md text-[13px]'>
            <span className='h-5 w-40'>Filters Applied : None</span>
            <span className='h-5 w-10 flex justify-center items-center'>
                <Arrow type="filter" mode='down' dimension='18' />
            </span>
        </div>
    )
}

export default FilterPanel;