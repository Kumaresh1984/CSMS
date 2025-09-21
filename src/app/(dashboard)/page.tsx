'use client'

import { useState, useEffect } from 'react'

import Grid from '@mui/material/Grid'

import Award from '@views/dashboard/Award'

import Transactions from '@views/dashboard/Transactions'
import WeeklyOverview from '@views/dashboard/WeeklyOverview'
import TotalEarning from '@views/dashboard/TotalEarning'
import LineChart from '@views/dashboard/LineChart'
import DistributedColumnChart from '@views/dashboard/DistributedColumnChart'
import DepositWithdraw from '@views/dashboard/DepositWithdraw'
import SalesByCountries from '@views/dashboard/SalesByCountries'
import CardStatVertical from '@components/card-statistics/Vertical'
import Table from '@views/dashboard/Table'

const DashboardAnalytics = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/api/test')
      .then(res => res.text())
      .then((result: any) => {
        console.log(JSON.parse(result)) // prints in browser console
        setData(JSON.parse(result).message) // store message in state
      })
      .catch(err => console.error('API call failed:', err))
  }, [])

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Award />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Transactions />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <LineChart />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardStatVertical
                title='Total Profit'
                stats='$25.6k'
                avatarIcon='ri-pie-chart-2-line'
                avatarColor='secondary'
                subtitle='Weekly Profit'
                trendNumber='42%'
                trend='positive'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardStatVertical
                stats='862'
                trend='negative'
                trendNumber='18%'
                title='New Project'
                subtitle='Yearly Project'
                avatarColor='primary'
                avatarIcon='ri-file-word-2-line'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DistributedColumnChart />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
      <h1>API Response:</h1>
      <h2>{data}</h2>
    </>
  )
}

export default DashboardAnalytics
