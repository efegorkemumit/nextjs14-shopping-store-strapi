import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const CategorySkeleton = () => {
  return (
    <div className='mt-10 container'>
        <h2 className='textone font-semibold text-2xl lg:text-3xl'>
            <Skeleton className='skecolor w-64 h-10'/>
            
        </h2>
        <div className='grid mt-8 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6
            xl:grid-cols-7 gap-4'>
                   {Array.from({ length: 7 }).map((_, index) => (
                <Skeleton key={index} className="h-32 w-full skecolor" />
          ))}
        
        </div>
    
    </div>
  )
}

export default CategorySkeleton