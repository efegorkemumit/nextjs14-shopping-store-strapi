import { Category } from "@/constans/type"
import axios from "axios"


export const getToorder = async(userId:any, jwt:any)=>{
    const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/orders?filters[userId][$eq]=${userId}&populate[OrderItemList][populate][product][populate][images]=url`;

    try {

        const response = await axios.get(Urls, {
            headers:{
                Authorization: 'Bearer ' + jwt
            }
        })
        
        const data = response.data.data;
        const orderList = data.map((item:any)=>({
            id:item.id,
            subtotal:item.attributes.subtotal,
            paymentText:item.attributes.paymentText,
            orderItemList:item.attributes.OrderItemList,
            createdAt:item.attributes.createdAt,

        }))
        return orderList;
        
    } catch (error) {

        console.log("error", error)
        throw error;
        
    }



}
