import Cart from "./components/Cart";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Payment from "./components/Payment";
import React, { useState, useEffect } from 'react';


function App() {
  const [openPayment, setOpenPayment] = useState(false);
  return (
    // Main
    <div className="main">
      <Menu />
      <Home />
      <Cart setOpenPayment={setOpenPayment} openPayment={openPayment} />
      <Payment setOpenPayment={setOpenPayment} openPayment={openPayment} />
      {/*  The Modal  */}
      <div id="myModal" className={"modal " + (openPayment ? "d-block" : "d-none")}>
        {/* Modal content  */}
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </div>
    // End of Main
  );
}

export default App;
