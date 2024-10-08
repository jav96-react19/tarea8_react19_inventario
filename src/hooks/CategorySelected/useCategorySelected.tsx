import {useState} from "react";

export const useCategorySelected = () => 
{
    const [categorySelected, setCategorySelected] = useState<string>(undefined);
    return {categorySelected, setCategorySelected};
}