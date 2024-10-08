import { RadioButtonsSelector } from "@/components/Form/RadioButtonsSelector/RadioButtonsSelector.tsx";
export const CategorySelectedType = (props: {categorySelected: string}) => 
{
    const {categorySelected} = props;

    if(categorySelected === "Ropa") 
    {
        return (
            <RadioButtonsSelector 
                items={["Casual", "Deportiva", "Interior"]} 
                name={"categorySpec"}
            />
        )
    }
    else if(categorySelected === "Alimentos")
    {
        return (
            <RadioButtonsSelector
                items={["Fruta", "Verduras", "Pescado"]} 
                name={"categorySpec"}
            />
        )
    }
    else 
        return (
            <RadioButtonsSelector
                items={["PC", "Portátil", "Disco duro"]} 
                name={"categorySpec"}
            />
        )
}
