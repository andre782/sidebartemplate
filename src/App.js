import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbr from "./component/Navbr"
import "./App.css"
import Home from "./pages/Home";
import Products from "./pages/Products"
import Repoerts from "./pages/Repoerts"


function App() {
  return (
    <>
    <Router>
      <Navbr/>
          <Routes>
            <Route>
              <Route path='/' exact Component={Home}/>
              <Route path='/products' Component={Products}/>
              <Route path='/reports' Component={Repoerts}/>
            </Route>
          </Routes>
    </Router>
    </>
  );
}

export default App;
