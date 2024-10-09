import {create} from "zustand";
import {devtools, persist} from "zustand/middleware"
import { Product, Store } from "./types/storeTypes.tsx";

const useStore = create<Store>()(
    devtools(
      persist(
        (set, get) => ({
            products: [],

            updateProduct: (Product, index) => {
                set(state => {
                  const products = [...state.products];
                  products[index] = Product;
                  return { ...state, products};
              });
            },

            getProductByIndex: (index: number) => 
            {
                const currentProducts = get().products;
                const currentProduct = {...currentProducts[index]}
                return currentProduct;
            },

            addProduct: (newProduct: Product) => {
                set(state => ({
                    products: [...state.products, newProduct]
                }))
            },
            increaseQuantity: (index: number) => {

                const productToUpdate = get().getProductByIndex(index);
                productToUpdate.quantity+=1;
                
                get().updateProduct(productToUpdate, index);  
            }
            ,
            decreaseQuantity: (index: number) => 
            {
                const productToUpdate = get().getProductByIndex(index);
                productToUpdate.quantity = productToUpdate.quantity > 1 ? productToUpdate.quantity -1 : 1

                get().updateProduct(productToUpdate, index);
              },

            deleteProduct: (index: number) => {
                const newProducts = get().products.filter((_, i) => i!==index);
                set({products: newProducts});
            },
            deleteStore: () => set(({products: []})),
          }),
        {
            name: "inventario-storage"
        },
      ),
    ),
  )


export default useStore;



