import CartContexProvider from "./store/cart-context.jsx";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";

function App() {
  return (
    <CartContexProvider>
      <Header />
      <Meals />
    </CartContexProvider>
  );
}

export default App;
