import { createContext, useContext, useState } from "react";

const Context = createContext({
    isAppointmentFormOpen: false,
    handleAppointmentFormVisible: () => { }
})

export const ContextProvider = ({ children }) => {
    const [isAppointmentFormOpen, setIsAppointmentFormOpen] = useState(false)

    const handleAppointmentFormVisible = () => setIsAppointmentFormOpen(prev => !prev)

    const values = {
        isAppointmentFormOpen,
        handleAppointmentFormVisible
    }

    return <Context.Provider value={values}>{children}</Context.Provider>
}

export const useContextProvider = () => useContext(Context)