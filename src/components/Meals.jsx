import Meal from './Meal';

export default function Meals() {
  const availableMeals = [{id: 'm0', image: 'images/mac-and-cheese.jpg', name: 'Meal name', description: 'Meal description', price: 10}];

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
