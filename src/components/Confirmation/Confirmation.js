import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

export const Confirmation = (props) => {
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

Confirmation.propTypes = {
  sx: PropTypes.object
}

export default Confirmation
