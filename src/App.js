import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import InfoCard from "./components/InfoCard/InfoCard";
import Meals from "./components/Meals/Meals";
import CartProvider from "./components/Utils/CartProvider";
import { MEALS } from "./components/Utils/states";


function App() {

  const [mealsInfo] = MEALS;

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <InfoCard />
      <Meals mealsInfo={mealsInfo} />
    </CartProvider>
  );
}

export default App;
