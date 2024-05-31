import { Category } from "@/constans/type"
import axios from "axios"


export const DeleteToCart = async(id:any, jwt:any)=>{

    const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/carts/${id}`

    try {

        const response = await axios.delete(Urls, {
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
