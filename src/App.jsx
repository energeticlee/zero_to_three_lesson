import "./App.css";
import { useStoreDataContext } from "./context/Store";
import ProductList from "./pages/ProductList";

function App() {
  const { selectedItems } = useStoreDataContext();

  const findSum = (arr) => {
    const sum = arr.reduce((a, b) => a + b.price, 0);
    return sum;
  };

  return (
    <div style={{ display: "flex" }}>
      <ProductList />
      <div>
        <div>
          <div>Shopping Cart</div>
          {selectedItems.map((item, idx) => {
            return (
              <div key={idx}>
                {item.productName}: {item.price}
              </div>
            );
          })}
        </div>
        <div>Total Price: {findSum(selectedItems)}</div>
      </div>
    </div>
  );
}

export default App;
