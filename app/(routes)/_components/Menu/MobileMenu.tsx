import { Category } from '@/constans/type'
import React from 'react'
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
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'

interface MobileMenuProps{
    categories: Category[];
}

const MobileMenu = ({categories}:MobileMenuProps) => {
  return (
    <Sheet>
  <SheetTrigger>
    <MenuIcon/>
  </SheetTrigger>
  <SheetContent className='bgone'>
    <div className='flex flex-col space-y-5 mt-8'>

   
    {categories.map((category)=>(
            <Link href={`/search?category=`+category.attributes.slug} key={category.id}>
            {category.attributes.name}
            
            </Link>
          ))}
    </div>
  </SheetContent>
</Sheet>
  )
}

export default MobileMenu