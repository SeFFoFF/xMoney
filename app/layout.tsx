import React from 'react'
import MainProvider from '@components/MainProvider'
import '@styles/globals.css'

export const metadata = {
  title: 'xMoney',
  description: "Don't keep your funds in your head"
}

const RootLayout = ({ children }): JSX.Element => {
  return (
    <html lang="eu">
      <body className="app sm:my-10 lg:my-0 lg:h-screen flex items-center justify-center bg-gray-300">
        <div className="app-container sm:px-10px md:px-20px">
          <div className="bg-app rounded-lg">
            <MainProvider>
              { children }
            </MainProvider>
          </div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
