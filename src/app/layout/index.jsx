import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

export default function Layout({ ...props }) {
    return (
        <React.Fragment>
            <Navbar />
            <Hero />
        </React.Fragment>
            
    )
}