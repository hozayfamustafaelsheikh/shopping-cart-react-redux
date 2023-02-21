function Cart(props) {
    return (
        <>
            {/* Cart */}
            <div className={"cart " + (props.openPayment ? "cart-openedPayment" : "")}>
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
                        {/* Cart table item */}
                        <div className="cart-table-item">
                            {/* Cart table item first line */}
                            <div className="cart-table-item-data">
                                {/* Cart table item image, name and price */}
                                <div className="cart-item-image-name">
                                    {/* Cart table item image */}
                                    <div className="cart-item-image">
                                        <img src={require("../assets/img/item-01.jpg")} alt="" srcSet="" />
                                    </div>
                                    {/* End of Cart table item image */}
                                    {/* Cart table item name and price */}
                                    <div className="cart-item-name-price">
                                        <h1>Spicy seasoned seafood noodles</h1>
                                        <p>$ 2.29</p>
                                    </div>
                                    {/* End of Cart table item name and price */}
                                </div>
                                {/* End of Cart table item image, name and price */}
                                {/* Cart table item quantity field */}
                                <div className="cart-item-qty">
                                    <input type="text" name="qty" defaultValue="2" id="qty" />
                                </div>
                                {/* End of Cart table item quantity field */}
                                {/* Cart table item total price (quantity × item unit price) */}
                                <div className="cart-item-price">$ 4,58</div>
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
                                    />
                                </div>
                                {/* End of Cart table item details field  */}
                                {/* Cart table item delete button  */}
                                <div className="cart-item-delete">
                                    <button>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                                {/* End of Cart table item delete button  */}
                            </div>
                            {/* End of Cart table item details field and delete button */}
                        </div>
                        {/* End of Cart table item */}
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
                            <span>$ 21,03</span>
                            {/* End of Cart table Footer subtotal value  */}
                        </div>
                        {/* End of Cart table Footer subtotal  */}
                        {/* Cart table Footer discount  */}
                        <div className="cart-table-footer-line">
                            {/* Cart table Footer discount title  */}
                            <span>Discount</span>
                            {/* End of Cart table Footer discount title  */}
                            {/* Cart table Footer discount value  */}
                            <span>$ 0</span>
                            {/* End of Cart table Footer discount value  */}
                        </div>
                        {/* End of Cart table Footer discount  */}
                        {/* Cart table Footer total  */}
                        <div className="cart-table-footer-line">
                            {/* Cart table Footer total title  */}
                            <span>Total</span>
                            {/* End of Cart table Footer total title  */}
                            {/* Cart table Footer total value  */}
                            <span>$ 21,03</span>
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
    );
}

export default Cart;