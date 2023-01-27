
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Info } from './asset/info'
import { Login } from './asset/login';
import { Home } from './component/HomePage';
import { Forget } from './asset/forget';
import { Sign } from './asset/sign';

function App() {
  return (
    <div className="App">
<BrowserRouter>
  <Routes>
    <Route>
          <Route path="/sign" element={< Sign />}/>
          <Route path="/forget" element={< Forget />}/>
          <Route path="/info" element={< Info/>}/>
          <Route path='/login' element={< Login/>}/>
          <Route path='/' element={< Home/>}/>
    </Route>
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
