import React from 'react'
import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { Box, Badge, IconButton } from '@mui/material'
import { PersonOutline, ShoppingBagOutlined, MenuOutlined, SearchOutlined } from '@mui/icons-material'

import { shades } from '../../../theme'

export const Navbar = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '60px',
        backgroundColor: 'rgba(255,255,255,0.95',
        color: 'black',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '1',
        ...sx
      }}
      {...otherProps}
    >
      <Box
        width={'80%'}
        margin={'auto'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box
          onClick={() => navigate('/')}
          sx={{
            '&:hover': { cursor: 'pointer' },
            color: shades.secondary[500]
          }}
        >
          SHOPPING APP
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          columnGap={'20px'}
          zIndex={'2'}
        >
          <IconButton
            sx={{ color: 'black' }}
          >
            <SearchOutlined/>
          </IconButton>
          <IconButton
            sx={{ color: 'black' }}
          >
            <PersonOutline/>
          </IconButton>
          <IconButton
            sx={{ color: 'black' }}
          >
            <ShoppingBagOutlined/>
          </IconButton>
          <IconButton
            sx={{ color: 'black' }}
          >
            <MenuOutlined/>
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

Navbar.propTypes = {
  sx: PropTypes.object
}

export default Navbar
