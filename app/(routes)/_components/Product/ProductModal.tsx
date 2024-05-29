import { Product } from '@/constans/type';
import React from 'react'

interface ProductModalProps{
    product:Product;
}

const ProductModal = ({product}:ProductModalProps) => {
  return (
    <div>
        {product?.id}
    </div>
  )
}

export default ProductModal