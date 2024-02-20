"use client"
import React from 'react'
import { BsSearch } from "react-icons/bs";
import notification from '@/assets/notification.svg'
import Image from 'next/image';


const Header = () => {
    return (
        <>
            <div className='header h-12 flex gap-4 md:gap-24 pl-8 pr-8 justify-center'>
                <div className='flex flex-col min-w-custom-min-width '>
                    <p>Hello ,</p>
                    <p className='text-[1.3rem] font-[400] whitespace-nowrap'>Dr. Colter! 👋</p>
                </div>

                <div className='md:flex gap-1 hidden'>

                    <div className='h-12 flex items-center justify-center relative '>

                        <BsSearch className='absolute left-5' />
                        <input className='bg-input-custom-color md:rounded-3xl md:w-96 h-full pl-12 ' placeholder='Search' />
                    </div>

                    <div className='w-12 flex items-center justify-center bg-cyan-500 rounded-2xl h-12'>

                        <Image src={notification} alt='notification' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
