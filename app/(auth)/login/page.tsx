"use client"
import React from 'react'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import Link from 'next/link'


const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
})

const LoginPage = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:""
    },
  })

  const onSubmit=()=>{

  }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-4/5">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className='textone'>Email</FormLabel>
            <FormControl>
              <Input placeholder="email[]gmail.com" {...field} />
            </FormControl>
            <FormMessage className='validationLogin' />
          </FormItem>
        )}
      />

    <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel className='textone'>Password</FormLabel>
            <FormControl>
              <Input placeholder="Password" type="password" {...field} />
            </FormControl>
            <FormMessage className='validationLogin' />
          </FormItem>
        )}
      />

      <Button className='w-full' type="submit">Submit</Button>
    </form>
    <div className='mt-8 '>
      <Label className='flex flex-col items-center'>
        Dont have an account
   
        <Link href="/create-user" 
        className='text-mycolor3 font-semibold mt-5'>
        Click here to create a new account
        </Link>

      </Label>


    </div>
  </Form>
  )
}

export default LoginPage