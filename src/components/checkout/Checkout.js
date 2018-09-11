import React, { Component } from 'react';
import {IMAGE_URL} from './../../constants/Config';
import { CheckoutValidation } from './../validation/CheckoutValidation';

class Checkout extends Component {
	constructor(props) {
		let user = sessionStorage.getItem('login') ? JSON.parse(sessionStorage.getItem('login')) : {};
		user.content = '';
		user.gender = 0;
		user.payment_method = 0;
        super(props);
        this.state = {
        	fields: user,
        	errors: {},
            showButton: false
        }
    }

    componentWillMount() {
        if(localStorage.getItem('cart')){
            this.setState({
                showButton: true
            });
        }
    }

    handleValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        let validation = CheckoutValidation(fields, errors, formIsValid);
        this.setState({errors: errors});
        return validation.formIsValid;

    }

    handleChange = (field, e) => {         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

    handleSubmit = (event) => {
    	if(this.handleValidation()){
            this.props.handleSendOrder(this.state.fields);
        }
    	event.preventDefault();
    }

    changeTotalCart = (product, value, quantity) => {
        if(quantity > 1){
            this.props.handleChangeTotalCart(product, value)
        }
    }

    render() {
    	const {cartItem} = this.props;
    	let elmCartItem = '';
    	let totalCartItem = 0;
        
    	if(cartItem){
    		elmCartItem = cartItem.map((item, index) => {
    			const image = JSON.parse(item.product.image);
    			totalCartItem += item.quantity * (item.product.price - item.product.discount);
    			return (
    				<div className="your-order-item row" key={index}>
                        <div className="col-md-6">
	                        {/*  one item	 */}
	                        <div className="media">
	                            <img width="25%" src={`${IMAGE_URL}/products/${item.product.slug}/${image[0]}`} alt={item.product.slug} className="pull-left" />
	                            <div className="media-body">
	                                <p className="font-large">{item.product.title}</p>
	                                <span className="color-gray your-order-info" style={{'color': 'red'}}>Giá: {parseInt(item.product.price, 0).toLocaleString('vi')} VND</span>
	                                <span className="color-gray your-order-info">Giá Giảm: {parseInt(item.product.discount, 0).toLocaleString('vi')} VND</span>
	                                <span className="color-gray your-order-info">Số Lượng: {item.quantity}</span>
	                            </div>
	                        </div>
	                        {/* end one item */}
	                    </div>
                        <div className="input-group col-md-3" style={{ 'marginTop': '25px', 'float': 'left' }}>
                            <span className="input-group-btn">
                                <button
                                    type="button"
                                    className="btn btn-danger btn-number minus"
                                    data-type="minus"
                                    data-field="quant[2]"
                                    onClick={() => this.changeTotalCart(item.product, -1, item.quantity)}
                                >
                                    <span className="glyphicon glyphicon-minus" />
                                </button>
                            </span>
                            <input
                                type="text"
                                name="quant[2]"
                                className="form-control input-number"
                                defaultValue={item.quantity}
                                min={1}
                                max={100}
                                style={{ 'height': '34px', 'padding': '0 20px' }}
                                disabled = {true}
                            />
                            <span className="input-group-btn">
                                <button
                                    type="button"
                                    className="btn btn-success btn-number plus"
                                    data-type="plus"
                                    data-field="quant[2]"
                                    onClick={() => this.props.handleChangeTotalCart(item.product, 1)}
                                >
                                <span className="glyphicon glyphicon-plus" />
                                </button>
                            </span>
                        </div>
                        <div className="col-md-1 col-md-offset-1" style={{ 'marginTop': '25px' }}>
                                <button
                                    type="button"
                                    className="btn btn-danger btn-number"
                                    data-type="minus"
                                    data-field="quant[2]"
                                    onClick={() => this.props.handleRemoveProductInCart(item.product)}
                                >
                                    <span className="glyphicon glyphicon-remove" />
                                </button>
                        </div>
	                    <div className="clearfix" />
	                </div>
    			)
    		});
    	}
        let elmButton = <button type="submit" className="beta-btn primary" disabled>
                            Đặt hàng<i className="fa fa-chevron-right" />
                        </button>;
        if(this.state.showButton === true){
            elmButton = <button type="submit" className="beta-btn primary" >
                            Đặt hàng<i className="fa fa-chevron-right" />
                        </button>
        }        
        return (
            <div>
                <div className="inner-header">
                    <div className="container">
                        <div className="pull-left">
                            <h6 className="inner-title">Đặt hàng</h6>
                        </div>
                        <div className="pull-right">
                            <div className="beta-breadcrumb">
                                <a>Trang chủ</a> / <span>Đặt hàng</span>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
                {this.props.elmAlert}
                <div className="container">
                    <div id="content">
                        <form className="beta-form-checkout" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h4>Đặt hàng</h4>
                                    <div className="space20">&nbsp;</div>
                                    <div className="form-block">
                                        <label htmlFor="name">Họ tên*</label>
                                        <input
                                        	type="text"
                                        	id="name"
                                        	placeholder="Họ tên"
                                        	
                                        	name={this.state.fields["name"]}
											onChange={this.handleChange.bind(this, "name")}
											defaultValue={this.state.fields["name"]}
                                        />
                                        <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                                    </div>
                                    <div className="form-block">
	                                    <label>Giới tính </label>
	                                    <input
	                                    	id="gender"
	                                    	type="radio"
	                                    	className="input-radio"
	                                    	defaultValue={0}
	                                    	defaultChecked="checked"
	                                    	style={{width: '10%'}}
	                                    	name="gender"
											onChange={this.handleChange.bind(this, "gender")}
	                                    />
	                                    <span style={{marginRight: '10%'}}>Nam</span>
	                                    <input
	                                    	id="gender"
	                                    	type="radio"
	                                    	className="input-radio"
	                                    	defaultValue={1}
	                                    	style={{width: '10%'}}
	                                    	name="gender"
											onChange={this.handleChange.bind(this, "gender")}
	                                    />
	                                    <span>Nữ</span>	
                                    </div>
                                    <div className="form-block">
                                        <label htmlFor="email">Email*</label>
                                        <input
                                        	type="email"
                                        	id="email"
                                        	
                                        	placeholder="expample@gmail.com"
                                        	name={this.state.fields["email"]}
											onChange={this.handleChange.bind(this, "email")}
											defaultValue={this.state.fields["email"]}
                                        />
                                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                    </div>
                                    <div className="form-block">
                                        <label htmlFor="address">Địa chỉ*</label>
                                        <input
                                        	type="text"
                                        	id="address"
                                        	placeholder="Street Address"
                                        	
                                        	name={this.state.fields["address"]}
											onChange={this.handleChange.bind(this, "address")}
											defaultValue={this.state.fields["address"]}
                                        />
                                        <span style={{color: "red"}}>{this.state.errors["address"]}</span>
                                    </div>
                                    <div className="form-block">
                                        <label htmlFor="phone">Điện thoại*</label>
                                        <input
                                        	type="text"
                                        	id="phone"
                                        	
                                        	name={this.state.fields["phone"]}
											onChange={this.handleChange.bind(this, "phone")}
											defaultValue={this.state.fields["phone"]}
                                        />
                                        <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                                    </div>
                                    <div className="form-block">
                                        <label htmlFor="content">Ghi chú</label>
                                        <textarea
                                        	id="content"
                                        	defaultValue={""}
                                        	name={this.state.fields["content"]}
											onChange={this.handleChange.bind(this, "content")}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="your-order">
                                        <div className="your-order-head"><h5>Đơn hàng của bạn</h5></div>
                                        <div className="your-order-body" style={{ padding: '0px 10px' }}>
                                            
                                        	{elmCartItem}

                                            <div className="your-order-item">
                                                <div className="pull-left"><p className="your-order-f18">Tổng tiền:</p></div>
                                                <div className="pull-right"><h5 className="color-black">{parseInt(totalCartItem, 0).toLocaleString('vi')} VND</h5></div>
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                        <div className="your-order-head"><h5>Hình thức thanh toán</h5></div>
                                        <div className="your-order-body">
                                            <ul className="payment_methods methods">
                                                <li className="payment_method_bacs">
                                                    <input
                                                    	id="payment_method_bacs"
                                                    	type="radio"
                                                    	className="input-radio"
                                                    	defaultValue={0}
                                                    	defaultChecked="checked"
                                                    	data-order_button_text
                                                    	name="payment_method"
														onChange={this.handleChange.bind(this, "payment_method")}
                                                    />
                                                    <label htmlFor="payment_method_bacs">Thanh toán khi nhận hàng </label>
                                                    <div className="payment_box payment_method_bacs" style={{ display: 'block' }}>
                                                        Cửa hàng sẽ gửi hàng đến địa chỉ của bạn, bạn xem hàng rồi thanh toán tiền cho nhân viên giao hàng
                									</div>
                                                </li>
                                                <li className="payment_method_cheque">
                                                    <input
                                                    	id="payment_method_cheque"
                                                    	type="radio"
                                                    	className="input-radio"
                                                    	defaultValue={1}
                                                    	data-order_button_text
                                                    	name="payment_method"
														onChange={this.handleChange.bind(this, "payment_method")}
                                                    />
                                                    <label htmlFor="payment_method_cheque">Chuyển khoản </label>
                                                    <div className="payment_box payment_method_cheque" style={{ display: 'none' }}>
                                                        Chuyển tiền đến tài khoản sau:
														<br />- Số tài khoản: 123 456 789
														<br />- Chủ TK: Nguyễn A
														<br />- Ngân hàng ACB, Chi nhánh TPHCM
                									</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="text-center">
                                            {elmButton}
                                        </div>
                                    </div> {/* .your-order */}
                                </div>
                            </div>
                        </form>
                    </div> {/* #content */}
                </div>
            </div>

        );
    }
}

export default Checkout;
