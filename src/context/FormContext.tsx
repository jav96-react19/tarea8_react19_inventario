import {ReactNode} from "react";
import {FormProvider, useForm} from "react-hook-form";

type FormContextProps = {
    /*As I want to pass componentes as children I will use ReactNode to define 
    react elements*/
    children: ReactNode
}
export const FormContext = ({children} : FormContextProps) => 
{
    const methods = useForm();
 
    return (
        <FormProvider {...methods} >
            {children}
        </FormProvider>
    );
}


