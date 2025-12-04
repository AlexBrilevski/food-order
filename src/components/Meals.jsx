import useHttp from '../hooks/useHttp';
import MealItem from './MealItem';

const requestConfig = {};

export default function Meals() {
  const {
    data: availableMeals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching available meals...</p>;
  }

  if (!availableMeals) {
    return <p className="center">No available meals found.</p>;
  }

  return (
    <ul id="meals">
      {availableMeals.map(meal => <MealItem key={meal.id} item={meal} />)}
    </ul>
  );
}
