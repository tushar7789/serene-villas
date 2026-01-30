import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <CircularProgress color="success" />
        </div>
    )
}

export default Loading;
