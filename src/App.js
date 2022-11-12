
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cart } from './Components/Cart';
import { Home } from './Components/Home';
import { ProductPage } from './Components/ProductPage';
import { reduxStore } from './Reducers/Store';
export const store = reduxStore;
function App() {  
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/productPage" element={<ProductPage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
