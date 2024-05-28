'use client'
import Logo from '@/components/Logo'
import React, { useEffect, useState } from 'react'
import Search from './Search'
import Cart from './Cart'
import UserMenu from './UserMenu'
import { getCategories } from '@/actions/getCategories'
import { ModeToggle } from '@/components/ModeToggle'
import Link from 'next/link'
import NavSkeleton from '../Skeleton/NavSkeleton'

const Navbar = () => {

  const [categories,setCategories] = useState([]);
  const [loading, setLoading]= useState(true);

  useEffect(()=>{
    const fetchCategories = async()=>{
      try {
        const categories = await getCategories();
        setCategories(categories);
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
      finally{
        setLoading(false);
      }
    }
  
    fetchCategories();
  },[])
  return (
    <>
    <header className='flex py-4 border-b borderone bgone'>
      <div className='container flex items-center justify-between mx-auto px-4'>
        <Logo/>
        <Search/>

        <div className='space-x-4 flex items-center'>
          <Cart/>
          <UserMenu/>
          <ModeToggle/>


        </div>

      </div>



    </header>
    <nav className='hidden border-b borderone bgone lg:flex py-4 justify-center'>
      <div className='hidden lg:flex gap-8'>
        {loading?(
          <NavSkeleton/>
        ):(
          categories.map((category)=>(
            <Link href={`/category/`+category.attributes.slug} key={category.id}>
              {category.attributes.name}
            
            </Link>
          ))


        )}

      </div>
    </nav>

    </>
  )
}

export default Navbar