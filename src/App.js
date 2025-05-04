import {BrowserRouter as Router, Route, Routes} from "react-router";
import './App.css';
import { Header } from './layout/header';
import { Footer } from './layout/footer';
import { Shop } from './layout/Shop';
import  ProductPage   from './layout/ProductPage';

function App() {
  return (
    <Router>
      <Header/>
      {/* <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="products/:productId" element={<ProductPage/>}/>
        
      </Routes> */}
      <Shop/>
      <Footer/>
    </Router>
  );
}

export default App;
