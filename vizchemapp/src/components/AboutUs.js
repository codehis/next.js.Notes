'use client'
import React from "react";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { PiLockSimpleOpenBold } from "react-icons/pi";
import bgimg from'@/app/Images/bgimg.jpg'
import Image from "next/image";
import Card from "./Card";
export default function AboutUs(){

    return(
        <>
        
        <div className=" hidden md:block w-full bg-[url('https://i.pinimg.com/736x/60/18/e5/6018e5f180a5bfa1ffb6c4176a5dbe48.jpg')] bg-no-repeat bg-cover bg-center ">
<div className=" w-full flex h-screen   p-5 items-center  justify-center  flex-wrap  ">
  <div className="w-1/2 flex justify-center">
  <Image src={bgimg} className="w-96  h-96 rounded-md  hover:scale-90 cursor-pointer duration-500" alt="aboutPicture "/>
  </div>

  <div className=" w-1/2 flex flex-col  items-center  ">
  <h1 className="font-bold text-3xl  " >We, at SHYNO VIZOL</h1>
  <p className="  text-sm p-5  text-justify  ">Welcome to Vizchem, a leader in chemical manufacturing and trading. Established in 2000 , we have built a strong reputation for delivering high-quality chemical products and exceptional customer service to clients across various industries. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque aliquid suscipit labore quas in quod? Eaque maiores veniam iste, excepturi eum reprehenderit sint dolor deserunt nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consequatur veniam velit quo, culpa, fugit amet porro odit nesciunt delectus necessitatibus? Possimus expedita assumenda quasi fugiat eum minima ratione perferendis odio vel aliquid vitae voluptatibus quis tenetur commodi et voluptas praesentium debitis, modi beatae accusantium quia quo ad laudantium! A facere, assumenda alias vitae commodi suscipit adipisci ut magnam minima sit perspiciatis cum quis et delectus ducimus, voluptatum consectetur magni sequi.</p>
  </div>
</div>

<h1 className="text-lg font-bold text-center mt-10">OUR CORE PURPOSE</h1>
<div className="  w-full flex justify-center  items-center p-4 flex-wrap space-y-10 space-x-11">




<div className="w-1/4  space-y-5 mt-10 rounded drop-shadow-2xl hover:scale-110 cursor-pointer duration-500  overflow-hidden shadow-lg bg-white p-5 border-white drop-shadow-lg" >
<MdOutlinePersonAddAlt1 className="text-center w-full text-6xl"/>
<h1 className="text-lg font-bold text-center ">CONSTANT INNOVATION AND LEARNING</h1>
<p className="text-justify text-sm">We are the technological leaders of our industry, known for inventing new technologies. We constantly learn, upgrade ourselves, our systems, knowledge, and our attitude to maintain a competitive edge.
</p>
</div>
<div className="w-1/4 space-y-5  rounded drop-shadow-2xl hover:scale-110 cursor-pointer duration-500  overflow-hidden shadow-lg bg-white p-5 border-white drop-shadow-lg">

<IoBookSharp className="text-center w-full text-6xl"/>
 
<h1 className="text-lg font-bold  text-center">
ADAPT TO CHANGE</h1>

<p className=" text-justify text-sm">We understand that ‘Change is Constant’ and we are open and flexible to embrace the changes happening in our environment. Adapting to that, we quickly reinforce it on our goals.</p>
</div>

<div className="w-1/4 space-y-5  rounded drop-shadow-2xl hover:scale-110 cursor-pointer duration-500  overflow-hidden shadow-lg bg-white p-5 border-white drop-shadow-lg">
<PiLockSimpleOpenBold className="text-center w-full text-6xl"/>
<h1 className="text-lg font-bold text-center">ORGANISATION BEFORE SELF</h1>
<p className="text-justify text-sm">All our thoughts and actions are committed towards the good of our organization. We are committed to our organization’s growth and prosperity before our self interests.
</p>
</div>


   
</div>




</div>
        
        
        {/* mobile view  */}


        <div className="w-full bg-[url('https://i.pinimg.com/736x/60/18/e5/6018e5f180a5bfa1ffb6c4176a5dbe48.jpg')] bg-no-repeat bg-cover bg-center md:hidden ">
<div className=" w-full flex flex-col gap-5   p-5 items-center  justify-center    ">
  <div className="w-full flex justify-center">
  <Image src={bgimg} className="w-full   rounded-md  hover:scale-90 cursor-pointer duration-500" alt="aboutPicture "/>
  </div>

  <div className=" w-full flex flex-col  items-center  ">
  <h1 className="font-bold text-3xl   " >We, at SHYNO VIZOL</h1>
  <p className="  text-sm p-5  text-justify  ">Welcome to Vizchem, a leader in chemical manufacturing and trading. Established in 2000 , we have built a strong reputation for delivering high-quality chemical products and exceptional customer service to clients across various industries. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque aliquid suscipit labore quas in quod? Eaque maiores veniam iste, excepturi eum reprehenderit sint dolor deserunt nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consequatur veniam velit quo, culpa, fugit amet porro odit nesciunt delectus necessitatibus? Possimus expedita assumenda quasi fugiat eum minima ratione perferendis odio vel aliquid vitae voluptatibus quis tenetur commodi et voluptas praesentium debitis, modi beatae accusantium quia quo ad laudantium! A facere, assumenda alias vitae commodi suscipit adipisci ut magnam minima sit perspiciatis cum quis et delectus ducimus, voluptatum consectetur magni sequi.</p>
  </div>
</div>

<h1 className="text-lg font-bold text-center mt-10">OUR CORE PURPOSE</h1>
<div className="  w-full flex flex-col justify-center gap-8   items-center p-4  ">




<div className="w-full   space-y-5 mt-10 rounded drop-shadow-2xl hover:scale-90 cursor-pointer duration-500  overflow-hidden shadow-lg bg-white p-5 border-white drop-shadow-lg" >
<MdOutlinePersonAddAlt1 className="text-center w-full text-6xl"/>
<h1 className="text-lg font-bold text-center ">CONSTANT INNOVATION AND LEARNING</h1>
<p className="text-justify text-sm">We are the technological leaders of our industry, known for inventing new technologies. We constantly learn, upgrade ourselves, our systems, knowledge, and our attitude to maintain a competitive edge.
</p>
</div>
<div className="w-full space-y-5  rounded drop-shadow-2xl hover:scale-90 cursor-pointer duration-500  overflow-hidden shadow-lg bg-white p-5 border-white drop-shadow-lg">

<IoBookSharp className="text-center w-full text-6xl"/>
 
<h1 className="text-lg font-bold  text-center">
ADAPT TO CHANGE</h1>

<p className=" text-justify text-sm">We understand that ‘Change is Constant’ and we are open and flexible to embrace the changes happening in our environment. Adapting to that, we quickly reinforce it on our goals.</p>
</div>

<div className="w-full space-y-5  rounded drop-shadow-2xl hover:scale-90 cursor-pointer duration-500  overflow-hidden shadow-lg bg-white p-5 border-white drop-shadow-lg">
<PiLockSimpleOpenBold className="text-center w-full text-6xl"/>
<h1 className="text-lg font-bold text-center">ORGANISATION BEFORE SELF</h1>
<p className="text-justify text-sm">All our thoughts and actions are committed towards the good of our organization. We are committed to our organization’s growth and prosperity before our self interests.
</p>
</div>


   
</div>




</div>
        
        </>
    )
}