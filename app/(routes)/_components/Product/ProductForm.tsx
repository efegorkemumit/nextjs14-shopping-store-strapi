'use client'
import { Product } from '@/constans/type'
import { useProductFormStore } from '@/hooks/useForm';
import React, { useEffect } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import { Minus, PlusIcon } from 'lucide-react';
import Link from 'next/link';

interface ProductForm{
    product:Product;
    btnVisible?:boolean;
}
const ProductForm = ({product,btnVisible}:ProductForm) => {
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


    console.log("Quantity" + quantity);
    console.log("Size" + selectedSize);
    console.log("Color" + selectedColor);
    console.log("TotalPrice" + TotalPrice);

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
        <Button variant="destructive">
            Add To Cart
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