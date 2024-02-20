"use client"
import React from 'react'
import aliamcolter from '@/assets/aliamcolter.svg'
import aliamprofile from '@/assets/aliamprofile.svg'
import activepatient1 from '@/assets/activepatient1.svg'
import activepatient2 from '@/assets/activepatient2.svg'
import activepatient3 from '@/assets/activepatient3.svg'
import activepatient4 from '@/assets/activepatient4.svg'

import { MdPhone } from "react-icons/md";
import { LuMic } from "react-icons/lu";
import { BsSend } from "react-icons/bs";
import Image from 'next/image'
import { motion } from 'framer-motion'

const DoctorDashboard = () => {
    return (
        <>
            <motion.div
                initial={{ y: 17000 }}
                animate={{ y: 0 }}
                transition={{ duration: 2.4 }}

                className='bg-doctor-dashboard-custom-background-color rounded-3xl flex items-center justify-center flex-col p-4 gap-4'>

                <div className='flex flex-col items-center justify-center p-4'>

                    <div className='flex relative justify-center items-center w-20'>
                        <Image className='w-89%' src={aliamcolter} />
                        <Image className='absolute w-14 border border-black rounded-full bg-blue-300' src={aliamprofile} />

                    </div>
                    <p>Aliam Colter</p>
                    <p className='text-[12px] text-gray-400'>Physician</p>
                </div>

                <div className='flex items-center justify-center gap-20 bg-active-patient-background-color p-3 rounded-3xl min-w-80 md:w-full'>
                    <p className='whitespace-nowrap'>Active Patients</p>

                    <div className='flex relative w-24 items-center'>

                        <Image src={activepatient1} />
                        <Image className="absolute left-4" src={activepatient2} />
                        <Image className='absolute left-10' src={activepatient3} />
                        <Image className='absolute left-14' src={activepatient4} />
                    </div>
                </div>


                <div className='  bg-active-patient-background-color rounded-3xl  min-w-80 h-full'>

                    <div className='p-4 flex flex-col gap-44'>



                        <div className='p-4'>


                            <div className='flex gap-24 items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <Image src={activepatient1} />
                                    <div>
                                        <p>Alexa Max</p>
                                        <p className='text-[9px] text-gray-400'>Active 5 min ago</p>
                                    </div>
                                </div>

                                <div className='flex items-center justify-center rounded-3xl bg-input-custom-color w-8 h-8'><MdPhone className='text-green-500' /></div>
                            </div>
                            <div className='min-w-60 bg-black mt-4 border border-my-custom-color'></div>
                            <div className='flex items-center p-4 gap-4'>
                                <Image src={activepatient1} />

                                <div className='flex flex-col gap-2'>

                                    <p className='w-fit bg-white text-black rounded-2xl p-1 whitespace-nowrap text-[12px]'>Hi , Doctor </p>
                                    <div className='gap-4'>
                                        <p className='w-fit bg-white text-black rounded-2xl p-1 text-[12px]'>I got knee jerk. What should i do right now?</p>
                                        <p className='text-[10px]'>Tue 02:32pm</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center p-4 gap-4'>


                                <div className='flex flex-col gap-2'>

                                    <p className='w-fit bg-white text-black rounded-2xl p-1 ml-32 whitespace-nowrap text-[12px]'>Hi, Alexa. </p>
                                    <div className='gap-4'>
                                        <p className='w-fit bg-white text-black rounded-2xl p-1 text-[12px]'>This help maintain balance and posture. dont worry.</p>
                                        <p className='text-right text-[10px]'>Tue 02:32pm</p>
                                    </div>
                                </div>
                                <Image className='w-10' src={aliamprofile} />
                            </div>




                        </div >
                        <div className='flex items-center justify-between p-2 bg-input-custom-color rounded-2xl'>
                            <div className='flex items-center justify-center gap-4'>
                                <LuMic />
                                <p>Type Your text.....</p>
                            </div>

                            <div className='flex items-center justify-center h-8 w-8 bg-blue-400 rounded-3xl'><BsSend /></div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default DoctorDashboard
