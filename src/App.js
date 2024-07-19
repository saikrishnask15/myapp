
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { FormDataProvider } from './FormDataContext';
import './App.css';
import Registration from './components/Registration';
import OutPutPage from './components/OutPutPage';
const App=()=>{
    return(
       <FormDataProvider>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Registration/>}/>
            <Route path="OutPutPage" element={<OutPutPage />} />
        </Routes>
        </BrowserRouter>
        </FormDataProvider>
    )
    
    
}

export default App;
