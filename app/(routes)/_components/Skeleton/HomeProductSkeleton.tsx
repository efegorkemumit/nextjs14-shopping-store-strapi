import React from 'react'
import ProductITemSkeleton from './ProductItemskeleton'
import { Skeleton } from '@/components/ui/skeleton'

const HomeProductSkeleton = () => {
  return (
    <div className='mt-10 container'>
    <h2 className='textone font-semibold text-2xl lg:text-3xl'>
        <Skeleton className='skecolor w-64 h-10'/>
        
    </h2>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 mb-8'>
               {Array.from({ length: 7 }).map((_, index) => (
           <ProductITemSkeleton key={index}/>
      ))}
    
    </div>

</div>
  )
}

export default HomeProductSkeleton