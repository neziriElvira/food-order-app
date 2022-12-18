import Header from "./components/Header/Header";
import InfoCard from "./components/InfoCard/InfoCard";
import Meals from "./components/Meals/Meals";
import { MEALS } from "./components/Utils/states";


function App() {

  const mealsInfo = MEALS;

  return (
    <div className="App">
      <Header />
      <InfoCard />
      <Meals mealsInfo={mealsInfo} />
    </div>
  );
}

export default App;
