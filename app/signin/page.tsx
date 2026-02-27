'use client'

import { useForm } from "react-hook-form"
import Image from 'next/image';
import { signIn } from 'next-auth/react';

import { SignInOptionsList } from "../../utils/data/imageDirectory";
import { useState } from "react";

const LoginPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [error, setError] = useState(false);

    const handleSignInOptionClick = (data: { data: any, signInOption: string }) => {// eslint-disable-line @typescript-eslint/no-explicit-any

        if (data.signInOption === "Google") {
            localStorage.setItem("redirectReason", "signin");
            signIn(data.signInOption);
        } else if (data.signInOption === 'Email') {
            try {
                const res = signIn('credentials', { email: data.data.email, password: data.data.password, redirect: false });

                res.then(d => {
                    if (d?.error) {
                        setError(true);
                        reset();
                    } else {
                        setError(false);
                    }
                });

            } catch (error) {
                console.log("error while sign in :", error);
            }
        }
    }

    return (
        <div className='h-full w-screen flex justify-center items-center'>
            <div className="h-110 w-130  rounded-2xl flex flex-col justify-evenly items-center shadow-2xl">
                <div className='h-15 w-90 px-7.5 mt-2 flex justify-between items-center rounded-md cursor-pointer bg-gray-200/40' onClick={() => handleSignInOptionClick({ data: null, signInOption: SignInOptionsList[0][0].toString() })}>
                    <Image src={SignInOptionsList[0][1]} height={35} width={35} alt="" style={{ cursor: 'pointer' }} />
                    <span className='h-full w-65  flex justify-center items-center text-[16px]'>Sign in with {SignInOptionsList[0][0].toString()}</span>
                </div>
                <ORBlock />
                <form
                    className='h-56 w-100 rounded-2xl flex flex-col justify-between items-center'
                    onSubmit={handleSubmit((data) => handleSignInOptionClick({ data: data, signInOption: SignInOptionsList[1][0].toString() }))}>
                    <div className="h-5 w-90 text-[13px] text-red-500 ">
                        {error === true ? `Invalid Email or Password. Try Again!` : ``}
                    </div>
                    <div className="h-16 w-90 p-0">
                        <span className="h-4 w-full block text-[10px] text-red-500">{errors.email && "Email is required"}</span>
                        <input {...register('email', { required: true })}
                            className='h-12 w-90 px-3 bg-gray-200/40 rounded-md focus: outline-0'
                            placeholder='email'
                        />
                    </div>
                    <div className="h-16 w-90">
                        <span className="h-4 w-full block text-[10px] text-red-500">{errors.password && "Password is required"}</span>
                        <input type="text" {...register('password', { required: true })}
                            className='h-12 w-full px-3 bg-gray-200/40 rounded-md focus: outline-0'
                            placeholder="password"
                        />
                    </div>

                    <input type="submit" className="h-12 w-90 bg-emerald-600 rounded-md cursor-pointer text-white" />
                </form>
            </div>
        </div >
    )
}


const ORBlock = () => {
    return (
        <div className="h-10 w-90 flex justify-center items-center border-2">
            OR
        </div>
    )
}

export default LoginPage
