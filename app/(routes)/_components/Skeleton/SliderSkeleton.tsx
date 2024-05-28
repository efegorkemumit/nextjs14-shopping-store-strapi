import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SliderSkeleton = () => {
  return (
    <div className='w-full h-[200px] md:h-[450px] object-cover'>
        <Skeleton className='h-full skecolor'/>
    
    </div>
  )
}

export default SliderSkeleton