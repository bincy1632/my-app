import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import Starred from './Pages/Starred';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>   
        <Route path="/starred" element={<Starred />}/>
        <Route path="*" element={<div>No Page Found</div>}/>
     
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
