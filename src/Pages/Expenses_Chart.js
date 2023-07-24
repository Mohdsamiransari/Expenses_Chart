import React from 'react'
import { LChart } from '../Components/LChart'
import { BCharts } from '../Components/BCharts'
export const Expenses_Chart = () => {
  return (
    <div className='w-full h-screen bg-[#f8e9dd] grid place-items-center'>
        <div className=' max-md:w-5/6 max-xl:w-[45%] w-2/6  max-md:h-3/5 h-4/6 flex flex-col gap-4'>
            <div className='basis-1/5 bg-[#ec775f] rounded-lg flex justify-between items-center px-4'>
                <div >
                    <p className='text-sm'>My balance</p>
                    <h1 className='text-2xl font-semibold'>$921.48</h1>
                </div>
                <svg width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23"/></g></svg>

            </div>
            <div className='basis-full bg-[#fffaf5] rounded-lg p-4 text-black flex flex-col'>
                <h1 className='basis-1/5 font-semibold text-xl'>Spending - Last 7 days</h1>
                <div className='basis-full relative w-full '>
                    <BCharts/>
                </div>
                <div className='w-full border '></div>
                <div className='basis-2/5 flex justify-between items-center'>
                    <div>
                        <p className='text-sm'>Total this month</p>
                        <h1 className='text-3xl font-semibold'>$477.33</h1>
                    </div>
                    <div className='text-sm grid justify-items-end'>
                        <p>+2.5%</p>
                        <p>from last month</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
