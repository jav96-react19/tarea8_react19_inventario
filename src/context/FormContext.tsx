import {FormProvider, useForm} from "react-hook-form";

export const FormContext = ({children}) => 
{
    const methods = useForm();
 
    return (
        <FormProvider {...methods} >
            {children}
        </FormProvider>
    );
}


