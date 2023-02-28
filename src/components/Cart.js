import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, setQty, setDetails, setCart } from "../redux/slices/cartSlice";
import Message from "./Message";

function Cart(props) {
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [totalWithDiscount, setTotalWithDiscount] = useState(0);
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [message, setMessage] = useState(0);
    const [showMessage, setShowMessage] = useState(0);

    useEffect(() => {
        window.sessionStorage.setItem('MY_CART', JSON.stringify(cart));
        console.log(cart)
        let sub_total = cart.map(item => item.price * item.qty).reduce((acc, curr) => acc + curr, 0);
        setTotal(sub_total);
        let final_total = sub_total - discount;
        setTotalWithDiscount(final_total);
    }, [cart]);

    const removeFromCart = (item) => {
        dispatch(removeItem(item.id));
        showMessageFunction("Item removed successfully");
    };

    const changeQty = (e, item) => {
        dispatch(setQty({ id: item.id, qty: e.target.value }));
        showMessageFunction("Item quantity updated successfully");
    };

    const changeDetails = (e, item) => {
        dispatch(setDetails({ id: item.id, details: e.target.value }));
        showMessageFunction("Item details updated successfully");
    };

    const setDiscountAndTotal = (value) => {
        setDiscount(value);
        let final_total = total - value;
        setTotalWithDiscount(final_total);
        showMessageFunction("Discount added successfully");
    }

    const showMessageFunction = (messageString) => {
        setShowMessage(true);
        setMessage(messageString);
        setTimeout(() => {
            setShowMessage(false);
        }, 1000);
    }

    return (
        <div className={"cart " + (props.openPayment ? "cart-openedPayment" : "")}>
            {/* {
                showMessage && ( */}
            <Message message={message} showMessage={showMessage} />

            {cart.length > 0 ? (
                <>
                    {/* Cart */}
                    <div>
                        {/* Cart Order Number */}
                        <div className="cart-order-number">
                            <h1>Orders #34562</h1>
                        </div>
                        {/* End of Cart Order Number */}
                        {/* Cart Confimation Order  */}
                        <div className="cart-order-confirmation">
                            {/* Cart back */}
                            <div className="cart-back-button" id="cart-back-button">
                                <i className="fa-solid fa-arrow-left"></i>
                            </div>
                            {/* End of Cart back */}
                            <div className="cart-order-confirmation-add-button">
                                <div>
                                    <h1>Confrimation</h1>
                                    <p>Orders #34562</p>
                                </div>
                                <div>
                                    <button className="cart-add"><i className="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        </div>
                        {/* End of Confimation Order   */}
                        {/* Cart Buttons  */}
                        <div className="cart-buttons">
                            {/* Cart Button  */}
                            <button className="cart-button active">Dine in</button>
                            {/* End of Cart Button  */}
                            {/* Cart Button  */}
                            <button className="cart-button">To Go</button>
                            {/* End of Cart Button  */}
                            {/* Cart Button  */}
                            <button className="cart-button">Delivery</button>
                            {/* End of Cart Button  */}
                        </div>
                        {/* End of Cart Buttons  */}
                        {/* Cart table  */}
                        <div className="cart-table">
                            {/* Cart table Headers */}
                            <div className="cart-table-headers">
                                {/* Cart table Header */}
                                <div className="cart-table-header">Item</div>
                                {/* End of Cart table Header */}
                                {/* Cart table Header */}
                                <div className="cart-table-header">Qty</div>
                                {/* End of Cart table Header */}
                                {/* Cart table Header */}
                                <div className="cart-table-header">Price</div>
                                {/* End of Cart table Header */}
                            </div>
                            {/* End of Cart table Headers */}
                            {/* Cart table Body */}
                            <div className="cart-table-body">
                                {
                                    cart.map(
                                        (item, index) => (
                                            <div key={index}>
                                                {/* Cart table item */}
                                                <div className="cart-table-item">
                                                    {/* Cart table item first line */}
                                                    <div className="cart-table-item-data">
                                                        {/* Cart table item image, name and price */}
                                                        <div className="cart-item-image-name">
                                                            {/* Cart table item image */}
                                                            <div className="cart-item-image">
                                                                <img src={require("../assets/img/" + item.image)} alt="" srcSet="" />
                                                            </div>
                                                            {/* End of Cart table item image */}
                                                            {/* Cart table item name and price */}
                                                            <div className="cart-item-name-price">
                                                                <h1>{item.name}</h1>
                                                                <p>$ {item.price.toFixed(2)}</p>
                                                            </div>
                                                            {/* End of Cart table item name and price */}
                                                        </div>
                                                        {/* End of Cart table item image, name and price */}
                                                        {/* Cart table item quantity field */}
                                                        <div className="cart-item-qty">
                                                            <input type="text" name="qty" value={item.qty} id="qty" onChange={(e) => changeQty(e, item)} />
                                                        </div>
                                                        {/* End of Cart table item quantity field */}
                                                        {/* Cart table item total price (quantity × item unit price) */}
                                                        <div className="cart-item-price">$ {(item.price * item.qty)}</div>
                                                        {/* End of Cart table item total price (quantity × item unit price) */}
                                                    </div>
                                                    {/* Cart table item details field and delete button */}
                                                    <div className="cart-table-item-details-delete">
                                                        {/* Cart table item details field  */}
                                                        <div className="cart-item-details">
                                                            <input
                                                                type="text"
                                                                placeholder="Please, just a little bit spicy only."
                                                                name="details"
                                                                id="details"
                                                                value={item.details}
                                                                onChange={(e) => changeDetails(e, item)}
                                                            />
                                                        </div>
                                                        {/* End of Cart table item details field  */}
                                                        {/* Cart table item delete button  */}
                                                        <div className="cart-item-delete">
                                                            <button onClick={() => removeFromCart(item)}>
                                                                <i className="fa-solid fa-trash"></i>
                                                            </button>
                                                        </div>
                                                        {/* End of Cart table item delete button  */}
                                                    </div>
                                                    {/* End of Cart table item details field and delete button */}
                                                </div>
                                                {/* End of Cart table item */}
                                            </div>
                                        )
                                    )
                                }
                            </div>
                            {/* End of Cart table Body */}
                            {/* Cart table Footer */}
                            <div className="cart-table-footer">
                                {/* Cart table Footer subtotal  */}
                                <div className="cart-table-footer-line">
                                    {/* Cart table Footer subtotal title  */}
                                    <span>Sub total</span>
                                    {/* End of Cart table Footer subtotal title  */}
                                    {/* Cart table Footer subtotal value  */}
                                    <span>$ {total.toFixed(2)}</span>
                                    {/* End of Cart table Footer subtotal value  */}
                                </div>
                                {/* End of Cart table Footer subtotal  */}
                                {/* Cart table Footer discount  */}
                                <div className="cart-table-footer-line">
                                    {/* Cart table Footer discount title  */}
                                    <span>Discount</span>
                                    {/* End of Cart table Footer discount title  */}
                                    {/* Cart table Footer discount value  */}
                                    <span>$ <input
                                        className="main_input"
                                        type="text"
                                        placeholder="0"
                                        name="discount"
                                        id="discount"
                                        value={discount}
                                        onChange={(e) => setDiscountAndTotal(e.target.value)}
                                    /></span>
                                    {/* End of Cart table Footer discount value  */}
                                </div>
                                {/* End of Cart table Footer discount  */}
                                {/* Cart table Footer total  */}
                                <div className="cart-table-footer-line">
                                    {/* Cart table Footer total title  */}
                                    <span>Total</span>
                                    {/* End of Cart table Footer total title  */}
                                    {/* Cart table Footer total value  */}
                                    <span>$ {totalWithDiscount.toFixed(2)}</span>
                                    {/* End of Cart table Footer total value  */}
                                </div>
                                {/* End of Cart table Footer total  */}
                            </div>
                            {/* End of Cart table Footer */}
                        </div>
                        {/* End of Cart table  */}
                        {/* Continue to Payment Button  */}
                        <button className="payment-btn" id="payment-btn" onClick={() => props.setOpenPayment(true)}>
                            Continue to Payment
                        </button>
                        {/* End of Continue to Payment Button  */}
                    </div>
                    {/* End of Cart */}
                </>
            ) : (
                <div className="d-flex flex-col items-center justify-center h-100">
                    <h1>
                        Your cart is empty!
                    </h1>
                </div>
            )}
        </div>
    );
}

export default Cart;