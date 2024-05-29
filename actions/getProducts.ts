import { Product } from "@/constans/type";
import axios from "axios"


export const getProducts = async(url:string):Promise<Product[]>=>{
    const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL+url}`

    const res = await axios.get(Urls);
    const data = res.data.data;
    return data;

}
