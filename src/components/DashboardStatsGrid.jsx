import React from 'react'
import { IoBagHandle, IoCart, IoPeople, IoPieChart } from 'react-icons/io5'

const DashboardStatsGrid = () => {
    return (
        <div className='flex gap-4 w-full'>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                    <IoBagHandle className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Sales</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$4521.32</strong>
                        <span className='text-sm text-green-500 pl-2'>+212</span>
                    </div>
                </div>
                </BoxWrapper>

            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-500'>
                    <IoPieChart className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Expenses</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$5632.45</strong>
                        <span className='text-sm text-green-500 pl-2'>-321</span>
                    </div>
                </div>
                </BoxWrapper>

            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500'>
                    <IoPeople className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Customers</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>8712</strong>
                        <span className='text-sm text-green-500 pl-2'>+43</span>
                    </div>
                </div>
            </BoxWrapper>

            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-500'>
                    <IoCart className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Orders</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>16342</strong>
                        <span className='text-sm text-green-500 pl-2'>+76</span>
                    </div>
                </div>
                </BoxWrapper>
        </div>
    )
}

function BoxWrapper({ children }) {
    return <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
}

export default DashboardStatsGrid
