'use client'
import { Product } from '@/constans/type'
import { useProductFormStore } from '@/hooks/useForm';
import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import { Loader2Icon, Minus, PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { AddToCart } from '@/actions/cart/addToCart';
import { useToast } from '@/components/ui/use-toast';
import useCartStore from '@/hooks/useCartStore';
import { useRouter } from 'next/navigation';

interface ProductForm{
    product:Product;
    btnVisible?:boolean;
}
const ProductForm = ({product,btnVisible}:ProductForm) => {

    const [loading,setLoading]=useState(false);

    const fetchItems = useCartStore((state)=>state.fetchItems);
    const router = useRouter();

    const { toast } = useToast()

    const { decrementQuantity,incrementQuantity,quantity,
        reset,selectedColor,selectedSize,setColor,setSize } = useProductFormStore();

    useEffect(()=>{
            reset();
    },[product])

    const handleColorChange =(color)=>{
        setColor(color);
    }

    const handlesizeChange =(size)=>{
        setSize(size);
    }
    
    const TotalPrice = (quantity * product?.attributes?.sellingPrice).toFixed(2)

    let jwt="";
    let user="";
    let userId="";

    try {
        jwt = localStorage.getItem("jwt");
        user=localStorage.getItem("user");
        if(user){
            const userObj = JSON.parse(user);
            userId = userObj.id
        }
        
    } catch (error) {
        console.log("Error", error)
        
    }

    const onAddCart = async()=>{

        if(!userId && !jwt){
            router.push("/login")
        }

        if(!selectedColor || !selectedSize){
            toast({
                title: "Color and Size required ",
                variant:"destructive"
              })
              return;

        }
        try {
            setLoading(true);

            const data = {
                data:{
                    quantity:quantity,
                    amount: TotalPrice,
                    size:selectedSize,
                    color:selectedColor,
                    products:product.id,
                    users_permissions_user:userId,
                    userId:userId
                }      
            }

            await AddToCart(data, jwt)
            fetchItems(userId,jwt)
            toast({
                title: "Add to Cart ",
                variant:"success"
              })
            
        } catch (error) {
            console.log("error", error)
            
        }finally{
            setLoading(false)
        }


    }


  return (
    <>
    <div className='flex flex-row'>

        <Select onValueChange={handleColorChange}>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Color" />
        </SelectTrigger>
        <SelectContent>
            {product?.attributes?.colors?.data?.map((color)=>(
                    <SelectItem value={color?.attributes?.name}>{color?.attributes?.name} </SelectItem>

            ))}

        </SelectContent>
        </Select>


        <Select onValueChange={handlesizeChange}>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Size" />
        </SelectTrigger>
        <SelectContent>
            {product?.attributes?.sizes?.data?.map((size)=>(
                    <SelectItem value={size?.attributes?.name}>{size?.attributes?.name} </SelectItem>

            ))}

        </SelectContent>
        </Select>
        
      


    </div>

    <div  className='flex flex-row items-center gap-4 mt-8'>
            <Button size="xs" disabled={quantity===1} onClick={decrementQuantity}>
                <Minus/>
            </Button>
                <h2>{quantity}</h2>
            <Button  size="xs" onClick={incrementQuantity}>
                <PlusIcon/>
            </Button>
            ${TotalPrice}
       
    </div>

    <div className='flex flex-row gap-2 mt-8'>
        <Button onClick={onAddCart} variant="destructive">
          {loading ? <Loader2Icon className='animate-spin'/> : "Add To Cart"}  
        </Button>

    {btnVisible && 
        <Button asChild>
            <Link href={`product/${product?.attributes?.slug}`}>
            Detail
            </Link>


        </Button>
    }
    </div>

   

    </>
  )
}

export default ProductForm