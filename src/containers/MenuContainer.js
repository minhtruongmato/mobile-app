import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductTypeRequest } from './../actions​/index';
import HeaderBottom from './../components/header/HeaderBottom';



export class MenuContainer extends Component {
    componentWillMount() {
        this.props.handleGetProductType();
    }
    render() {
        const {
            productType,
        } = this.props;
        return (
            <HeaderBottom
            	productType={productType}
            />
        );
    }
}

const mapStateToProps = state => {
	return {
		productType: state.products.productType
	}
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetProductType: () => {
            dispatch(getProductTypeRequest());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuContainer);
