'use client'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingBag } from 'lucide-react'
import useCartStore from '@/hooks/useCartStore'
import { useRouter } from 'next/navigation'

interface CartProps{
  jwt:string;
  userId:string;
}

const Cart = ({jwt,userId}:CartProps) => {

  const {items, fetchItems} = useCartStore();
  const [subtotal, setSubTotal] = useState(0);
  const router = useRouter();

  useEffect(()=>{
    fetchItems(userId,jwt)
  }, [fetchItems])

  useEffect(()=>{
    let total =0;
    items.forEach(element =>{
      total = total+element.amount
    });
    setSubTotal(total.toFixed(2))
  },[items])

  console.log(items);
  return (
    <Sheet>
  <SheetTrigger>
    <div className='relative cursor-pointer'>
        <span className='absolute
        bg-mycolor3 text-mycolor1 text-xs font-semibold
        -right-2 -top-1 w-5 h-5
        rounded-lg items-center justify-center text-center'>{items.length}</span>
        <ShoppingBag/>

    </div>
  </SheetTrigger>
  <SheetContent className='bgone'>
    <SheetHeader>
      <SheetTitle>Your Shopping Cart</SheetTitle>
      <SheetDescription>
         Here are the items currently in your cart.
      </SheetDescription>
        <div>
          {items.length ===0 ? (
            <p>Your cart is Empty</p>
          ):(
            <ul>
              {items.map((item)=>(
                <div>asd</div>
              ))}
            </ul>
          )}

          
        </div>

        <SheetClose asChild>
          <div className='absolute w-[90%] bottom-6 flex-col'>
            <h2 className='text-lg flex justify-between'>SubTotal <span>${subtotal}</span> </h2>


            <div>
            <Button disabled={items.length == 0} onClick={()=>router.push(jwt?"/checkout": "/login")}> Checkout </Button>
            </div>


          </div>

         



        </SheetClose>


    </SheetHeader>
  </SheetContent>
</Sheet>
  )
}

export default Cart