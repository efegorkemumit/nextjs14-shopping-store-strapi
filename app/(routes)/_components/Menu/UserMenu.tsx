'use client'

import useAuthStore from '@/hooks/useAuth'
import React, { useEffect } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { User, UserCircleIcon } from 'lucide-react'
import Link from 'next/link'


const UserMenu = () => {

    const {jwt, setJwt} =useAuthStore();
    useEffect(()=>{
        if(typeof window !="undefined"){
            const jwt = localStorage.getItem("jwt");
            const user = localStorage.getItem("user");
            if(jwt && user){
                const userObj = JSON.parse(user);
                setJwt(jwt)
            }
        }
    },[])

    const onSignout = ()=>{

        if(typeof window !="undefined"){
            localStorage.removeItem("jwt");
            localStorage.removeItem("user");
            setJwt("");
        }
    }
  return (
    <>
    {jwt ? (
        <DropdownMenu>
  <DropdownMenuTrigger>
    <UserCircleIcon className='h-6 w-6'/>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <Link href="/my-order">
    <DropdownMenuItem>My Order</DropdownMenuItem>
    </Link>
    <DropdownMenuItem onClick={onSignout}>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    ):(
        <Link href="/login">
        <User/>
        </Link>
    )}

</>
  )
}

export default UserMenu