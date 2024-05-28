import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const Search = () => {
  return (
    <div className='w-full xl:max-w-xl lg:max-w-lg lg:flex hidden relative'>
        <Input/>
        <Button variant="ghost" className='h-10 absolute right-0 top-0 text-lg'>
            <SearchIcon/>
        </Button>


    </div>
  )
}

export default Search