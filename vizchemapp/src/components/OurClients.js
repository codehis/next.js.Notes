import React from "react"
import Image from "next/image"
import SliderOne from '@/app/Images/SliderOne.jpeg'
import clientOne from '@/app/Images/18.png'
import clientTwo from '@/app/Images/21.png'
import clientThree from '@/app/Images/22.png'
import clientFour from '@/app/Images/27.png'
export default function OurClients(){

    return(

        <>
        <h1 className="text-2xl text-center bg-slate-100 p-4 font-bold mt-10">OUR CLIENTS</h1>
        <div className="  flex w-full bg-slate-100 p-4 overflow-hidden justify-center ">
            <div className="animate  flex  p-10 gap-10  w-full">

                <Image className="w-1/6 " src={clientOne} alt="img"/>
                <Image className="w-1/6" src={clientTwo} alt="img"/>
                <Image className="w-1/6" src={clientThree} alt="img"/>
                <Image className="w-1/6" src={clientFour} alt="img"/>
                <Image className="w-1/6 " src={clientOne} alt="img"/>
                <Image className="w-1/6" src={clientTwo} alt="img"/>
                <Image className="w-1/6" src={clientThree} alt="img"/>
                <Image className="w-1/6" src={clientFour} alt="img"/>
                

                
               
            </div>
           
           
        </div>
        
        </>
    )
}