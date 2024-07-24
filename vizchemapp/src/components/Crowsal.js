'use client'
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import SliderOne from '@/app/Images/SliderOne.jpeg'
import SliderTwo from '@/app/Images/SliderTwo.jpg'
import SliderThree from '@/app/Images/SliderThree.jpeg'
import SliderFour from '@/app/Images/SliderFour.jpg'
import SliderFive from '@/app/Images/SliderTwo.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Crowsal(){
   
    return(

       

<>



<div className=" hidden md:block   md:w-full md:bg-[url('https://cdn.vectorstock.com/i/500p/33/41/modern-green-banner-background-graphic-design-vector-51583341.jpg')] md:bg-no-repeat bg-cover bg-center h-screen">
 



 
 <div className="     flex flex-col mt-20 items-center gap-5 ">
     <h1 className=" text-2xl md:text-4xl font-bold  text-zinc-600 ">
     We Are Top
     </h1>
 
 
     <h1 className=" text-4xl md:text-5xl font-bold text-zinc-600  ">Industrial Leader</h1>
     <p className="w-3/4  text-md text-zinc-900">Lorem ipsum dolor, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum error voluptate molestiae, dolorem est itaque debitis inventore aliquid consequuntur accusantium! sit amet consectetur adipisicing elit. Sit, qui! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, similique.</p>
 
 
 
     <button className="bg-green-500 p-3  text-white rounded-md hover:scale-110 duration-500 font-semibold">  Explore the Products</button>
 
 
 
 </div>
 
 </div>
  

   {/*mobile view   */}




   
{/* bg-[url('https://cdn.vectorstock.com/i/500p/33/41/modern-green-banner-background-graphic-design-vector-51583341.jpg')] bg-no-repeat bg-cover bg-center h-screen  */}
 <div className="  w-full md:hidden">
 



 
 <div className="  flex flex-col mt-20 items-center gap-4">
     <h1 className=" text-3xl">
     We Are Top
     </h1>
 
 
     <h1 className=" text-4xl font-bold ">Industrial Leader</h1>
     <p className="w-full m-5 p-3 text-md text-zinc-900 text-justify">Lorem ipsum dolor, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum error voluptate molestiae, dolorem est itaque debitis inventore aliquid consequuntur accusantium! sit amet consectetur adipisicing elit. Sit, qui! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, similique.</p>
 
 
 
     <button className="bg-green-500 p-3  text-white rounded-md hover:scale-110 duration-500 font-semibold">  Explore the Products</button>
 
 
 
 </div>
 
 </div>
  
 
</>




        
        
        
        
    )
}