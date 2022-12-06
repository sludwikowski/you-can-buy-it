import React, { useEffect } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'

import Home from './scenes/Home/Home'
import ItemDetails from './scenes/ItemDetails/ItemDetails'
import Checkout from './scenes/Checkout/Checkout'
import Confirmation from './scenes/Checkout/Confirmation'
import Navbar from './scenes/Global/Navbar'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App () {
  return (
    <div className={'app'}>
      <BrowserRouter>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route
            path={'/'}
            element={<Home/>}
          />
          <Route
            path={'item/:itemId'}
            element={<ItemDetails/>}
          />
          <Route
            path={'checkout'}
            element={<Checkout/>}
          />
          <Route
            path={'checkout/success'}
            element={<Confirmation/>}
          />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
