import { useContext } from "react";
import { FormDataContext } from "../FormDataContext";

const OutPutPage = () => {
    const {formDataContext} = useContext(FormDataContext)
    return (  
        <div>
            <h2>Form Data:</h2>
      <ul>
        {Object.keys(formDataContext).map((key, index) => (
          <li key={index}>{key}: {formDataContext[key]}</li>
        ))}
      </ul>
      
        </div>
    );
}
 
export default OutPutPage;