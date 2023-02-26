
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import Header from './common/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';

import Shop from './Components/Shop';
import ShopDetail from './Components/ShopDetelis';
import Footer from './common/Footer'
import ShoppingCard from './Components/ShoppingCard/Index';
import SData from './Components/Shop/SData'
import Account from './Components/auth/Account'
import Singup from './Components/auth/Singup';
import Login from './Components/auth/Login';


function App() {

  const { productsItem } = SData;

  const [carditem, setCarditem] = useState([])

  //   productId: number,
  //             name :"",
  //             dese:"",
  //             image:"img",
  //             price : number,
  //             discprice: number,
  //             cat:"" 
  // }
  const [islogin, setIslogin] = useState(false);


  const addToCard = (product) => {
    const productExit = carditem.find((item) => item.id === product.productId)

    if (productExit) {
      setCarditem(carditem.map((item) => (item.id === product.productId ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCarditem([...carditem, {
        ...product,
        id: product.productId,
        name: product.name,
        image: product.image,
        price: product.price,
        qty: 1
      }])
    }
    console.log(carditem)
  }

  const decreaseQty = (product) => {
    const productExit = carditem.find((item) => item.id === product.productId)
    console.log(productExit)

    if (productExit.qty === 1) {
      setCarditem(carditem.filter((item) => item.id !== product.productId))
    } else {
      setCarditem(carditem.map((item) => (item.id === product.productId ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }

  }

  return (
    <CartProvider>

      <BrowserRouter>
        {/* <Headert /> */}
        <Header carditem={carditem} />

        <Routes>
          <Route path='/' element={<Home carditem={carditem} addToCard={addToCard} />}></Route>
          <Route path='/shop' element={<Shop productsItem={productsItem} addToCard={addToCard} />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/detail' element={<ShopDetail />}></Route>
          <Route path='/card' element={islogin ? <ShoppingCard addToCard={addToCard} decreaseQty={decreaseQty} carditem={carditem} /> : <Login islogin={islogin} setIslogin={setIslogin} />}></Route>
          <Route path='/checkout' element={<ShopDetail />}></Route>
          <Route path='/account' element={<Account islogin={islogin} setIslogin={setIslogin} />}></Route>
          <Route path='/singup' element={<Singup />}></Route>
          <Route path='/login' element={<Login islogin={islogin} setIslogin={setIslogin} />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </CartProvider>

  );
}

export default App;
