import mongoose from "mongoose";

const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    }
    ,
    message:{
        type:String,
        required:true
    },

   
},
{

    timestamp:true
})

 const contactData=mongoose.model.contactData
 export default contactData;