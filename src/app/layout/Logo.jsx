import React from 'react'
import Image from 'next/image'
import logo from '../common/assets/shop.png'

export default function Logo ({...props}) {
  return (
    <div className="relative z-10 px-2 flex lg:px-0">
      <div className="flex-shrink-0 flex items-center">
        <Image
          className="block h-8 w-auto"
          src={logo}
          alt="Workflow"
        />
        <a
          className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ml-4"
          href="/">
          Mercado en línea
        </a>
      </div>
    </div>
  )
}
