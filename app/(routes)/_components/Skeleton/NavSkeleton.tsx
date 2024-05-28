import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const NavSkeleton = () => {
  return (
    <div className='hidden lg:flex gap-8'>
   {Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} className="h-6 w-12 skecolor" />
          ))}
    </div>
  )
}

export default NavSkeleton