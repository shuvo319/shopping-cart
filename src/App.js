import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import OrderReview from './components/Order-Review/OrderReview';
import InventoryManagement from './components/Inventory-Management/InventoryManagement';
import NotFound from './components/Not-Found/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/review" element={<OrderReview />} />
          <Route exact path="/inventory" element={<InventoryManagement />} />
          <Route exact path="product/:productId" element={<ProductDetails/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
