import React from 'react'
import Link from 'next/link'

const Home = (): JSX.Element => {
  return (
    <div className='home-screen'>
      <h1>Welcome to the xMoney app!</h1>
      <Link href="/2023">2023</Link>
    </div>
  )
}

export default Home
