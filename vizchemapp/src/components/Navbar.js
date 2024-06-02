import React from "react";
import Image from "next/image";
import Vizchem_Logo from '@/app/Images/Vizchem_Logo.png'
import Link from "next/link";

function Navbar(){


    return(
        <>

        <div className="flex justify-between items-center m-5 ">

            <div className="">
            <Image src={Vizchem_Logo} className="w-36 h-16" />
            </div>
            <div className="flex space-x-5" >
                <div className="">
                +91-7014095673
                </div>
                <div className="">
                     
info@vizchem.co.in
                </div>
                <div className="">
                    Social Media Logo
                </div>
            </div>
        </div>
        
        <header class="text-gray-600 body-font bg-neutral-700">
  <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    
    <nav class="md:ml-auto md:mr-auto  flex flex-wrap items-center text-base justify-center text-white ">
      <Link className="mr-10 hover:text-gray-900" href='/Home'>Home</Link>
      <Link className="mr-10 hover:text-gray-900" href='/About Us'>About Us</Link>
      <Link className="mr-10 hover:text-gray-900" href='/Products'>Products</Link>
      <Link className="mr-10 hover:text-gray-900" href='/Contact Us'>Contact Us</Link>
    </nav>
   
  </div>
</header>
        
        </>
    )
}
;
export default Navbar