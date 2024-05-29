import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const ProductITemSkeleton = () => {
  return (
    <div className='group p-2 md:p-4 lg:p-6 flex flex-col items-center justify-center gap-4 border
    borderone bgone lg:h-[450px] rounded-xl hover:shadow-lg transition-all cursor-pointer duration-300'>
        <Skeleton className='w-full h-[300px] p-6 skecolor'/>

        <div className='flex flex-col gap-3'>
            <Skeleton className='w-36 h-5  skecolor'/>
            <Skeleton className='w-36 h-5  skecolor'/>

        </div>
        <div className='flex flex-row gap-3'>
            <Skeleton className='w-24 h-8  skecolor'/>
            <Skeleton className='w-24 h-8  skecolor'/>

        </div>


</div>
  )
}

export default ProductITemSkeleton