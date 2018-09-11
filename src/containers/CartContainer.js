import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/header/Cart';
import { getToCart } from './../actions​/index';



export class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItem: []
        }
    }
    componentWillMount() {
        this.props.getToCart();
    }
    render() {

        return (
            <Cart
                cartItem={this.props.cartItem}
            />
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        cartItem: state.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getToCart: () => {
            dispatch(getToCart());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartContainer);
