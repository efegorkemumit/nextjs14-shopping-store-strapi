import { Category } from "@/constans/type"
import axios from "axios"

const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/carts`

export const AddToCart = async(data:any, jwt:any)=>{

    try {

        const response = await axios.post(Urls, data, {
            headers:{
                Authorization: 'Bearer ' + jwt
            }
        })
        
        return response.data;
        
    } catch (error) {

        console.log("error", error)
        throw error;
        
    }



}
