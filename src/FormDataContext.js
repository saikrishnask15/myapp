import { createContext, useState } from "react";

const FormDataContext = createContext();
const FormDataProvider = ({ children }) => {
   const [formDataContext,setFormDataContext]= useState({});
    return ( 
         <FormDataContext.Provider value={{ formDataContext, setFormDataContext}}>
            {children}
         </FormDataContext.Provider>
     );
}
 
export { FormDataContext, FormDataProvider };