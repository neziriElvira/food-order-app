import { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import InfoCard from "./components/InfoCard/InfoCard";
import Meals from "./components/Meals/Meals";
import CartProvider from "./components/Utils/CartProvider";
// import { MEALS } from "./components/Utils/states";


function App() {

  //  const [mealsInfo] = MEALS;
  const [mealsInfo, setMealsInfo] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://food-order-87b00-default-rtdb.firebaseio.com/meals.json');
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }

      setMealsInfo(loadedMeals);
    }

    fetchMeals();
  }, []);

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
