import { useStore } from "@/store/hooks/index.tsx";

const Products = () => 
{
    const products = useStore(state => state.products);
    return (
        <>
         {products.length === 0 ? 
            <p>
                No hay productos en el inventario
            </p> 
            :
            products.map(item => {
                return <>
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>
                    <p>{item.category}</p>
                    <p>{item.description}</p>
                </>
            })
        }
        </>
    )
}
export default Products;