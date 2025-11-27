import { useState, useEffect } from 'react';
import MealItem from './MealItem';

export default function Meals() {
  const [availableMeals, setAvailableMeals] = useState([]);

  useEffect(() => {
    async function fetchAvailableMeals() {
      const response = await fetch('http://localhost:3000/meals');
      const mealsData = await response.json();

      setAvailableMeals(mealsData);
    }

    fetchAvailableMeals();
  }, []);

  return (
    <ul id="meals">
      {availableMeals.map(meal => <MealItem key={meal.id} item={meal} />)}
    </ul>
  );
}
