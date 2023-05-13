import {Route, Routes, Link} from "react-router-dom"
import MyButton from './pages/Mybutton';
import HedyImage from './pages/Hedyimage';
import ShoppingList from './pages/ShoppingList';
import CountButton from './pages/CountButton';
import TogetherButton from './pages/TogetherButton';
import Home from "./pages/Home";
import QuickStartMain from "./pages/QuickStartMain";


function App() {
  
  return (
    <div className="App">
      <nav>
        <Link to="/">HOME</Link> | {" "}
        <Link to="/quickStartMain">QuickStartMain</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quickStartMain" element={<QuickStartMain/>}/>
      </Routes>
      {/* <MyButton/>
      <HedyImage/>
      <ShoppingList/>
      <CountButton/>
      <TogetherButton/> */}
    </div>
  );
}

export default App;
