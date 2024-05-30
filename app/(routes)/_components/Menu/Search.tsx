'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Search = () => {

  const router = useRouter();
  const [query, setQuery]= useState('')

  const handleInputchange = (event)=>{
    setQuery(event.target.value)
  }
  const handleSearch =()=>{
    if(query.trim()){
      router.push(`/search?q=${query}`)
    }
  }
  return (
    <div className='w-full xl:max-w-xl lg:max-w-lg lg:flex hidden relative'>
        <Input onChange={handleInputchange}/>
        <Button onClick={handleSearch} variant="ghost" className='h-10 absolute right-0 top-0 text-lg'>
            <SearchIcon/>
        </Button>


    </div>
  )
}

export default Search