import './App.css';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home"
import Cart from './pages/Cart';
import store from './store/store';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
