import { Box } from '@mui/material'
import React from 'react'
import Headers from '../../components/Headers'

const Dashboard = () => {
  return (
   <Box m="20px">
    {/* Header */}
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Headers title="Dashboard" subtitle="Welcome to your dashboard"/>

    </Box>
    
   </Box>
  )
}

export default Dashboard;
