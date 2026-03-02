import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx"
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";

const Home = () => {
    const [isActive, setIsActive] = useState(true)
    const [hover, setHover] = useState(false)
    const handleClick = () => {
        if (isActive) {
            setIsActive(false)
        }
    }

    return (
        <div>
            {isActive ?
                <div className='flex justify-between bg-[#FFD300] px-2 py-4'>
                    <div></div>
                    <div>
                        <div className='flex justify-between gap-10'>
                            <div>
                                <div className='flex items-center '>
                                    <div className='bg-[#FFFAE5] rounded-md text-black p-3 font-bold text-2xl' >
                                        {isActive ? <p>FREE BOOTCAMP</p> : <p>FREE BOOTCAMP</p>}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold text-2xl'>ENDS SOON: 20% off expert-led bootcamps</p>
                                <p>Last chance to save 20% on upcoming bootcamps. Learn full stack, data & more.</p>
                            </div>
                            <div className='flex items-center '>
                                <div className='bg-[#3A10E5] rounded-md p-3'>
                                    <Link to="https://www.codecademy.com/bootcamps" className='text-white'>Explore BootCamp</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='p-4'><button className='hover:bg-amber-100 p-2 rounded-md cursor-pointer' onClick={handleClick}><RxCross2 /></button></div>
                    </div>
                </div>
                : <div className='hidden'></div>
            }
            {/* making navbar */}
            <div className='flex bg-[#FFF0E5] justify-center gap-5 px-4 py-8'>
                <div>codecademy</div>
                <div>
                    <ul className='flex gap-5'>
                        <li className='hover:text-blue-600 cursor-pointer'>
                            {hover ? <p className='hover:cursor-pointer hover:bg-[#E2D6CF] hover:p-2'>Bootcamps</p> : <p className='hover:cursor-pointer hover:bg-[#E2D6CF] hover:p-2'>Bootcamps</p>}
                        </li>
                        <li className='hover:text-blue-600 cursor-pointer'>Catelog</li>
                        <li className='hover:text-blue-600 cursor-pointer'>Catelog</li>
                        <li className='hover:text-blue-600 cursor-pointer'>Catelog</li>
                        <li className='hover:text-blue-600 cursor-pointer'>Catelog</li>
                        <li className='hover:text-blue-600 cursor-pointer'>Catelog</li>
                        <li className='hover:text-blue-600 cursor-pointer'>Catelog</li>
                    </ul>
                </div>
                <div >
                    <ul className='flex gap-5 '>
                        <li className='hover:cursor-pointer hover:bg-[#E2D6CF] hover:p-2'><IoIosSearch /></li>
                        <li className='hover:cursor-pointer hover:bg-[#E2D6CF] hover:p-2'>Log In</li>
                        <li className='hover:cursor-pointer hover:bg-[#E2D6CF] hover:p-2'>Sign Up</li>
                    </ul>
                </div>

            </div>

            {/* home page */}
            <div className='flex justify-center gap-5 flex-col bg-[#D3F2FF] '>
                <div className='border-2 w-5xl h-6xl bg-amber-100 rounded-2xl'>
                    hel
                </div>
                <div className='border-2 w-5xl h-6xl bg-amber-100 rounded-2xl'>
                    hel
                </div>
            </div>

        </div>
    )
}

export default Home
