import './App.css';
import Photos from './Photos';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/photos" element={<Photos/>} />
    </Routes>
    </BrowserRouter> 
     );
}

export default App;
