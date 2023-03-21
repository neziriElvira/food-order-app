import { useEffect, useState } from "react";
import { MEALS } from "../Utils/states";
import style from './Melas.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem";


const Meals = (props) => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [httpeError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://food-order-87b00-default-rtdb.firebaseio.com/meals.json');

            if (!response.ok) {
                throw new Error('Somethnig went wrong');
            }
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

            setMeals(loadedMeals);
            setIsLoading(false);
        }

        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, []);

    if (isLoading) {
        return (
            <section className={style.MealsIsLoading}>
                <p>Loading...</p>
            </section>
        )
    }

    const melasList = meals.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    if (httpeError) {
        return (
            <section className={style.MealsError}>
                <p>{httpeError}</p>
            </section>
        )
    }

    return (
        <section className={style.meals}>
            <Card>
                <ul>
                    {melasList}
                </ul>
            </Card>
        </section>
    );
}

export default Meals;