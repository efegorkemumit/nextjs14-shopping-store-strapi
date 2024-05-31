import { Category } from "@/constans/type"
import axios from "axios"


export const getToCart = async(userId:any, jwt:any)=>{
    const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/carts?filters[userId][$eq]=${userId}&[populate][products][populate][images][populate][0]=url`

    try {

        const response = await axios.get(Urls, {
            headers:{
                Authorization: 'Bearer ' + jwt
            }
        })
        
        const data = response.data.data;
        const cartItemList = data.map((item:any)=>({
            name:item?.attributes?.products?.data[0]?.attributes?.name,
            quantity: item?.attributes.quantity,
            amount: item.attributes.amount,
            id: item.id,
            color:item.attributes.color,
            size:item.attributes.size,
            product: item.attributes.products?.data[0]?.id,
            images: item.attributes.products?.data[0]?.attributes?.images?.data[0]?.attributes.url 


        }))
        return cartItemList;
        
    } catch (error) {

        console.log("error", error)
        throw error;
        
    }



}
