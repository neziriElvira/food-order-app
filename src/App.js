import { useState } from "react";
import Cart from "./components/Header/Cart";
import Header from "./components/Header/Header";
import InfoCard from "./components/InfoCard/InfoCard";
import Meals from "./components/Meals/Meals";
import { MEALS } from "./components/Utils/states";


function App() {

  const mealsInfo = MEALS;

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <div className="App">
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <InfoCard />
      <Meals mealsInfo={mealsInfo} />
    </div>
  );
}

export default App;
