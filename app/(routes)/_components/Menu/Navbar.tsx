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
import MobileMenu from './MobileMenu'

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


  
    let jwt = ""; 
    let user = '';
    let userId = '';

    try {
      jwt = localStorage.getItem("jwt") || "";
      user = localStorage.getItem('user') || '';
      if (user) {
        const userObj = JSON.parse(user);
        userId = userObj.id;
      }
    } catch (e) {
      console.error('Error:', e);
    }

  return (
    <>
    <header className='flex py-4 border-b borderone bgone'>
      <div className='container flex items-center justify-between mx-auto px-4'>
        <Logo/>
        <Search/>

        <div className='space-x-4 flex items-center'>
          <Cart jwt={jwt} userId={userId}/>
          <UserMenu/>
          <ModeToggle/>
          <div className='flex lg:hidden'>
            <MobileMenu categories={categories}/>
          </div>


        </div>

      </div>



    </header>
    <nav className='hidden border-b borderone bgone lg:flex py-4 justify-center'>
      <div className='hidden lg:flex gap-8'>
        {loading?(
          <NavSkeleton/>
        ):(
          categories.map((category)=>(
            <Link href={`/search?category=`+category.attributes.slug} key={category.id}>
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