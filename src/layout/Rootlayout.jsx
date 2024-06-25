import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Rootlayout = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Outlet />
            <Footer />
        </>
    )
}

export default Rootlayout