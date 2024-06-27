import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { BsUiChecksGrid } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { useNavBar } from "./utils";
import Select from "../../UI/select/Select";
import { useContextProvider } from "../../context";

function Navbar() {
  const {
    NavLinks,
    scroll,
    handleNavExpansion,
    isNavExpanded
  } = useNavBar()

  const { handleAppointmentFormVisible } = useContextProvider()

  return (
    <>
      <nav className={` transition-all duration-500 ${scroll > 0 ? "bg-dark" : "bg-transparent"}
       fixed top-0 w-dvw h-fit md:h-20 flex justify-between items-center text-white p-7`}>

        <div className="flex justify-between items-center w-full lg:w-auto pr-4 mr-[10%]">
          <img
            src="/HOTEL-LOGO.png"
            alt="LOGO"
            className='w-[40%] md:w-[30%] lg:w-[100%]'
          />
          <FaBarsStaggered
            className="lg:hidden cursor-pointer"
            size={20}
            onClick={handleNavExpansion}
          />
        </div>

        <ul className={`${isNavExpanded ? "h-[280px] lg:h-max shadow-md py-2" : "h-0 overflow-hidden lg:h-auto"}
         transition-all duration-700 absolute top-[70px] lg:static lg:shadow-none lg:inset-0 w-[85%] flex flex-col lg:flex-row
         bg-white lg:bg-transparent text-black lg:text-white gap-5`}>
          {NavLinks.map((nav, idx) => {
            return (
              <li key={idx} className='flex border-t lg:border-none gap-[2px] justify-between
               items-center px-2 font-medium cursor-pointer hover:underline'>
                {nav.name}
                {nav.children && <MdOutlineKeyboardArrowDown size={20} />}
              </li>
            )
          })}
        </ul>

        <div className='flex justify-between items-center gap-8'>
          <Select />
          <button className='hidden bg-secondary text-nowrap py-4 px-2 lg:flex gap-1 items-center cursor-pointer group'>
            Book Now
            <MdOutlineKeyboardArrowRight size={20} className='transition-all duration-500 group-hover:translate-x-2' />
          </button>
          <button className='hidden lg:flex relative cursor-pointer'>
            <MdOutlineShoppingBag size={20} />
            <span className='absolute top-[-14px] right-[-4px]'>0</span>
          </button>
          <button className='lg:flex cursor-pointer'>
            <BsUiChecksGrid onClick={handleAppointmentFormVisible} />
          </button>
        </div>

      </nav>
    </>
  )
}

export default Navbar