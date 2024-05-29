import { create } from 'zustand';

interface ProductFormState{
    quantity: number;
    selectedColor: string | null;
    selectedSize: string | null;
    incrementQuantity: () => void;
    decrementQuantity: () => void;
    setColor: (color: string) => void;
    setSize: (size: string) => void;
    reset: () => void;
}


export const useProductFormStore = create<ProductFormState>((set)=>({
    quantity:1,
    selectedColor:null,
    selectedSize:null,
    incrementQuantity:()=>set((state)=>({quantity: state.quantity +1})),
    decrementQuantity:()=>set((state)=>({quantity: Math.max(state.quantity -1, 1)})),
    setColor:(selectedColor) =>set(()=>({selectedColor})),
    setSize:(selectedSize) =>set(()=>({selectedSize})),
    reset:()=>set({quantity:1 , selectedColor:null, selectedSize:null}),

}))