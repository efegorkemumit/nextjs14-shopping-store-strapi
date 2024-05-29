'use client'
import { getProducts } from '@/actions/getProducts';
import React, { useEffect, useState } from 'react'
import HomeProductSkeleton from '../Skeleton/HomeProductSkeleton';
import ProductItem from './ProductItem';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import RecentSkeleton from '../Skeleton/RecentSkeleton';


const RecentProduct = () => {
    const [products,setProducts] = useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        const fetchProducts = async()=>{
          try {
            const products = await getProducts("/products?sort[0]=id:desc&filters[recent]=true&pagination[start]=0&pagination[limit]=8&populate=*");
            setProducts(products);
          } catch (error) {
            console.error('Failed to fetch products', error);
          }
          finally{
            setLoading(false);
          }
        }
      
        fetchProducts();
      },[])


  return (
   <>
   {loading ?(
    <RecentSkeleton/>

   ):(
    <div className='mt-10 container'>
            <h2 className='textone font-semibold text-2xl lg:text-3xl mb-8'>
                Recent Products
                
            </h2>

            <Carousel className="w-full mb-11">
      <CarouselContent className="-ml-1 w-full gap-4 lg:px-36 lg:-ml-36">
      {products.map((product, index)=>(
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <ProductItem
                    key={index}
                    product={product}
                    />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

              

    </div>


   )}
   
   </>
  )
}

export default RecentProduct