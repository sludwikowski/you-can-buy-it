import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

export const Checkout = (props) => {
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

Checkout.propTypes = {
  sx: PropTypes.object
}

export default Checkout
