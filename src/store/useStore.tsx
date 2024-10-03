import {create} from "zustand";

type Product = {
    quantity: number,
    category: {
        type: string,
        specification: string,
    },
    description: string,   
}

type Store = {
    products: Product[],
    addProduct: (by: object) => void,
    deleteProduct: (by: object) => void,
    editProduct: (by: object) => void,
    deleteStore: () => void,
}

const useStore = create<Store>((set) => ({
        products: [],
        addProduct: (newProduct: Product) => {
            set(state => ({
                products: [...state.products, newProduct]
            }))
        },
        deleteProduct: () => {
            

        },
        editProduct: () => {

        },
        deleteStore: () => {

        },
    }
))
export default useStore;



