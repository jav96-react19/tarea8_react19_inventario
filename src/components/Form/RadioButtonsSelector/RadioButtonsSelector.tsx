import {Label, Input} from "@/utils/FormElements/FormElements";
import { getCategorySelected } from "@/utils/CategorySelected/getCategorySelected";

import { useFormContext } from 'react-hook-form';

type Selector = {
    items: string[],
    /*show category specifications when values are clothes, tecnology, or food.
    Othewise would be optional parameter with --> ?*/ 
    setCategorySelected?: (value: string) => void,
    name: string,
}

export const RadioButtonsSelector = (props: Selector) => 
{
    const {items, setCategorySelected, name} = props;
    // Handle click event for category selection", 
    // If provided, will be called with selected category value when user clicks on a category option.
    const handleCategoryClick = name === "category" ? { onClick: (e: React.MouseEvent<HTMLInputElement>) => getCategorySelected(e, setCategorySelected ?? (() => {})) } : {};
    const {register} = useFormContext();

    return (    
        <>
            {
                items.map((item, index) => {
                    return (
                        <div key={index}>
                                <Input type="radio" value={item} id={item} className="absolute h-4 w-4 cursor-pointer mt-0.5"
                                    /*Only Add click event handler for category selection to show specifications*/
                                    {...handleCategoryClick}
                                    /*Every field is mandatory*/
                                    {...register(name, {
                                        required: true
                                    })}/>
                            <Label htmlFor={item} className="flex items-center pb-2 text-sm cursor-pointer pl-8">{item}</Label>
                        </div>
                    );
                })
            }
        </>
    )
}