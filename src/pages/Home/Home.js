import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

export const Home = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >

    </Box>
  )
}

Home.propTypes = {
  sx: PropTypes.object
}

export default Home
