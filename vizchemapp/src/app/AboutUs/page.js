'use client'
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { PiLockSimpleOpenBold } from "react-icons/pi";
import bgimg from'@/app/Images/bgimg.jpg'
import Image from "next/image";
import Card from "@/components/Card";
import AboutUs from "@/components/AboutUs";


export default function page(){

    return(

        <>
        <Navbar/>
        <Card />
<AboutUs/>




        <Footer/>

       
        
        </>
    )
}