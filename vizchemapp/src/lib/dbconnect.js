import mongoose from "mongoose";

const mongoDB_url="mongodb+srv://2003mdkareem:01REQkGv2MZG4ZmB@cluster0.9ej4rfe.mongodb.net/VizchemDatabase"

// "mongodb+srv://2003mdkareem:01REQkGv2MZG4ZmB@cluster0.9ej4rfe.mongodb.net/VizchemDatabase?retryWrites=true&w=majority&appName=Cluster0"


// first we check our link is valid or not
if(!mongoDB_url){
    throw new Error ("please check your database connection url")
}

// if global.mongoose is null or false  it assing a new object with two properties CONNECTION AND PROMISE
// it is aslo set global mongoose  to new object this oproach is used to avoiding create muntiple connection
// when dbfunciton call muntiple time  if connection is already  exist it return existinng connection insted of crrate new connection

// basically we use for create only one at time 
let cached=global.mongoose;

if(!cached){
    cached=global.mongoose={con:null, promise:null }
}
const dbconnect=async()=>{
    if(cached.conn);


}

// if a connection does exist, we check if a promise is alredy in a progresss;

if(!cached.promise){
    const opts={
        bufferCommands: false
    };

    cached.promise=mongoose.connect(mongoDB_url,opts).then((mongoose)=>{
        return mongoose
    })
}

try{
    cached.conn=await cached.promise;
}
catch(e){
    cached.promise=null;
    throw e
}



export default dbconnect;