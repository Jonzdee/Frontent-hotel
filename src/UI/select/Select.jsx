import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

//Didn't use <select> due to browser limitations
const Select = () => {
    const values = ["English", "French", "Spanish"]
    const [selectedValue, setSelectedValue] = useState("English")
    const [isClicked, setIsClicked] = useState(false)
    const handleIsClicked = () => setIsClicked(state => !state)
    const handleChange = (index) => setSelectedValue(values[index])

    return (
        <div className='hidden lg:flex relative cursor-pointer' onClick={handleIsClicked}>
            <span className='flex items-center'>
                {selectedValue}
                <MdOutlineKeyboardArrowDown size={20} className={`duration-500 ${isClicked && "rotate-180 "}`} />
            </span>
            <ul className={`duration-500 ${isClicked ? "" : "hidden"} absolute mt-6 bg-white flex flex-col gap-1 border`}>
                {values.map((val, idx) => (
                    <li
                        key={idx}
                        onClick={() => handleChange(idx)}
                        value={val}
                        className='duration-200 text-gray-900 p-2 hover:bg-secondary'>
                        {val}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Select