import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopProducts from './../../components/homepage/TopProducts';
import {
    getTopProductRequest,
    addToCart
} from './../../actions​/index';


export class TopProductContainer extends Component {
	componentWillMount() {
		this.props.getTopProduct();
	}
    handleAddToCart = (result, quantity) => {
        this.props.addToCart(result, quantity);
    }
    render() {
        const {
            topProducts
        } = this.props;

        return (
            <TopProducts
            	topProducts={topProducts}
                handleAddToCart = {this.handleAddToCart}
            />
        );
    }
}

const mapStateToProps = ( state ) => ({
    topProducts: state.products.topProducts
});

const mapDispatchToProps = (dispatch) => {
    return {
        getTopProduct: () => {
            dispatch(getTopProductRequest());
        },
        addToCart: (product, quantity) => {
            dispatch(addToCart(product, quantity));
        }
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopProductContainer);
