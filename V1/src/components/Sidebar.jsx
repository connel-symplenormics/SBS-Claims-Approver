import logo from './../assets/logo-srs-refined.svg'
import { RiDashboardLine } from 'react-icons/ri'
import { BiSolidDashboard } from 'react-icons/bi'
import { IoDocumentOutline, IoDocuments} from 'react-icons/io5'
import { MdOutlineReviews, MdRateReview } from 'react-icons/md'
import { MdOutlinePeopleAlt, MdPeopleAlt } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { SlArrowLeft } from 'react-icons/sl'
import {useState} from 'react'


function Sidebar() {
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon1: <RiDashboardLine/>,
            icon2: <BiSolidDashboard/>,
        },
        {
            path: "/members",
            name: "Members",
            icon1: <MdOutlinePeopleAlt />,
            icon2: <MdPeopleAlt/>
        },
        {
            path: "/claims",
            name: "Claims",
            icon1: <IoDocumentOutline />,
            icon2: <IoDocuments/>
        },
        {
            path: "/reviews",
            name: "Reviews",
            icon1: <MdOutlineReviews/>,
            icon2: <MdRateReview/>

        }
    ]

    const [open, setOpen] = useState(true)

    return ( 
    
        <div className={`${open ? 'w-72' : 'w-20'} transition-all duration-700 fixed top-0 bottom-0 left-0 h-full w-[320px] flex flex-col items-center justify-between `}>
            <div className="  absolute -right-3 top-8">
                <button className="bg-white cursor-pointer h-6 w-6 flex items-center justify-center rounded-full" onClick={()=>setOpen(!open)}>
                    <SlArrowLeft className={`${open? '':'transform -rotate-180'} text-sm font-bold`}/>
                </button>

            </div>
            <div>
                <div className={` flex items-center py-3 mb-9 justify-center cursor-pointe]`}>
                    <img className="w-[50px] mr-2 " src={logo} /> 
                   
                     <h1 className={`${open? 'visible' : 'hidden'} transition-all duration-700`}>Claim  Approver</h1> 
                </div>

                <div className="">
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="transition-all duration-500 flex items-center px-9 py-4 hover:bg-white rounded-3xl hover:drop-shadow-lg hover:text-[#34909B]"> 
                            <h3 className="mr-5 cursor-pointer">{item.icon1}</h3>
                            <h2 className={`${open ? 'visble' : 'hidden'}`}>{item.name}</h2>
                        </NavLink>
                    ))
                }
                </div>

            </div>
            

            <div className="flex items-center mb-14 ">
                <h3 className={` mr-4 text-xl`}><BiLogOut /></h3>
                <button className={`${open ? 'visble' : 'hidden'} text-xl`}>
                    <h3>Logout</h3>
                </button>
            </div>
        </div>
        
    )
}

export default Sidebar
