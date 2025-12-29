'use client'

import React from 'react'
import { useForm } from 'react-hook-form'

type A = {
    children: React.ReactNode
}

const inpStyle = 'h-[45px] w-[370px] bg-white';

const divStyle = 'w-[500px] h-[90px] flex justify-between items-center';

const msgDivStyle = 'w-[500px] h-[25px] flex justify-end'

const submitButStyle = 'w-[100px] h-[40px] relative left-[200px] flex justify-center items-center text-[20px] bg-white cursor-pointer';

function LoginForm() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
        <form
            onSubmit={handleSubmit((data) => { console.log(data) })}
            className='
                w-[500px]
                h-[360px]
                mx-auto
                relative
                top-[40px]
                flex
                flex-col
                justify-start
                items-start
            '
        >
            <div className={divStyle}>
                <InputAttributeComp>Full Name</InputAttributeComp>
                <input type="text" {...register('fullname', { required: true })} className={inpStyle} />
            </div>
            <div className={msgDivStyle}>
                &nbsp;
                {errors.fullname && <ErrorMessageComp>Full Name is Required</ErrorMessageComp>}
            </div>
            <div className={divStyle}>
                <InputAttributeComp>Password</InputAttributeComp>
                <input type="text" {...register('password', { required: true })} className={inpStyle} />
            </div>
            <div className={msgDivStyle}>
                &nbsp;
                {errors.password && <ErrorMessageComp>Password is Required</ErrorMessageComp>}
            </div>
            <div className={divStyle}>
                <button type="submit" className={submitButStyle}>Login</button>
            </div>
        </form >
    )
}

export default LoginForm;

function InputAttributeComp({ children }: A) {
    return (
        <span
            className='
                text-[white]
                text-[25px]    
        '>
            {children}
        </span>
    )
}

function ErrorMessageComp({ children }: A) {
    return (
        <span className='
                h-[20px]
                w-[170px]
                text-[14px]
                flex
                justify-start
                items-center
                pl-[5px]
                text-red-500
                bg-red-300
        '>
            {children}
        </span>
    )
}
