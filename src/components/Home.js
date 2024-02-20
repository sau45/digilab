"use client"
import Image from 'next/image';
import fire from '@/assets/fire.svg';
import home from '@/assets/home.svg'
import book from '@/assets/book.svg'
import piechart from '@/assets/piechart.svg'
import chats from '@/assets/chats.svg'
import setting from '@/assets/setting.svg'
import profile from '@/assets/profile.svg'
import logout from '@/assets/logout.svg'
import notification from '@/assets/notification.svg'
import arrow from '@/assets/arrow.svg'
import dropdown from '@/assets/dropdown.svg'

import activepatient1 from '@/assets/activepatient1.svg'
import activepatient2 from '@/assets/activepatient2.svg'
import activepatient3 from '@/assets/activepatient3.svg'
import activepatient4 from '@/assets/activepatient4.svg'
import ellipse from '@/assets/ellipse.svg'
import firecircle from '@/assets/firecircle.svg'
import vector from '@/assets/vector.svg'
import vectorline from '@/assets/vectorline.svg'
import rectangle from '@/assets/rectangle.svg'


import { BsAlarm } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { CiAlarmOn } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import data from '@/components/activepatient'
import DoctorDashboard from './DoctorDashboard';
import Header from './Header';
import { motion } from 'framer-motion';



const Home = () => {


  return (
    <div className='flex p-4 '>
      {/* //////navigation////// */}
      <motion.div

        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}

        className=' md:flex flex-col  items-center w-fit gap-20 hidden md:w-2/12 md:p-12 md:justify-between '>
        <div className='flex flex-col gap-20'>

          <div className='flex items-center justify-center relative'>
            <Image src={fire} alt="fire" />
            <Image className='absolute top-4' src={firecircle} alt='firecircle' />

          </div>
          <div className='flex flex-col gap-10 '>
            <Image src={home} alt="home" />
            <Image src={book} alt="book" />
            <Image src={piechart} alt="piechart" />
            <Image src={chats} alt="chats" />
            <Image src={setting} alt="setting" />
          </div>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <Image src={profile} alt='profile' />
          <Image src={logout} alt='logout' />
        </div>
      </motion.div>
      {/* //////main-container///////// */}
      <motion.div
        initial={{ x: 12000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className='bg-my-custom-color flex flex-col xl:flex-row items-center   p-4 w-full min-w-96 md:pt-12 rounded-3xl'>
        <div className='flex w-full items-center flex-col gap-8 '>
          <Header />

          {/* //three-container-statistics-visited-upcoming/ */}

          < motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}

            className='flex flex-col md:flex-row items-center justify-center gap-4 w-fit'>


            <div className='flex flex-col gap-4 md:gap-8'>


              <div className='w-80'>

                <div className='flex items-center gap-8 bg-input-custom-color  rounded-3xl ' >
                  <div className='bg-box-background-custom rounded-tl-3xl rounded-bl-3xl pr-16 pl-4 pt-8 pb-8'>
                    <p className='text-[25px] font-[700]'>42</p>
                    <p className='whitespace-nowrap'>Patients Visited</p>
                    <p className='whitespace-nowrap text-[13px] text-gray-400'>This Month</p>
                  </div>

                  <div className='h-24 w-12 flex flex-col items-center justify-center bg-blue-500 p-4 rounded-3xl'>
                    <Image src={arrow} alt="arrow" />
                    <p className=''>
                      70%
                    </p>
                  </div>
                </div>
                <div></div>
              </div>

              <div className='w-80'>

                <div className='flex flex-col h-36  bg-input-custom-color  rounded-3xl ' >
                  <div className='flex gap-2 p-4'>
                    <div className='w-11 h-7  flex items-center justify-center bg-blue-400 rounded-2xl'>

                      <BsArrowRight className='text-[15px] text-black font-[400]' />
                    </div>
                    <p>Upcoming Events</p>
                  </div>



                  <div className='flex items-center justify-center gap-4'>
                    <div className='border border-white rounded-full p-1'>
                      <Image className='w-16 h-16' src={activepatient3} alt='activepatient' />
                    </div>
                    <div className='flex flex-col items-center'>

                      <p className='text-[20px]'>Aliza Shah</p>
                      <div className='flex items-center gap-4'>
                        <CiAlarmOn className='text-[13px]' />
                        <p className='text-[13px] text-gray-400'>05:00-06:00</p>
                      </div>
                      <p className='text-[13px] text-gray-400'>Visited 7 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className='h-80 w-80 rounded-3xl bg-custom-background-color flex flex-col gap-12'>

              <div className='flex justify-between p-4'>
                <div>
                  <p className='text-[24px] font-[700]'>Statistics</p>
                  <p className='text-[13px] text-gray-400'>November 2023</p>
                </div>

                <div className='flex items-center gap-2 justify-center w-24 border border-blue-500 rounded-3xl h-11'>
                  <p>Weekly</p>
                  <Image src={dropdown} alt='dropdown' />
                </div>
              </div>
              <div className='flex items-center justify-center relative'>
                <Image src={vectorline} alt='vectorline' />
                <Image className="absolute" src={vector} alt='vector' />
                <div className='absolute top-0'>
                  <Image src={rectangle} alt='rectangle' />
                  <div className='flex absolute gap-1 item-center justify-center top-1 left-3'>

                    <p>82%</p>
                    <Image src={arrow} alt='arrow' />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ///two-container-active-patient-team-meeting// */}
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.8 }}

            className='flex items-center justify-center flex-col gap-8 md:flex-row'>

            <div className='flex flex-col gap-4'>


              <p className='text-[24px] font-[700]'>Active Patients</p>
              <div className='h-22rem w-23rem bg-custom-background-color rounded-3xl p-4 flex flex-col justify-around'>


                {data.map((item, index) => (
                  <div key={item.time1} className={`flex items-center  ${index % 2 === 0 ? 'gap-10' : 'gap-28'}`}>
                    <p className='text-[12px] text-gray-400 whitespace-nowrap'>{item.time1}</p>
                    <div className='flex items-center justify-center gap-4 bg-white p-2 rounded-2xl'>
                      <Image src={item.image} alt="image" width={50} height={50} />
                      <div>
                        <p className='font-[700] text-[16px ] text-black whitespace-nowrap' >{item.name}</p>

                        <div className='flex items-center justify-center gap-2'>
                          <BsAlarm className='text-[9px] text-black whitespace-nowrap' />
                          <p className='text-[9px] text-black whitespace-nowrap' >{item.time2}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}



              </div>
            </div>
            <div className='flex flex-col gap-4 w-full'>
              <p className='text-[24px] font-[700]'>Upcoming Events</p>
              <div className='flex flex-col gap-4 w-full'>


                <div className=' flex item-center p-4  h-40 justify-between bg-custom-background-color rounded-3xl w-full'>

                  <div className='flex flex-col gap-8'>

                    <div className='flex flex-col gap-1'>


                      <p className='font-[700] text-[20px]'>Team Meeting</p>
                      <div className='flex items-center gap-4'>
                        <CiAlarmOn className='text-[20px]' />
                        <p>05:00-06:00</p>
                      </div>
                    </div>
                    <div className='flex relative w-24 items-center'>

                      <Image src={activepatient1} />
                      <Image className="absolute left-4" src={activepatient2} />
                      <Image className='absolute left-10' src={activepatient3} />
                      <Image className='absolute left-14' src={activepatient4} />
                    </div>

                  </div>
                  <div className='flex flex-col items-center justify-between'>

                    <div className='flex justify-center items-center h-16 w-16 bg-custom-notification-background-color rounded-3xl'>
                      <Image className='text-blue-400' src={notification} alt='notification' />
                    </div>

                    <div className='w-16 h-12 flex items-center justify-center bg-blue-400 rounded-2xl'>

                      <BsArrowRight className='text-[25px] text-black font-[800]' />
                    </div>
                  </div>
                </div>

                <div className=' flex p-4 items-center justify-between gap-24 h-40  rounded-3xl bg-custom-background-color w-full'>
                  <div className='flex flex-col gap-4'>
                    <div>
                      <p>Consultation</p>
                      <p className='font-extrabold'>82/100</p>
                    </div>

                    <div className='flex gap-4 bg-custom-dark-background-color items-center p-1 rounded-lg justify-center'>
                      <p>82%</p>
                      <Image src={arrow} />
                    </div>
                  </div>
                  <div className='flex flex-col gap-4'>

                    <CiMenuKebab className='transform rotate-90 ml-16 text-2xl text-black' />
                    <Image className='border border-white rounded-full' src={ellipse} alt='ellipse' />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
        {/* //////doctor-dashboard////// */}
        <DoctorDashboard />

      </motion.div>


    </div>
  )
}

export default Home;
