import React from 'react'
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';

import Button from './button';
import GroupIcon from '../../public/static_images/group.png';

// const onChange: DatePickerProps['onChange'] = (date, dateString) => {
//     console.log(date, dateString);
// };

function DatesInputBox() {
    return (
        <div className='
            h-[65px] 
            w-full 
            mt-[20px] 
            shadow-2xl 
            rounded-lg 
            bg-gray-50
            flex 
            flex-row 
            justify-center
            items-center
            cursor-pointer'
        >
            <div className='h-full w-[calc(25%)] flex flex-row justify-center items-center'>
                <DatePicker style={{ width: '240px', height: '40px', fontWeight: 'bold', fontSize: '20px' }} variant="borderless" placeholder="from" />
            </div>
            <Divider orientation="vertical" variant="middle" flexItem />
            <div className='h-full w-[calc(25%)] flex flex-row justify-center items-center'>
                <DatePicker style={{ width: '240px', height: '40px', fontWeight: 'bold', fontSize: '20px' }} variant="borderless" placeholder="to" />
            </div>
            <Divider orientation="vertical" variant="middle" flexItem />
            <div className='h-full w-[calc(30%)] flex flex-row justify-berween items-center'>
                <span className='h-full w-[calc(85%)] flex flex-row justify-center items-center'>
                    <input
                        type="text"
                        placeholder='2 adults, 1 child'
                        style={{
                            height: "40px",
                            width: "100%",
                            paddingLeft: '10px',
                            outline: 'none'
                        }}
                    />
                </span>
                <Image src={GroupIcon.src} height={25} width={25} alt=" " />
            </div>
            <div className='h-full w-[calc(16%)] flex flex-row justify-center items-center pl-[10px]'>
                <Button to={'/'} type="search">Search</Button>
            </div>
        </div>
    )
}

export default DatesInputBox;


