'use client'

import { getToorder } from '@/actions/cart/getToOrder';
import useCartStore from '@/hooks/useCartStore';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import moment from 'moment';
import { ArrowDown10, ArrowDownIcon, ArrowUp } from 'lucide-react';
import MyorderItem from '../_components/MyOrderItem';


const MyOrderPage = () => {

    const { items, fetchItems } = useCartStore()
    const [fetchTrigger, setFetchTrigger] = useState(false);
    const [orderList,setOrderList]=useState([]);
    const router = useRouter();

    let jwt = ""; 
    let user = '';
    let userId = '';
    
    try {
        if(typeof window !="undefined"){
        jwt = localStorage.getItem("jwt") || "";
        user = localStorage.getItem('user') || '';
        if (user) {
          const userObj = JSON.parse(user);
          userId = userObj.id;
        }
      }
      } catch (e) {
        console.error('Error:', e);
      }

      useEffect(() => {
        fetchItems(userId, jwt);
    }, [userId, jwt, fetchItems, fetchTrigger]);

    const getMyorder = async()=>{
      const orderList_ = await getToorder(userId, jwt)
      console.log(orderList_)
      setOrderList(orderList_)
    }


    useEffect(()=>{
      if(!jwt){
        router.push('/')
      };
      getMyorder();
    },[])


  return (
    <div>
      <h2 className='p-3 bg-mycolor3 text-white font-bold text-4xl text-center'> My Order</h2>

      <div className='py-8 mx-7'>
        <h2 className='text-2xl textone font-bold'>Order History</h2>

        <div className='mt-10'>
          {orderList.map((item, index)=>(
            <Collapsible key={index}>
            <CollapsibleTrigger className='grid grid-cols-7 mt-3 items-center border borderone p-2 bgone gap-8'>
              <h2> <span className='font-bol mr-2'>Order Date :</span> {moment(item?.createdAt).format('DD/MMM/yyy')} </h2>
              <h2> <span className='font-bol mr-2'>Total :</span> {item?.subtotal} </h2>
              <h2> <span className='font-bol mr-2'>Status :</span>  Pending </h2>
              <h2> <span className='font-bol mr-2'>Payment :</span> {item?.paymentText} </h2>
              <h2 className='col-span-2'> <span className='font-bold mr-2'> <ArrowDownIcon className='ml-auto'/> </span></h2>

              </CollapsibleTrigger>
            <CollapsibleContent>
            {item.orderItemList && item.orderItemList.map((order,index_)=>(
              <MyorderItem key={index_} orderItem={order}/>
            ))}
             


            </CollapsibleContent>
          </Collapsible>

          ))}


        </div>


      </div>


    </div>
  )
}

export default MyOrderPage