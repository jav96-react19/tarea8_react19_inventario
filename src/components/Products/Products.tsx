import { useStore } from "@/store/hooks/index.tsx";
import { Toaster } from "@/components/ui/sonner.tsx"
import { showToastMessage } from "@/utils/ToastMessage/showToastMessage";

const Products = () => 
{

    const products = useStore(state => state.products);
    const increaseQuantity = useStore(state => state.increaseQuantity);
    const decreaseQuantity = useStore(state => state.decreaseQuantity);
    const deleteStore = useStore(state => state.deleteStore);
    const deleteProduct = useStore(state => state.deleteProduct);

    return (
        <>
            {products.length === 0 ? 
                <h2 className="text-2xl font-semibold text-white mb-2">⚠️ No hay productos disponibles</h2>
                :
                <>
                    <div className="grid grid-cols-3 gap-4 tablet:grid-cols-2"> 
                    {
                        products.map((item, i) => {
                            showToastMessage(item);

                                return (
                                    <div key={i} className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                                        <div className="p-6 text-center">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.category}</h2>
                                                <p className="text-gray-600 mb-4 text-center">
                                                    {item.categorySpec}
                                                </p>
                                                <p className="text-2xl font-bold text-gray-900">{item.quantity}</p>
                                                <div className="flex justify-center space-x-2 mt-2">
                                                    {item.quantity > 1 &&
                                                        <button onClick={() => decreaseQuantity(i)} 
                                                            className="w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 font-bold">
                                                            -
                                                        </button>
                                                    } 
                                                    
                                                    <button onClick={() => increaseQuantity(i)} 
                                                        className="w-8 h-8 bg-green-500 text-white rounded-full hover:bg-green-600 font-bold">
                                                        <b>+</b>
                                                    </button>
                                                </div>
                                                <button onClick={() => deleteProduct(i)} className="mt-8 w-8 h-8 rounded-full bg-black text-white">
                                                    x
                                                </button>            
                                        </div>
                                    </div> 
                                )                           
                            }
                        )
                    }
                    </div>

                    {products.length > 1 &&
                        <button onClick={deleteStore} className="mt-8 block mx-auto w-8 h-8 bg-blue-400 text-white rounded-full hover:bg-blue-500 font-bold">
                            x
                        </button>
                    }
                </>
            }
            <Toaster />
        </>
    )
}
export default Products;