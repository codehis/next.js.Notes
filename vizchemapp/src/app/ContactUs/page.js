'use client'
import React from "react";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
// import { useState } from "react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

// import Link from "next/link";
// import { redirect } from "next/dist/server/api-utils";
// import api from '@/app/api/contact'




export default function page(){
  // const [contactData,setContactData]=useState({
  //   name: '',
  //   email:'',
  //   subject:'',
  //   message:''
  // })

// const handleForm=(event)=>{
// const {name,value}=event.target;
// setContactData({...contactData,
//   [name]:value
// })
  // }

// const submitContactData=async(e)=>{
//   const {name,email,message,subject}=contactData
//     e.preventDefault()
//     try{
// const res=await fetch('/api/ContactUs',{
//   method:'POST',
//   body:JSON.stringify({
//     name,email,subject,message
//   }),
//   headers:{"content_Type":"application/json"}
// })


//     }
//     catch(e){
// console.log(e)
//     }
    
    
//   }


const onsubmit=async(e)=>{
  e.preventDefault()
setResult("Sending....");
const formData = new FormData(e.target);


formData.append("access_key", "7c59b137-37f4-4a7b-b5d2-d120f8bfa940");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
      toast.success("Message Sent Successfully")
    } else {
      console.log("Error", data);
      toast.error('Something is Wrong ')
      setResult(data.message);
    }
  };









return(

    <>
    <Navbar/>
    <Toaster/>
    <div className=" hidden md:w-full md:flex items-center justify-center mt-10 p-5 m-5 space-x-24 ">



        <div className=" w-1/4 flex flex-col space-y-16 ">
        
        <div className=" w-full flex space-x-10 justify-center items-center  ">
                   <div className="">
                    <FaPhoneAlt className="text-3xl "/>
                    </div>
                  <div className="">
                    <h1 className="text-lg font-bold">Phone</h1>
                    <h2>+91-7014095673</h2>
                  </div>
            </div>
            <div className="">
            <div className=" w-full flex space-x-10 justify-center items-center  ">
                   <div className="">
                    <FaMessage className="text-3xl "/>
                    </div>
                  <div className="">
                    <h1 className="text-lg font-bold">Email</h1>
                    <h2>info@vizchem.co.in</h2>
                  </div>
            </div>
            </div>
            <div className="">
            <div className=" w-full flex space-x-10 justify-center items-center  ">
                   <div className="">
                    <FaLocationPin className="text-3xl "/>
                    </div>
                  <div className="">
                    <h1 className="text-lg font-bold"> Office Adress</h1>
                    <h2>



Opp. UIT Police Chowki, Gaurav Path, Bhiwadi, Distt.- Alwar (Raj.)</h2>
                  </div>
            </div>
            </div>
        </div>
        <div className=" z-0 w-full space-y-10 bg-neutral-100 drop-shadow-xl p-2">
          <h1 className="text-center font-bold text-4xl">GET IN TOUCH <span className="text-gray-400"> WITH US</span></h1>

 <form action=""  onSubmit={onsubmit} className= " w-full flex-col flex flex-wrap  items-center justify-center ">
 <input type="hidden" name="access_key" value="7c59b137-37f4-4a7b-b5d2-d120f8bfa940"/>
<input type="text" name="name" id="" /*onChange={handleForm} value={contactData.name}*/  placeholder="Enter Name " className="p-1  border-2 border-black w-1/2 m-3  rounded" />
<input type="email" name="email" id="" /* onChange={handleForm} value={contactData.email}*/ placeholder="Enter Email" className="p-1  border-2 border-black w-1/2 m-3  rounded"/>
<input type="text" name="subject" id="" /*onChange={handleForm}  value={contactData.subject}*/ placeholder="Enter Subject" className="p-1  border-2 border-black w-1/2 m-3  rounded" />

<textarea name="message" id="" /* onChange={handleForm}  value={contactData.message} */ className="  border-2 border-black   rounded mt-3 h-16 w-1/2" placeholder="Write Message "></textarea>

  
 <button   className=" mt-10 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-1/4 h-10">
Send Email
  </button>

  
 
 </form>

        </div>
    </div>


{/* mobile view  */}

<div className=" w-full flex mt-5 flex-col items-center justify-center   gap-5  md:hidden">



        <div className="w-full gap-5   flex flex-col justify-center items-center  ">
        
        <div className=" w-full   flex space-x-10 justify-center items-center  ">
                
                    <FaPhoneAlt className="text-3xl w-1/2 "/>
                  
                  <div className="w-1/2">
                    <h1 className="text-2xl font-bold">Phone</h1>
                    <h2 className="text-lg">+91-7014095673</h2>
                  </div>
            </div>
            
            <div className=" w-full  flex space-x-10  justify-center items-center  ">
                 
                    <FaMessage className="text-3xl w-1/2 "/>
                   
                  <div className=" w-1/2">
                    <h1 className="text-lg font-bold">Email</h1>
                    <h2 className="text-lg">info@vizchem.co.in</h2>
                  </div>
            </div>
       
          
            <div className=" w-full  flex space-x-10 justify-center items-center  ">
                   
                    <FaLocationPin className="text-3xl w-1/2 "/>
                    
                  <div className=" w-1/2 ">
                    <h1 className="text-xl font-bold"> Office Adress</h1>
                    <h2 className="text-lg ">



Opp. UIT Police Chowki, Gaurav Path, Bhiwadi, Distt.- Alwar (Raj.)</h2>
                  </div>
            </div>
           
        </div>
        <div className=" w-full space-y-10 bg-neutral-100 drop-shadow-xl p-2">
          <h1 className="text-center font-bold text-4xl">GET IN TOUCH <span className="text-gray-400"> WITH US</span></h1>

 <form action=""  onSubmit={onsubmit} className= " w-full gap-5 flex-col flex flex-wrap  items-center justify-center ">
 <input type="hidden" name="access_key" value="7c59b137-37f4-4a7b-b5d2-d120f8bfa940"/>
<input type="text" name="name" id="" /*onChange={handleForm} value={contactData.name}*/  placeholder="Enter Name " className="p-1  border-2 border-black w-full  rounded" />
<input type="email" name="email" id="" /* onChange={handleForm} value={contactData.email}*/ placeholder="Enter Email" className="p-1  border-2 border-black w-full   rounded"/>
<input type="text" name="subject" id="" /*onChange={handleForm}  value={contactData.subject}*/ placeholder="Enter Subject" className="p-1  border-2 border-black w-full   rounded" />

<textarea name="message" id="" /* onChange={handleForm}  value={contactData.message} */ className="  border-2 border-black text-sm  rounded mt-3 h-16 w-full" placeholder="Write Message "></textarea>

  
 <button   className="  bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full h-10">
Send Email
  </button>

  
 
 </form>

        </div>
    </div>
    <Footer/>
    
    </>
)


}