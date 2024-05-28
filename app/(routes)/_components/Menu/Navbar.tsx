import Logo from '@/components/Logo'
import React from 'react'
import Search from './Search'
import Cart from './Cart'
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
    <header className='flex py-4 border-b borderone bgone'>
      <div className='container flex items-center justify-between mx-auto px-4'>
        <Logo/>
        <Search/>

        <div className='space-x-4 flex items-center'>
          <Cart/>
          <UserMenu/>


        </div>

      </div>



    </header>
  )
}

export default Navbar