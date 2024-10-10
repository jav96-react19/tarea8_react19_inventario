import {useState} from "react";

export const useCategorySelected = () => 
{
    const [categorySelected, setCategorySelected] = useState<string>("");
    return {categorySelected, setCategorySelected};
}