import React from 'react';
import "./payment-methods.scss";
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';
import * as materialModules from "@/shared/modules/material";
import mastercardIcon from "@/assets/master-card.png";
import visacardIcon from "@/assets/visa-card.png";
import smallVisaIcon from "@/assets/small-visa.png";
import smallMastercardIcon from "@/assets/small-master-card.png.png";
import smallAmexcardIcon from "@/assets/amex.png";
import smallDiscoverCardIcon from "@/assets/discover.png";
import epsIcon from "@/assets/EPS.png";
import giropayIcon from "@/assets/Giropay.png";
import paypalIcon from "@/assets/paypal.png";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const PaymentMethodsDesign = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <>
            <div className="flex-container-admin">
                <div className="col-6-payment-method">
                    <DashboardDesign />
                </div>
                <div className="col-8-payment-method">
                    <div className="main-bank-payment-form-card-container">
                        <div className="m-card-container">
                            <h4 className="heading">Debit/Credit Cards</h4>
                            <div className='select-payment-method'>
                                <img src={mastercardIcon} alt="" className='payment-method-img' />
                                <div className="payment-detail">
                                    <h5 className="card-title">Mastercard</h5>
                                    <h5 className="card-number">2356 84** **** 9812</h5>
                                </div>
                                <div>
                                    <materialModules.FormControl className="payment-menthod-form-control">
                                        <materialModules.Checkbox
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            className={`circular-checkbox ${checked ? 'circular-checkbox-checked' : ''}`}

                                            onChange={handleChange}
                                        >
                                        </materialModules.Checkbox>
                                    </materialModules.FormControl>
                                </div>
                            </div>
                            <hr className='payment-hr' />
                            <div className='select-payment-method'>
                                <img src={visacardIcon} alt="" className='payment-method-img' />
                                <div className="payment-detail">
                                    <h5 className="card-title">Visa Card</h5>
                                    <h5 className="card-number">2356 84** **** 9812</h5>
                                </div>
                                <div>
                                    <materialModules.FormControl className="payment-menthod-form-control">
                                        <materialModules.Checkbox
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            className={`circular-checkbox ${checked ? 'circular-checkbox-checked' : ''}`}

                                            onChange={handleChange}
                                        >
                                        </materialModules.Checkbox>
                                    </materialModules.FormControl>
                                </div>
                            </div>
                            <hr className='payment-hr' />
                        </div>
                        <div className="m-card-container">
                            <h4 className="heading">Mobile Banking</h4>
                            <div className='select-payment-method'>
                                <img src={paypalIcon} alt="" className='payment-method-img' />
                                <div className="payment-detail">
                                    <h5 className="card-title">PayPal</h5>
                                    <h5 className="card-number">2356 84** **** 9812</h5>
                                </div>
                                <div>
                                    <materialModules.FormControl className="payment-menthod-form-control">
                                        <materialModules.Checkbox
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            className={`circular-checkbox ${checked ? 'circular-checkbox-checked' : ''}`}

                                            onChange={handleChange}
                                        >
                                        </materialModules.Checkbox>
                                    </materialModules.FormControl>
                                </div>
                            </div>
                            <div className='select-payment-method'>
                                <AddCircleIcon />
                                <div className="add-payment">
                                    <h5 className="card-title">Add New Payment Method</h5>
                                </div>
                            </div>
                            <hr className='payment-hr' />
                            <div className="total-amount-div">
                                <h3 className="totla-heading">Subtotal</h3>
                                <h4 className="card-title">$400.75</h4>
                            </div>
                            <hr className='payment-hr' />
                            <div className="total-amount-div">
                                <h3 className="totla-heading">Total</h3>
                                <h4 className="card-title">$400.75</h4>
                            </div>
                        </div>
                        <div className="payment-pay-div">
                            <materialModules.Button className="btn-payment-pay">Confirm to pay - $400.75</materialModules.Button>
                        </div>
                    </div>

                </div>
                <div className="col-8-payment-method">
                    <div className="main-payment-form-card-container">
                        <div className="payment-form-card-container">
                            <div className="payment-form-card-o">
                                <div className="card-options">
                                    <div className="set-m">
                                        <CreditCardIcon />
                                        <p className="c-title">Card</p>
                                    </div>
                                </div>
                                <div className="card-options">
                                    <div className="set-m">
                                        <img src={epsIcon} />
                                        <p className="c-title">EPS</p>
                                    </div>
                                </div>
                                <div className="card-options">
                                    <div className="set-m">
                                        <img src={giropayIcon} />
                                        <p className="c-title">Giropay</p>
                                    </div>
                                </div>
                                <div className="dot-options">
                                    <div className="set-m">
                                        <MoreHorizIcon />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='form-data-payment'>
                                    <div className='main-payment-form-container'>
                                        <materialModules.Label htmlFor="my-input" className="label-class">Card number</materialModules.Label>
                                        <div className="input-container">
                                            <span className="input-icon">
                                                <img src={smallVisaIcon} alt="Icon" className='payment-small-icon' />
                                                <img src={smallMastercardIcon} alt="Icon" className='payment-small-icon' />
                                                <img src={smallAmexcardIcon} alt="Icon" className='payment-small-icon' />
                                                <img src={smallDiscoverCardIcon} alt="Icon" className='payment-small-icon' />
                                            </span>
                                            <input
                                                id="my-input"
                                                placeholder="1234 1234 1234 1234"
                                                className='credit-card-text-field'
                                            />
                                        </div>
                                        <div className='main-div-of-two-part'>
                                            <div className='child-div-of-two-part'>
                                                <materialModules.Label htmlFor="my-input" className="label-class">Expiry</materialModules.Label>
                                                <input
                                                    id="my-input"
                                                    placeholder="Expiry"
                                                    className='credit-card-text-field-two-part'
                                                />
                                            </div>
                                            <div className='child-div-of-two-part'>
                                                <materialModules.Label htmlFor="my-input" className="label-class">CVC</materialModules.Label>
                                                <input
                                                    id="my-input"
                                                    placeholder="CVC"
                                                    className='credit-card-text-field-two-part'
                                                />
                                            </div>
                                        </div>
                                        <div className='main-div-of-two-part'>
                                            <div className='child-div-of-two-part'>
                                                <materialModules.Label htmlFor="my-input" className="label-class">Country</materialModules.Label>
                                                <materialModules.Select
                                                    id="my-input"
                                                    className="credit-card-text-field-two-part"

                                                />
                                                {/* <input
                                                id="my-input"
                                                placeholder="Expiry"
                                                className='credit-card-text-field-two-part'
                                            /> */}
                                            </div>
                                            <div className='child-div-of-two-part'>
                                                <materialModules.Label htmlFor="my-input" className="label-class">Postal Code</materialModules.Label>
                                                <input
                                                    id="my-input"
                                                    placeholder="90210"
                                                    className='credit-card-text-field-two-part'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentMethodsDesign