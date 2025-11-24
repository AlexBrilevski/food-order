export default function Meal({ id, image, name, decription, price }) {
  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-description">
            {decription}
          </p>
          <p className="meal-item-price">
            {price}
          </p>
        </div>
        <p className="meal-item-actions">
          <button className="button">
            Add to cart
          </button>
        </p>
      </article>
    </div>
  );
}
