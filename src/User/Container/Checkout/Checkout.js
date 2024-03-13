import React from 'react';

function Checkout(props) {
    return (
        

            <div>
                {/* Modal Search Start */}
                <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body d-flex align-items-center">
                                <div className="input-group w-75 mx-auto d-flex">
                                    <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                    <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Search End */}
                {/* Single Page Header start */}
                <div className="container-fluid page-header py-5">
                    <h1 className="text-center text-white display-6">Checkout</h1>
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active text-white">Checkout</li>
                    </ol>
                </div>
                {/* Single Page Header End */}
                {/* Checkout Page Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <h1 className="mb-4">Billing details</h1>
                        <form action="#">
                            <div className="row g-5">
                                <div className="col-md-12 col-lg-6 col-xl-7">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6">
                                            <div className="form-item w-100">
                                                <label className="form-label my-3">First Name<sup>*</sup></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <div className="form-item w-100">
                                                <label className="form-label my-3">Last Name<sup>*</sup></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-item">
                                        <label className="form-label my-3">Company Name<sup>*</sup></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-item">
                                        <label className="form-label my-3">Address <sup>*</sup></label>
                                        <input type="text" className="form-control" placeholder="House Number Street Name" />
                                    </div>
                                    <div className="form-item">
                                        <label className="form-label my-3">Town/City<sup>*</sup></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-item">
                                        <label className="form-label my-3">Country<sup>*</sup></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-item">
                                        <label className="form-label my-3">Postcode/Zip<sup>*</sup></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-item">
                                        <label className="form-label my-3">Mobile<sup>*</sup></label>
                                        <input type="tel" className="form-control" />
                                    </div>
                                    <div className="form-item">
                                        <label className="form-label my-3">Email Address<sup>*</sup></label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="form-check my-3">
                                        <input type="checkbox" className="form-check-input" id="Account-1" name="Accounts" defaultValue="Accounts" />
                                        <label className="form-check-label" htmlFor="Account-1">Create an account?</label>
                                    </div>
                                    <hr />
                                    <div className="form-check my-3">
                                        <input className="form-check-input" type="checkbox" id="Address-1" name="Address" defaultValue="Address" />
                                        <label className="form-check-label" htmlFor="Address-1">Ship to a different address?</label>
                                    </div>
                                    <div className="form-item">
                                        <textarea name="text" className="form-control" spellCheck="false" cols={30} rows={11} placeholder="Oreder Notes (Optional)" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6 col-xl-5">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Products</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center mt-2">
                                                            <img src="img/vegetable-item-2.jpg" className="img-fluid rounded-circle" style={{ width: 90, height: 90 }} alt />
                                                        </div>
                                                    </th>
                                                    <td className="py-5">Awesome Brocoli</td>
                                                    <td className="py-5">$69.00</td>
                                                    <td className="py-5">2</td>
                                                    <td className="py-5">$138.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center mt-2">
                                                            <img src="img/vegetable-item-5.jpg" className="img-fluid rounded-circle" style={{ width: 90, height: 90 }} alt />
                                                        </div>
                                                    </th>
                                                    <td className="py-5">Potatoes</td>
                                                    <td className="py-5">$69.00</td>
                                                    <td className="py-5">2</td>
                                                    <td className="py-5">$138.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center mt-2">
                                                            <img src="img/vegetable-item-3.png" className="img-fluid rounded-circle" style={{ width: 90, height: 90 }} alt />
                                                        </div>
                                                    </th>
                                                    <td className="py-5">Big Banana</td>
                                                    <td className="py-5">$69.00</td>
                                                    <td className="py-5">2</td>
                                                    <td className="py-5">$138.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                    </th>
                                                    <td className="py-5" />
                                                    <td className="py-5" />
                                                    <td className="py-5">
                                                        <p className="mb-0 text-dark py-3">Subtotal</p>
                                                    </td>
                                                    <td className="py-5">
                                                        <div className="py-3 border-bottom border-top">
                                                            <p className="mb-0 text-dark">$414.00</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                    </th>
                                                    <td className="py-5">
                                                        <p className="mb-0 text-dark py-4">Shipping</p>
                                                    </td>
                                                    <td colSpan={3} className="py-5">
                                                        <div className="form-check text-start">
                                                            <input type="checkbox" className="form-check-input bg-primary border-0" id="Shipping-1" name="Shipping-1" defaultValue="Shipping" />
                                                            <label className="form-check-label" htmlFor="Shipping-1">Free Shipping</label>
                                                        </div>
                                                        <div className="form-check text-start">
                                                            <input type="checkbox" className="form-check-input bg-primary border-0" id="Shipping-2" name="Shipping-1" defaultValue="Shipping" />
                                                            <label className="form-check-label" htmlFor="Shipping-2">Flat rate: $15.00</label>
                                                        </div>
                                                        <div className="form-check text-start">
                                                            <input type="checkbox" className="form-check-input bg-primary border-0" id="Shipping-3" name="Shipping-1" defaultValue="Shipping" />
                                                            <label className="form-check-label" htmlFor="Shipping-3">Local Pickup: $8.00</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                    </th>
                                                    <td className="py-5">
                                                        <p className="mb-0 text-dark text-uppercase py-3">TOTAL</p>
                                                    </td>
                                                    <td className="py-5" />
                                                    <td className="py-5" />
                                                    <td className="py-5">
                                                        <div className="py-3 border-bottom border-top">
                                                            <p className="mb-0 text-dark">$135.00</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                        <div className="col-12">
                                            <div className="form-check text-start my-3">
                                                <input type="checkbox" className="form-check-input bg-primary border-0" id="Transfer-1" name="Transfer" defaultValue="Transfer" />
                                                <label className="form-check-label" htmlFor="Transfer-1">Direct Bank Transfer</label>
                                            </div>
                                            <p className="text-start text-dark">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                        </div>
                                    </div>
                                    <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                        <div className="col-12">
                                            <div className="form-check text-start my-3">
                                                <input type="checkbox" className="form-check-input bg-primary border-0" id="Payments-1" name="Payments" defaultValue="Payments" />
                                                <label className="form-check-label" htmlFor="Payments-1">Check Payments</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                        <div className="col-12">
                                            <div className="form-check text-start my-3">
                                                <input type="checkbox" className="form-check-input bg-primary border-0" id="Delivery-1" name="Delivery" defaultValue="Delivery" />
                                                <label className="form-check-label" htmlFor="Delivery-1">Cash On Delivery</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                        <div className="col-12">
                                            <div className="form-check text-start my-3">
                                                <input type="checkbox" className="form-check-input bg-primary border-0" id="Paypal-1" name="Paypal" defaultValue="Paypal" />
                                                <label className="form-check-label" htmlFor="Paypal-1">Paypal</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                                        <button type="button" className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">Place Order</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Checkout Page End */}
            </div>

            );
}

            export default Checkout;