import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewProduct from './../../components/homepage/NewProducts';
import {
	getNewProductRequest,
    addToCart
} from './../../actions​/index';


export class NewProductContainer extends Component {
	componentWillMount() {
		this.props.getNewProduct();
	}
    handleAddToCart = (result, quantity) => {
        this.props.addToCart(result, quantity);
    }
    render() {
        const {
            newProducts
        } = this.props;
        
        return (
            <NewProduct
                newProducts = {newProducts}
                handleAddToCart = {this.handleAddToCart}
            />
        );
    }
}

const mapStateToProps = ( state ) => ({
    newProducts: state.products.newProducts
});

const mapDispatchToProps = (dispatch, props) => {
    return {
        getNewProduct: () => {
            dispatch(getNewProductRequest());
        },
        addToCart: (product, quantity) => {
            dispatch(addToCart(product, quantity));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewProductContainer);
