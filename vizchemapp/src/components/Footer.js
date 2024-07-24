import React from "react";
import Image from "next/image";
import Vizchem_logo from "@/app/Images/Vizchem_Logo.png"
export default function Footer(){

    return(
        <>
       
        
         <div className=" hidden md:w-full  bg-[url('https://static.vecteezy.com/system/resources/thumbnails/020/682/981/small_2x/green-leaf-transparent-background-green-leaf-template-background-vector.jpg')] bg-no-repeat bg-cover bg-center  md:flex mt-24 p-10">



            <div className=" w-1/3 ">

                <div className="">
                    <Image className="w-24" src={Vizchem_logo} alt="company Logo"/>
                </div>
                <div className="">
                   <p>We are a premier manufacturer, global technical solution provider and exporter of specialty chemicals, with a successful track record spanning over the last two decades.</p>
                </div>
            </div>
            <div className="flex  flex-col items-center justify-center w-1/3 space-y-3">
                <div className="">
                    <h1 className="text-lg font-bold ">Quick Link</h1>
                </div>
                <div className="list-none space-y-4">
                    
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Products</li>
                       
                    
                </div>
            </div>
            <div className="flex  flex-col items-center justify-center w-1/3 space-y-3">
                <div className="text-lg font-bold ">
                    Contact Us 
                </div>
                <div className="list-none space-y-4">
                    <li>info@vizchem.co.in</li>
                    <li>+91-7014095673</li>
                    <li>VizChem Tower Adharwadi Chowk, Jail Road kalyan (W), Distt.- Thane, Mumbai 421301</li>
                   
                </div>
            </div>
            
        </div>
       
        <div className="hidden  p-4  md:flex justify-between  bg-white">
            <div className="">
<h1>© Copyright 2022. All Rights Reserved - VizChem.</h1>
            </div>
            <div className="">
<h1>Design & Developed By:- MOHAMMAD KAREEM</h1>
            </div>
        </div> 
 

{/* mobile view  */}
<div className="w-full bg-[url('https://cdn.vectorstock.com/i/500p/33/41/modern-green-banner-background-graphic-design-vector-51583341.jpg')] bg-no-repeat bg-cover bg-center gap-5 flex flex-col mt-24 p-10 md:hidden">



<div className=" w-full flex flex-col items-center justify-center md:hidden">

    <div className=" ">
        <Image className="w-36 " src={Vizchem_logo} alt="company Logo"/>
    </div>
    <div className=" text-center ">
       <p className="text-sm">We are a premier manufacturer, global technical solution provider and exporter of specialty chemicals, with a successful track record spanning over the last two decades.</p>
    </div>
</div>
<div className="flex w-full  items-center justify-center w-full space-y-2">
   <div className="flex  flex-col w-1/2 gap-3">
   <div className="">
        <h1 className="text-xl font-bold">Quick Link</h1>
    </div>
    <div className=" text-lg list-none space-y-1">
        
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
           
        
    </div>
   </div>
    <div className=" flex flex-col w-1/2 gap-3">
    <div className="text-xl font-bold ">
        Contact Us 
    </div>
    <div className="list-none space-y-1 text-lg">
        <li>info@vizchem.co.in</li>
        <li>+91-7014095673</li>
        <li>VizChem Tower Adharwadi Chowk, Jail Road kalyan (W), Distt.- Thane, Mumbai 421301</li>
       
    </div>
    </div>
</div>


</div>
<hr />
<div className=" md:hidden  p-4  flex justify-between    ">
<div className="text-sm">
<h1>© Copyright 2022. All Rights Reserved - VizChem.</h1>
</div>
<div className="text-sm">
<h1>Design & Developed By:- MOHAMMAD KAREEM</h1>
</div>
</div> 


        </>
    )
}