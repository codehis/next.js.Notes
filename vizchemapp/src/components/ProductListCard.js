'use client'

import React from "react"
import ProductList from '@/components/ProductList'
export default function ProductListCard({id}){


    return(


<>

<h1 className=" font-bold  text-lg hover:scale-110 duration-500 hover:text-slate-500">{id}</h1>

     <ul className="p-5  space-y-2 text-sm  font-light text-slate-400 h-full">

<ProductList/>

     </ul>
     


</>

    )
}