
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Sucess from './Pages/Sucess';
import Error from './Pages/Error';
import ProtectedRoute from './Componenct/ProtectedRoute';

function App() {
  return (
    <div >
<BrowserRouter>

<Routes>
  <Route path='/'  element={<Home/>}   />
  <Route  path='/Sucess'   element={<ProtectedRoute element={<Sucess/>}/>}  />
  <Route path='/*' element={<Error/>}/>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
