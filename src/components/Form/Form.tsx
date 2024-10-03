import {Button, Label, RadioGroup, RadioGroupItem, Textarea} from 
    "@/utils/FormElements/FormElements";

const FormView = () => 
{
    //const addProduct = useStore(state => state.addProduct);

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Añadir producto</h2>

                <div className="mb-6">
                    <h3 className="font-medium text-sm">Categoria</h3>
                        <RadioGroup defaultValue="clothes" name="category">
                            <div className="flex items-center space-x-2 mt-2">
                                <RadioGroupItem value="clothes" id="clothes" />
                                <Label htmlFor="clothes">Ropa</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="food" id="food"/>
                                <Label htmlFor="food">Alimentos</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="tecnology" id="tecnology"/>
                                <Label htmlFor="tecnology">Tecnologia</Label>
                            </div>
                        </RadioGroup>
                </div>

                <div className="mb-6">
                    <h3 className="font-medium text-sm">Cantidad</h3>
                        <RadioGroup defaultValue="1">
                            <div className="flex items-center justify-between w-[298px] space-x-2 mt-2 tablet:w-full">
                                <RadioGroupItem value="1" id="one-item" />
                                <Label htmlFor="one-item">1</Label>
                                <RadioGroupItem value="2" id="two-items" />
                                <Label htmlFor="two-items">2</Label>
                                <RadioGroupItem value="3" id="three-items"/>
                                <Label htmlFor="three-items">3</Label>
                                <RadioGroupItem value="4" id="four-items"/>
                                <Label htmlFor="four-items">4</Label>
                            </div>
                        </RadioGroup>
                </div>
            
                <div className="mb-8">
                    <Label htmlFor="message">Descripción</Label>
                    <Textarea id="message" placeholder="Your message here..." required className="mt-2"/>
                </div>
                <Button type="submit" className="w-full">Enviar</Button>
            </form>
        </>       
    )
}
export default FormView;