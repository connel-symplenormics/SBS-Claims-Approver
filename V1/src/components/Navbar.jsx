import logo from './../assets/logo-sample.jpeg'
import {SlArrowDown} from 'react-icons/sl'
function Navbar() {
  
  return (
    <nav className="fixed top-0 right-0 left-[320px] h-[70px]  flex justify-end  ">
      <div className="flex items-center mr-6 mt-3 h-[50px]  bg-white rounded-full">
        <img className="w-[40px] h-[40px] ml-1 rounded-3xl" src={logo} />
        <div className="flex flex-col ml-5">
          <h4 className=" font-semibold">Alex Maine</h4>
          <h5 className="text-gray-400">Administrator</h5>
        </div>
        <SlArrowDown className="text-xs mx-5"/>
      </div>
      
    </nav>
  )
}

export default Navbar
