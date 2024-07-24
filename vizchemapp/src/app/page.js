


import Navbar from "@/components/Navbar";
import Crowsal from "@/components/Crowsal"
import Card from "@/components/Card";
import whatsapp from'@/app/Images/whatsapp.png'
import Footer from "@/components/Footer";
import OurClients from "@/components/OurClients";
// import ProductCards from "@/components/ProductCards";
import { Toaster } from "react-hot-toast";
import AboutUs from "@/components/AboutUs";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
   
    <div className="" >
      <Toaster/>
   
   <Navbar/>
   <Crowsal/>
   <Card/>
  
<AboutUs/>
   <OurClients/>
   <Footer/>
   
   <div className=" fixed right-10 bottom-11 w-16 h-16 bg-white rounded-full">

<Link href='https://wa.me/9571360027?text=I m%20interested%20in%20your%20car%20for%20sale'>
<Image  className='w-full h-full bg-white rounded-full hover:scale-90 duration-500 ' src={whatsapp} alt="error"/>


</Link>
   </div>
   </div>
  
  );
}
