import { getToCart } from '@/actions/cart/getToCart';
import { create } from 'zustand';


const useCartStore = create((set)=>({
   items:[],
   fetchItems:async(userId:any, jwt:any)=>{
         const data = await getToCart(userId, jwt);
         set({items:data})
   },
}))

export default useCartStore