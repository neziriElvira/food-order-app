import Cart from "./components/Header/Cart";
import Header from "./components/Header/Header";
import InfoCard from "./components/InfoCard/InfoCard";
import Meals from "./components/Meals/Meals";
import { MEALS } from "./components/Utils/states";


function App() {

  const mealsInfo = MEALS;

  return (
    <div className="App">
      <Cart />
      <Header />
      <InfoCard />
      <Meals mealsInfo={mealsInfo} />
    </div>
  );
}

export default App;
