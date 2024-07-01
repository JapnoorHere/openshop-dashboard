import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'

const Dashboard = () => {
  return (
    <div className=''>
      <DashboardStatsGrid/>
      <TransactionChart/>
      <BuyerProfileChart/>
    </div>
  )
}

export default Dashboard
