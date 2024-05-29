import { Product } from '@/constans/type';
import React from 'react'
import ProductImages from './ProductImages';
import ProductForm from './ProductForm';

interface ProductModalProps{
    product:Product;
}

const ProductModal = ({product}:ProductModalProps) => {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 p-7 bgone gap-5'>
        <ProductImages images={product?.attributes?.images}/>
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
            btnVisible={true}
            />
        
        </div>

      </div>
       
    </div>
  )
}

export default ProductModal