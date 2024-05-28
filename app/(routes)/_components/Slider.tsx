'use client'
import { getSliders } from '@/actions/getSliders';
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"
import Link from 'next/link';
import Image from 'next/image';
import SliderSkeleton from './Skeleton/SliderSkeleton';


const Slider = () => {

  const [sliders,setSliders] = useState([]);
  const [loading, setLoading]= useState(true);

  useEffect(()=>{
    const fetchsliders = async()=>{
      try {
        const sliders = await getSliders();
        setSliders(sliders);
      } catch (error) {
        console.error('Failed to fetch sliders', error);
      }
      finally{
        setLoading(false);
      }
    }
  
    fetchsliders();
  },[])
  return (
    <div>
  {loading?(
          <SliderSkeleton/>
        ):(
        <Carousel
        opts={{
            align: "start",
            loop: true,
          }}

          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
        <CarouselContent>
            {sliders.map((slider)=>(
            <CarouselItem>
                <Link href={slider.attributes.url} key={slider.id}>
                    <Image
                    alt='slider'
                    unoptimized={true}
                    src={
                        process.env.NEXT_PUBLIC_BACKEND_URL+
                        slider?.attributes?.media?.data?.attributes?.url
                    }
                    width={500}
                    height={300}
                    className='w-full h-[200px] md:h-[450px] object-cover'
                    
                    />
                
                </Link>


            </CarouselItem>

            ))}
         
        </CarouselContent>
        <CarouselPrevious className='left-0' />
        <CarouselNext  className='right-0' />
        </Carousel>

    )}

    </div>
  )
}

export default Slider