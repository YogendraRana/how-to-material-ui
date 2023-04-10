import { Box } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'

const Home = () => {

  return (
    <Box height='50vh' bgcolor={{xs: 'aliceblue', sm: 'red', md: 'green'}} >
      <Stack>
        <Box>A</Box>
        <Box>B</Box>
      </Stack>
    </Box>
  )
}

export default Home;