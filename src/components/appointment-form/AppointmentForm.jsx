import React from 'react'
import { useContextProvider } from '../../context'

const AppointmentForm = () => {
    const { isAppointmentFormOpen } = useContextProvider()
    return (
        <div className={`z-50 fixed ${!isAppointmentFormOpen && "hidden"} `}>
            <form className='p-4 flex flex-col h-full w-[50%] bg-dark'>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email Address' />
                <textarea name="message" placeholder='Message' />
                <button>Submit Now</button>
            </form>
            <section>
                <i>Icons</i>
                <i>Icons</i>
                <i>Icons</i>
                <i>Icons</i>
            </section>
        </div>
    )
}
export default AppointmentForm