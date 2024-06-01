"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import useCartStore from '@/hooks/useCartStore'
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

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    phone: z.string().min(2, { message: "Phone must be at least 2 characters." }),
    address: z.string().min(2, { message: "Address must be at least 2 characters." }),
    holdername: z.string().min(2, { message: "Holder Name must be at least 2 characters." }),
    ccnumber: z.string().regex(/^\d{16}$/, { message: "Credit Number must be 16 digits." }),
    month: z.preprocess((val) => Number(val), z.number().min(1, { message: "Month is required." }).max(12, { message: "Month must be between 1 and 12." })),
    year: z.preprocess((val) => Number(val), z.number().min(new Date().getFullYear(), { message: "Year must be the current year or later." })),
    cvc: z.string().regex(/^\d{3,4}$/, { message: "CVC must be 3 or 4 digits." })
  })

const Checkoutform = () => {
    const { items } = useCartStore()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "Efe Görkem",
          phone: "+90 555 222 11 22",
          address: "ıstanbul Turkey",
          holdername: "Gorkem ",
          ccnumber: "5890040000000016",
          month: "04",
          year: "2029",
          cvc: "159"
        }
      })

    const onSubmit = (data) => {
        console.log(data)
    }


  return (
    <div className='p-8'>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

        <h2 className='border-b borderone text-2xl'>Address</h2>
        <div className='flex flex-row gap-4'>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel className='textone'>Name</FormLabel>
              <FormControl>
                <Input placeholder="John doe" {...field} />
              </FormControl>
              <FormMessage  className='validationLogin'/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem  className='w-full'>
              <FormLabel className='textone'>Phone</FormLabel>
              <FormControl >
                <Input placeholder="+90 555 222 111" {...field} />
              </FormControl>
              <FormMessage className='validationLogin'/>
            </FormItem>
          )}
        />

        </div>

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem  className='w-full'>
              <FormLabel className='textone'>Address</FormLabel>
              <FormControl >
                <Input placeholder="city street" {...field} />
              </FormControl>
              <FormMessage className='validationLogin'/>
            </FormItem>
          )}
        />

        <div className='h-8'></div>
            <h2 className='border-b borderone text-2xl'>Cart Information</h2>

            <div className='flex flex-row gap-4'>
                    <FormField
                    control={form.control}
                    name="holdername"
                    render={({ field }) => (
                        <FormItem className='w-full'>
                        <FormLabel className='textone'>Holder Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Holder Name" {...field} />
                        </FormControl>
                        <FormMessage className='validationLogin' />
                        </FormItem>
                    )}
                    />

            <FormField
              control={form.control}
              name="ccnumber"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='textone'>Credit Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Credit Number" {...field} />
                  </FormControl>
                  <FormMessage className='validationLogin' />
                </FormItem>
              )}
            />



            </div>

            <div className='flex flex-row gap-4'>

            <FormField
              control={form.control}
              name="month"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='textone'>Month</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Month" {...field} />
                  </FormControl>
                  <FormMessage className='validationLogin' />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='textone'>Year</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Year" {...field} />
                  </FormControl>
                  <FormMessage className='validationLogin' />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cvc"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='textone'>CVC</FormLabel>
                  <FormControl>
                    <Input placeholder="CVC" {...field} />
                  </FormControl>
                  <FormMessage className='validationLogin' />
                </FormItem>
              )}
            />



            </div>


        <Button type="submit">Submit</Button>
      </form>
    </Form>


    </div>
  )
}

export default Checkoutform