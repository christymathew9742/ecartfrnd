import logo from './logo.svg';
import './App.css';
import Header from './apps/components/Header/header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from './apps/views/Home/home';
import ProductDetails from './apps/views/ProductDetails/ProductDetails';
import { constantsText } from './apps/constant/constant';
import Footer from './apps/components/Footer/footer';
const {
  ROUTES: {
     Speakers,
     Sponsorship,
     Travel,
     FAQ,
     ContactUs,
  }
} = constantsText

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route>
          <Route path='/' element={<Home/>} />
          <Route path="/productdetails" element={<ProductDetails/>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
