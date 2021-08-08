import React from 'react'
import Logo from '@components/ui/Logo'

const Card = ({ children, ...props }) => {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-auto bg-no-repeat bg-center" style={{backgroundImage: "url(https://images.unsplash.com/photo-1588912422476-f2afaed1ec0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80)"}}>
      <div>
      </div>

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        {children}
      </div>
    </div>
  )
}

export default Card
