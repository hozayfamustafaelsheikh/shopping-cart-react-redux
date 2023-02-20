function Payment() {
    return (
        <>

            {/* payment */}
            <div className="payment">
                {/* payment titles */}
                <div className="payment-titles">
                    <h1>Payment</h1>
                    <p>3 payment methods available</p>
                </div>
                {/* End of payment titles */}
                {/* payment body */}
                <div className="payment-body">
                    <h1>Payment Method</h1>
                    {/* payment methods */}
                    <div className="payment-methods">
                        {/* payment method button */}
                        <div className="payment-method-button">
                            <input type="radio" id="credit" name="payment-method" defaultChecked />
                            <label htmlFor="credit">
                                <div>
                                    <i className="fa-solid fa-credit-card"></i><br />
                                    Credit Card
                                </div>
                            </label>
                        </div>
                        {/* End of payment method button */}
                        {/* payment method button */}
                        <div className="payment-method-button">
                            <input type="radio" id="paypal" name="payment-method" />
                            <label htmlFor="paypal">
                                <div>
                                    <i className="fa-brands fa-paypal"></i><br />
                                    Paypal
                                </div>
                            </label>
                        </div>
                        {/* End of payment method button */}
                        {/* payment method button */}
                        <div className="payment-method-button">
                            <input type="radio" id="cash" name="payment-method" />
                            <label htmlFor="cash">
                                <div>
                                    <i className="fa-solid fa-wallet"></i><br />
                                    Cash
                                </div>
                            </label>
                        </div>
                        {/* End of payment method button */}
                    </div>
                    {/* End of payment methods */}
                    {/* payment form */}
                    <div className="payment-form">
                        <div className="form-group">
                            <label htmlFor="cardholder">Cardholder Name</label>
                            <input
                                type="text"
                                name="cardholder"
                                id="cardholder"
                                placeholder="John Adams"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cardnumber">Card Number</label>
                            <input
                                type="text"
                                name="cardnumber"
                                id="cardnumber"
                                placeholder="4656 6548 9987 9855"
                            />
                        </div>
                        <div className="d-f j-c-sb a-i-c g-1 mb-0-5">
                            <div className="form-group mt-0">
                                <label htmlFor="expirationdate">Expiration Date</label>
                                <input
                                    type="text"
                                    name="expirationdate"
                                    id="expirationdate"
                                    placeholder="12/28"
                                />
                            </div>
                            <div className="form-group mt-0">
                                <label htmlFor="cvv">CVV</label>
                                <input type="password" name="cvv" id="cvv" placeholder="123" />
                            </div>
                        </div>
                    </div>
                    {/* End of payment form */}
                </div>
                {/* End of payment body */}
                {/* order options */}
                <div className="d-f j-c-sb a-i-c g-1 mt-0-5">
                    <div className="form-group">
                        <label htmlFor="expirationdate">Order Type</label>
                        <div className="form-select">
                            <select name="" id="">
                                <option defaultValue="">Dining</option>
                                <option defaultValue="">Dining</option>
                                <option defaultValue="">Dining</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tableno">Table No.</label>
                        <input
                            type="password"
                            name="tableno"
                            id="tableno"
                            placeholder="T01"
                        />
                    </div>
                </div>
                {/* End of order options */}
                {/* payment Buttons  */}
                <div className="d-f j-c-sb a-i-c g-1 mt-2">
                    {/* payment Button  */}
                    <button className="payment-button" id="payment-button-cancel">
                        Cancel
                    </button>
                    {/* End of payment Button  */}
                    {/* payment Button  */}
                    <button className="payment-button active">Confirm Payment</button>
                    {/* End of payment Button  */}
                </div>
                {/* End of payment Buttons  */}
            </div>
            {/* End of payment */}
        </>
    );
}

export default Payment;