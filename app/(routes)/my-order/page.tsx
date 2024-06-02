'use client'

import useCartStore from '@/hooks/useCartStore';
import React, { useEffect, useState } from 'react'

const MyOrderPage = () => {

    const { items, fetchItems } = useCartStore()
    const [fetchTrigger, setFetchTrigger] = useState(false);

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


  return (
    <div>MyOrderPage</div>
  )
}

export default MyOrderPage