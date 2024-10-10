//UTILS
import {Button} from "@/utils/FormElements/FormElements";
//Context
import { useFormContext} from "react-hook-form"
//Custom Hook
import { useCategorySelected } from "@/hooks/CategorySelected/useCategorySelected.tsx";
//Components import
import {RadioButtonsSelector} from "@/components/Form/RadioButtonsSelector/RadioButtonsSelector.tsx";
import {CategorySelectedType} from "@/components/Category/CategorySelectedType.tsx"
//Import Store
import useStore from "@/store/useStore.tsx";
import {Product} from "@/store/types/storeTypes.tsx";


const FormView = () => 
{
    const {categorySelected, setCategorySelected} = useCategorySelected();
    const {handleSubmit, reset, formState: {isValid, errors}} = useFormContext();
    const errorsAmount = Object.keys(errors).length;
    const addProduct = useStore(state => state.addProduct);

    const onSubmit = (data: object) => {
        
        if(isValid)
        {
            //Convert form data to Product type
            const formData = data as Product;
            //Convert string quantity to number
            formData.quantity = Number(formData.quantity);
            //1) Add product
            addProduct(formData);
            //2) Delete form state
            reset();   
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Añadir producto</h2>

                <div className="mb-6">
                    <h3 className="font-medium text-sm mb-2">Categoría</h3>
                        <RadioButtonsSelector
                            items={["Ropa", "Alimentos", "Tecnología"]} 
                            setCategorySelected={setCategorySelected} 
                            name={"category"}/>
                </div>
                <div className="mb-6">
                    {categorySelected!=="" && 
                        <>
                            <h3 className="font-medium text-sm mb-2">Tipo de {categorySelected}</h3>
                            <CategorySelectedType categorySelected={categorySelected} />
                        </>
                    }
                </div>

                <div className="mb-2">
                    <h3 className="font-medium text-sm mb-2">Cantidad</h3>
                        <RadioButtonsSelector
                            items={["1", "2", "3", "4"]} 
                            name={"quantity"}/>
                </div>
                {errorsAmount > 0 && <p className="text-center text-red-500 text-sm mb-4">🔥 Todos los campos són obligatorios</p>}

                <Button type="submit" className="w-full">Enviar</Button>
            </form>
        </>       
    )
}
export default FormView;