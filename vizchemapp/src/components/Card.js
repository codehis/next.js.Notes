import React from "react";
import Image from "next/image";
// import SliderOne from '@/app/Images/SliderOne.jpeg'
import SliderTwo from '@/app/Images/SliderTwo.jpg'
// import SliderThree from '@/app/Images/SliderThree.jpeg'
// import SliderFour from '@/app/Images/SliderFour.jpg'
import { GiWaterDrop } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa6";
import { FaBatteryFull } from "react-icons/fa";

export default function Card(){
    return(

        <>
        
        <div className=" hidden md:block  bg-slate-100 p-1 bg-[url('https://img.freepik.com/free-vector/green-curve-frame-template-vector_53876-140358.jpg')] bg-no-repeat bg-cover bg-center  ">
        
        <div className="flex  w-full h-full md:flex flex-wrap justify-center items-center space-x-14  mt-20 mb-20 cursor-pointer">
       
       
        <div class="  rounded drop-shadow-2xl hover:scale-110 cursor-pointer duration-500 h-full overflow-hidden shadow-lg md:space-y-10  md:w-1/4 bg-white p-5 border-white drop-shadow-lg">
  

<FaBatteryFull className="w-full text-6xl"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">ENHANCE PROTECTION</div>
    <p class="text-gray-700 text-base text-justify text-sm">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum quis neque numquam aspernatur. Ipsum ut rerum labore.
    </p>
  </div>
  
</div>
        

<div class=" border-2 rounded md:h-full overflow-hidden shadow-lg  hover:scale-110 cursor-pointer duration-500 md:space-y-10 md:w-1/4 bg-white p-5 border-white drop-shadow-lg">
<FaLeaf  className=" w-full text-6xl"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">ENVIRONMENTAL RESPONSIBILITY</div>
    <p class="text-gray-700 text-base text-justify text-sm">
   Lorem ipsum dolor sit amet, consectetur adipisicing  elit. ipsum quis neque numquam aspernatur. Ipsum ut rerum labore.
    </p>
  </div>
 
</div>
<div class=" rounded  hover:scale-110 cursor-pointer duration-500 h-full overflow-hidden shadow-lg md:space-y-10 md:w-1/4 bg-white p-5 border-white drop-shadow-lg ">

 
  <GiWaterDrop className=" w-full text-6xl"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-justify">INCREASE EFFICIENCY</div>
    <p class="text-gray-700 text-base text-justify text-sm">
    Increase the product  dolor sit amet consectetur adipisicing elit. Adipisci, maiores?life and efficiency of your machines and equipments using our sustainable solutions.
    </p>
  </div>
  
</div>
        
        </div>
        
        
        </div>

        {/* mobile view  */}


        <div className=" z-10   bg-slate-100 p-1 md:hidden    ">
        
        <div className="flex  flex-col  w-full h-full  flex-wrap justify-center items-center gap-5   mb-20 cursor-pointer">
       
       
        <div className=" z-10  rounded h-full hover:scale-90 duration-500 m-5 overflow-hidden shadow-lg md:space-y-10  bg-white p-5 border-white drop-shadow-lg">
  

<FaBatteryFull className="w-full text-6xl"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">ENHANCE PROTECTION</div>
    <p className="text-gray-700 text-sm">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum quis neque numquam aspernatur. Ipsum ut rerum labore.
    </p>
  </div>
  
</div>
        

<div className=" border-2 rounded md:h-full hover:scale-90 duration-500 m-5 z-0 overflow-hidden shadow-lg md:space-y-10 md:w-1/4 bg-white p-5 border-white drop-shadow-lg">
<FaLeaf  className=" w-full text-6xl"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">ENVIRONMENTAL RESPONSIBILITY</div>
    <p className="text-gray-700 text-sm">
   Lorem ipsum dolor sit amet, consectetur adipisicing  elit. ipsum quis neque numquam aspernatur. Ipsum ut rerum labore.
    </p>
  </div>
 
</div>
<div className=" rounded  hover:scale-90 duration-500 m-5 z-0 h-full overflow-hidden shadow-lg md:space-y-10 md:w-1/4 bg-white p-5 border-white drop-shadow-lg ">

 
  <GiWaterDrop className=" w-full text-6xl "/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-justify">INCREASE EFFICIENCY</div>
    <p className="text-gray-700 text-sm text-justify">
    Increase the product  dolor sit amet consectetur adipisicing elit. Adipisci, maiores?life and efficiency of your machines and equipments using our sustainable solutions.
    </p>
  </div>
  
</div>
        
        </div>
        
        
        </div>
        
        
        </>
    )
}