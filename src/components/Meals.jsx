import { useState, useEffect } from 'react';
import Meal from './Meal';

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
    <section>
      <ul id="meals">
        {availableMeals.map(meal =>
          <li key={meal.id} className="meal-item">
            <Meal {...meal} />
          </li>
        )}
      </ul>
    </section>
  );
}
