'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = (): JSX.Element => {
  return (
    <header className="flex items-center justify-between bg-white h-header rounded-t-lg px-10">

      <Link href="/">
        <h1 className="text-3xl w-160px">xMoney</h1>
      </Link>

      <div className="flex items-center gap-2">
        <span>{'<'}</span>
        <h2 className="text-2xl">2023</h2>
        <span>{'>'}</span>
      </div>

      <div className="flex items-center gap-3">
        <p>Anton Yefimov</p>
        <Image className="object-contain rounded-full w-40px h-40px" src="https://d.newsweek.com/en/full/2075527/truffles-cat-wears-glasses-opticians.jpg?w=1600&h=1600&q=88&f=a895f4ac654b2989a08a7de21e2b8837" width={40} height={40} alt="User image"/>
      </div>

    </header>
  )
}

export default Header
