export type Product = {
    category: string,
    categorySpec: string,
    quantity: number,
}
export type Store = {
    products: Product[],
    updateProduct: (product: Product, index: number) => void,
    getProductByIndex: (by: number) => Product,
    addProduct: (by: Product) => void,
    increaseQuantity: (by: number) => void,
    decreaseQuantity: (by: number) => void,
    deleteProduct: (by: number) => void,
    deleteStore: () => void,
}