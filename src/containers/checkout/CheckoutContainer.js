import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkout from './../../components/checkout/Checkout';
import {
    getToCart,
    sendOrderRequest,
    removeToCart,
    changeTotalCart,
    removeProductInCart
} from './../../actions​/index';
import qs from 'qs';

export class CheckoutContainer extends Component {
	componentWillMount() {
		this.props.getToCart();
	}
    handleSendOrder = (customer) => {
        let data = {
            order: this.props.cartItem,
            customer: customer
        };
        this.props.sendOrder(qs.stringify(data));
    }

    handleChangeTotalCart = (product, value) => {
        this.props.changeTotalCart(product, value);
    }
    handleRemoveProductInCart = (product) => {
        this.props.removeProductInCart(product);
    }
    render() {
        const {
            cartItem, order
        } = this.props;
        let elmAlert = '';
        if(order.message === 'success'){
            elmAlert = <div className="alert alert-info" role="alert" style={{ textAlign: 'center', 'margin': '20px' }}>Mua hàng thành công. Mã mua hàng của quý khách là: <strong style={{ 'textTransform': 'uppercase' }}>{order.orderCode}</strong></div>;
        }else if(order.message === 'fail'){
            elmAlert = <div className="alert alert-warning" role="alert" style={{ textAlign: 'center', 'margin': '20px' }}>Mua hàng không thành công</div>;
        }
        
        return (
            <Checkout
            	cartItem={cartItem}
                handleSendOrder={this.handleSendOrder}
                elmAlert={elmAlert}
                handleChangeTotalCart={this.handleChangeTotalCart}
                handleRemoveProductInCart={this.handleRemoveProductInCart}
            />
        );
    }
}
const mapStateToProps = ( state ) => ({
    cartItem: state.cart,
    order: state.order
});
const mapDispatchToProps = (dispatch) => {
    return {
        getToCart: () => {
            dispatch(getToCart());
        },
        sendOrder: (order) => {
            dispatch(sendOrderRequest(order));
        },
        removeCart: () => {
            dispatch(removeToCart());
        },
        changeTotalCart: (product, value) => {
            dispatch(changeTotalCart(product, value));
        },
        removeProductInCart: (product) => {
            dispatch(removeProductInCart(product));
        }

    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutContainer);
