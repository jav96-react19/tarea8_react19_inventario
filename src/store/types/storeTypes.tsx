export type Product = {
    category: string,
    categorySpec: string,
    quantity: number,
}
export type Store = {
    products: Product[],
    addProduct: (by: Product) => void,
    deleteProduct: (by: object) => void,
    editProduct: (by: object) => void,
    deleteStore: () => void,
}