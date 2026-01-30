import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

function loading() {
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <CircularProgress color="success" />
        </div>
    )
}

export default loading;
