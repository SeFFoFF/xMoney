'use client'

import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@redux/store'
import Header from '@components/Header'

const MainProvider = ({ children }): JSX.Element => {
  return (
    <Provider store={store}>
      <Header />
      {children}
    </Provider>
  )
}

export default MainProvider
