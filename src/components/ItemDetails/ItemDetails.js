import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

export const ItemDetails = (props) => {
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

ItemDetails.propTypes = {
  sx: PropTypes.object
}

export default ItemDetails
