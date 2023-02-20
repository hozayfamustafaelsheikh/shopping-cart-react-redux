import Cart from "./components/Cart";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Payment from "./components/Payment";

function App() {
  return (
    // Main
    <div className="main">
      <Menu />
      <Home />
      <Cart />
      <Payment />
    </div>
    // End of Main
  );
}

export default App;
