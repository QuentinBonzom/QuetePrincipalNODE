dotenv.config();
import dotenv from "dotenv";
import cowsay from "cowsay";

const campus = process.env.CAMPUS
const name = process.env.NAME

console.log(
    cowsay.say({
        text: `Bonjour, je suis ${name} depuis le campus ${campus}`,
        e : "OO" , 
    T : "U " 
} ) ) ;
    
