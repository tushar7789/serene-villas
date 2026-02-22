'use client'

import { useForm } from "react-hook-form"
import Image from 'next/image';
import { signIn } from 'next-auth/react';

import { SignInOptionsList } from "../../utils/data/imageDirectory";

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignInOptionClick = (data: { data: any, signInOption: string }) => {// eslint-disable-line @typescript-eslint/no-explicit-any

        if (data.signInOption === "Google") {
            localStorage.setItem("redirectReason", "signin");
            signIn(data.signInOption);
        } else if (data.signInOption === 'Email') {
            console.log("using email sign in option --- ", data);
        }
    }

    return (
        <div className='h-full w-screen flex justify-center items-center'>
            <div className="h-100 w-130 rounded-2xl flex flex-col justify-evenly items-center shadow-2xl">
                <div className='h-15 w-90 px-7.5 mt-2 flex justify-between items-center rounded-md cursor-pointer bg-gray-200/40' onClick={() => handleSignInOptionClick({ data: null, signInOption: SignInOptionsList[0][0].toString() })}>
                    <Image src={SignInOptionsList[0][1]} height={35} width={35} alt="" style={{ cursor: 'pointer' }} />
                    <span className='h-full w-65  flex justify-center items-center text-[16px]'>Sign in with {SignInOptionsList[0][0].toString()}</span>
                </div>
                <ORBlock />
                <form
                    className='h-50 w-100 rounded-2xl flex flex-col justify-between items-center'
                    onSubmit={handleSubmit((data) => handleSignInOptionClick({ data: data, signInOption: SignInOptionsList[1][0].toString() }))}>

                    <input {...register('email', { required: true })}
                        className='h-12 w-90 px-3 bg-gray-200/40 rounded-md focus: outline-0'
                        placeholder='email'
                    />
                    <input type="text" {...register('password', { required: true })}
                        className='h-12 w-90 px-3 bg-gray-200/40 rounded-md focus: outline-0'
                        placeholder="password"
                    />
                    <input type="submit" className="h-12 w-90 bg-emerald-600 rounded-md cursor-pointer text-white" />
                </form>
            </div>
        </div >
    )
}


const ORBlock = () => {
    return (
        <div className="h-15 w-90 flex justify-center items-center">
            OR
        </div>
    )
}

export default LoginPage
