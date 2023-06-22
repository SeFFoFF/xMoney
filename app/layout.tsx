import React from 'react'
import AppLayout from '@core/AppLayout'
import '@styles/globals.css'

export const metadata = {
  title: 'xMoney',
  description: "Don't keep your funds in your head"
}

const RootLayout = ({ children }): JSX.Element => {
  return (
    <html lang="eu">
      <body>
        <AppLayout>
          { children }
        </AppLayout>
      </body>
    </html>
  )
}

export default RootLayout
