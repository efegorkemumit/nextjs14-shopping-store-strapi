'use client'
import { getProducts } from '@/actions/getProducts';
import React, { useEffect, useState } from 'react'
import ProductDetailSkeleton from '../../_components/Skeleton/ProductDetailSkeleton';
import ProductImages from '../../_components/Product/ProductImages';
import ProductForm from '../../_components/Product/ProductForm';

interface ProductDetailPageProps{
    params : {
        slug:string
    }
}

const ProductDetailPage = ({params}:ProductDetailPageProps) => {
    const [productDetail,setproductDetail] = useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        const fetchProducts = async()=>{
          try {
            const product = await getProducts(`/products?filters[slug][$eq]=${params.slug}&populate=*`);
            setproductDetail(product);
          } catch (error) {
            console.error('Failed to fetch products', error);
          }
          finally{
            setLoading(false);
          }
        }
      
        fetchProducts();
      },[])
  return (
    <>
    {loading ?(
        <ProductDetailSkeleton/>

    ):(
        <div className='mt-10 container'>
            {productDetail.map((product, index)=>(
                <div key={index} className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-8 container'>
                    <div><ProductImages images={product?.attributes?.images}/></div>
                    <div>
                    <div className='flex flex-col gap-3'>
          <h2 className='text-3xl font-semibold textone'>{product?.attributes?.name}</h2>
          <h2 className='text-lg font-semibold text-mycolor3 dark:text-mycolor5'>{product?.attributes?.category?.data?.attributes?.name}</h2>
          <p>{product?.attributes?.description}</p>

          <div className='flex gap-3'>
            {product?.attributes.sellingPrice &&
                <h2 className='font-bold text-mycolor3 text-3xl'>${product?.attributes?.sellingPrice}</h2>
            }
            <h2 className={product?.attributes?.sellingPrice && 'line-through text-gray-500'}>
                ${product?.attributes?.mrp}

            </h2>

           


        </div>
        <ProductForm
            product={product}
            btnVisible={false}
            />
        
        </div>

                    </div>

                </div>
            ))}
        </div>

    )}
   

    </>
  )
}

export default ProductDetailPage