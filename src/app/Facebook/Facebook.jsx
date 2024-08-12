import { Span } from 'next/dist/trace'
import React from 'react'

export default function Facebook() {
    return (
        <div className="h-screen  bg-blue-50">
            <div className="text-center">
                <p className="text-[14px] py-[10px] text-gray-700 tracking-wide">English (UK)</p>
            </div>
            <div className="flex justify-center pt-[60px]">
                <img className='w-[60px] h-[60px]' src="./asset/logo-1.png" alt="" />
            </div>
            <div className='flex flex-col justify-center text-center py-[70px]'>
                <div className='py-[15px] '>
                    <input className='w-[368px] h-[61px] rounded-[12px] py-[10px] px-[16px] border-slate-300 border-[0.5px] tracking-wide text-[16px] focus:text-black focus:outline-black' placeholder='Mobile number or email address' type="mail" />
                </div>
                <div>
                    <input className='w-[368px] h-[61px] rounded-[12px] py-[10px] px-[16px] border-slate-300 border-[0.5px] tracking-wide text-[16px] focus:text-black focus:outline-black' placeholder='Password' type="password" />
                </div>
                <div className='py-[10px]'>
                    <button className='w-[368px] h-[44px] bg-blue-600 rounded-[30px] text-white font-semibold'>Log in</button>
                </div>
                <p className='py-[5px] tracking-wide text-[16px]'>Forgotten Password?</p>
            </div>
            <div className='pt-[60px] text-center'>
                <button className='w-[368px] h-[44px] rounded-[30px] text-blue-600  border-[0.5px] border-blue-600 tracking-wide'>Create new account</button>
            </div>
            <div className='flex justify-center py-[30px]'>
                <img className='w-[60px] h-[12px]' src="./asset/meta.png" alt="" />
            </div>
            <div className='flex justify-center'>
                <p className='text-[10px]'>About</p>
                <p className='px-[10px] text-[10px]'>Help</p>
                <p className='text-[10px]'>More</p>
            </div>
        </div>
    )
}
