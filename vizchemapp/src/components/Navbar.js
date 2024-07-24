'use client'
import React, { useState } from "react";
import Image from "next/image";
import Vizchem_Logo from '@/app/Images/Vizchem_Logo.png'
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";

import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import ProductListCard from "./ProductListCard";

function Navbar(){
const [State,setState]=useState(true)
const [Show ,setShow]=useState(true)

function toggelManage(){
setState(!State)
console.log(State)

}



    return(
        <>

        <div className="hidden md:flex w-100 justify-center m-2 space-x-5   md:flex justify-between items-center m-5  ">

                <div className="">
                <Image src={Vizchem_Logo} className="  w-36 h-16 hover:scale-125 duration-500 cursor-pointer" alt="Vizchem Logo" />
                </div>
            <div className=" md:flex md:space-x-10  " >
                 <div className="  text-md flex  space-x-2   cursor-pointer hover:scale-125 duration-500">
                     <IoCall className=" text-xl md:text-2xl"/>
                          <div className=" text-md md:text-lg">
                                  +91-7014095673
                             </div>
                  </div>
                
                    <div className="  text-md flex  space-x-2 cursor-pointer hover:scale-125 duration-500">
                         <IoIosMail className="text-xl md:text-2xl"/>
                         <div className="">
                             info@vizchem.co.in
                              </div>
                       </div>
               
                <div className=" flex justify-center text-xl md:text-lg md:flex items-center  space-x-3 md:text-2xl">
                    <div className="">
                    <FaFacebookSquare  className="  cursor-pointer hover:scale-125 duration-500"/>
                    </div>
                    <div className=" cursor-pointer hover:scale-125 duration-500">
                    <RiInstagramFill />
                    </div>
                    <div className=" cursor-pointer hover:scale-125 duration-500 ">
                    <FaTwitterSquare />
                    </div>
                </div>
            </div>
        </div>
        
        <header class=" hidden md:block text-gray-600 body-font bg-neutral-700">
  <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center ">
    
    <nav class="md:ml-auto md:mr-auto  flex flex-wrap items-center text-base justify-center text-white ">
      <Link className="mr-9 hover:text-gray-900  duration-500 " href='/ '>Home</Link>
      <Link className="mr-9 hover:text-gray-900  duration-500 " href='/AboutUs'>About Us</Link>
      <li onClick={()=>setShow(!Show)} className="mr-9 list-none cursor-pointer hover:text-gray-900  duration-500 " href='#'>Products 
      
      <ul className={` duration-500 absolute z-10 ${Show ? `hidden` : `block`}  flex w-full h-screen top-40  gap-10 body-font bg-white left-0   text-black rounded-md drop-shadow-2xl  justify-center  `}>
     
     <Link className="h-full space-y-2  " href='/ '  >
    <ProductListCard id="ChemPro Cleaner" />
     
    
     </Link>
     
      
      <Link className=" " href='/ '>
      
      <ProductListCard id="PureChem Disinfectant
"/>
      
      
      
      
      </Link>
      <Link className=" " href='/ '>
      <ProductListCard id="Apex Solvent
"/>
      </Link>
       <Link className="" href='/ '>
       <ProductListCard id="SynthoChem Catalyst
"/>
        </Link>
       <Link className="" href='/ '>
       <ProductListCard id="SynthoChem Catalyst
EcoChem Degrease"/> 
       </Link>
      
     
      </ul>
      
      </li>
      <Link className="mr-9 hover:text-gray-900  duration-500 " href='/ContactUs'>Contact Us</Link>
    </nav>
   
  </div>
</header>


{/* mobile view  */}

<div className=" flex w-100 z-20  bg-slate-100 justify-center    md:flex justify-between items-center   md:hidden ">

<div className=" m-1">
<Image src={Vizchem_Logo} className="  w-36 h-16 hover:scale-125 duration-500 cursor-pointer" alt="Vizchem Logo" />
</div>

{
  State  ? <GiHamburgerMenu className="text-3xl m-1 cursor-pointer" onClick={toggelManage}/> :
  <RxCross2 className="text-3xl m-1 cursor-pointer" onClick={toggelManage}/>

}
</div>

<header class={`absolute z-1  duration-500 overflow-hidden text-gray-600 body-font bg-neutral-500 md:hidden ${State ? `left-[-100%]`:`left-0`} `}>

<div class=" flex  flex-wrap p-3 flex-col items-center ">

<nav class=" flex flex-wrap h-screen flex-col gap-5 items-center text-base justify-center text-white ">
<Link className=" hover:text-gray-900  duration-500 " href='/ '>Home</Link>
<Link className=" hover:text-gray-900  duration-500 " href='/AboutUs'>About Us</Link>
<Link className=" hover:text-gray-900  duration-500 " href='/Products'>Products</Link>
<Link className=" hover:text-gray-900  duration-500 " href='/ContactUs'>Contact Us</Link>
<div className="  gap-5 flex  flex-col " >
 <div className="   flex  justify-center gap-5 items-center   ">
     
             <div className=" flex gap-2 justify-center items-center  cursor-pointer hover:scale-125 duration-500">
             <IoCall className=" "/>
          <div className=" text-sm">
                  +91-7014095673
             </div>
             </div>
             
         <div className=" flex gap-2 justify-center items-center  cursor-pointer hover:scale-125 duration-500">
         <IoIosMail className="text-lg "/>
         <div className=" text-sm">
             info@vizchem.co.in
              </div>
         </div>

  </div>

    

<div className=" flex justify-center text-xl md:text-lg md:flex items-center  space-x-3 md:text-2xl">
    <div className="">
    <FaFacebookSquare  className="  cursor-pointer hover:scale-125 duration-500"/>
    </div>
    <div className=" cursor-pointer hover:scale-125 duration-500">
    <RiInstagramFill />
    </div>
    <div className=" cursor-pointer hover:scale-125 duration-500 ">
    <FaTwitterSquare />
    </div>
</div> 
 </div>

</nav>

</div>
</header>
        
        </>
    )
}
;
export default Navbar