import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import AppointmentForm from '../components/appointment-form/AppointmentForm'

const Rootlayout = () => {
    return (
        <>
            <AppointmentForm />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Rootlayout