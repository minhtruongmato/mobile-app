import React, { Component } from 'react';
import { IMAGE_URL } from './../../constants/Config';
import {Link} from 'react-router-dom';

class Cart extends Component {
    render() {
    	let {cartItem} = this.props;
    	let elmCartItem = '';
    	let countCartItem = 0;
    	let totalCartItem = 0;
    	if(cartItem){
    		elmCartItem = cartItem.map((item, index) => {
    			const image = JSON.parse(item.product.image);
    			countCartItem ++;
    			totalCartItem += item.quantity * (item.product.price - item.product.discount);
    			return (
    				<div className="cart-item" key={index}>
						<div className="media">
							<a className="pull-left"><img src={`${IMAGE_URL}/products/${item.product.slug}/${image[0]}`} alt={item.slug} /></a>
							<div className="media-body">
								<span className="cart-item-title">{item.product.title}</span>
								<span className="cart-item-options">Số Lượng: {item.quantity}</span>
								<span className="cart-item-amount"><span>{parseInt(item.product.price - item.product.discount, 0).toLocaleString('vi')} VND</span></span>
							</div>
						</div>
					</div>
    			)
    		});
    	}
        return (
            <div className="beta-comp">
				<div className="cart">
					<div className="beta-select"><i className="fa fa-shopping-cart" />{(countCartItem === 0)? 'Giỏ hàng (Trống)' : countCartItem+' sản phẩm'}  <i className="fa fa-chevron-down" /></div>
					<div className="beta-dropdown cart-body">
						{elmCartItem}
						<div className="cart-caption">
							<div className="cart-total text-right">Tổng tiền: <span className="cart-total-value">{parseInt(totalCartItem, 0).toLocaleString('vi')} VND</span></div>
							<div className="clearfix" />
							<div className="center">
								<div className="space10">&nbsp;</div>
								<Link to="/dat-hang" className="beta-btn primary text-center">Đặt hàng <i className="fa fa-chevron-right" /></Link>
							</div>
						</div>
					</div>
				</div> {/* .cart */}
			</div>
        );
    }
}

export default Cart;
