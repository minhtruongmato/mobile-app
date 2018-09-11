import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailProduct from './../../../components/products/detail/DetailProduct';
import NewProducts from './../../../components/products/detail/NewProducts';
import DiscountProducts from './../../../components/products/detail/DiscountProducts';
import RelatedProducts from './../../../components/products/detail/RelatedProducts';
import apiCaller from './../../../apiCaller';
import {
    getDetailProductRequest,
    addToCart,
    getNewProductRequest,
    getDiscountProductRequest,
    getRelatedProductRequest
} from './../../../actions​/index';

export class DetailProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: '',
            detailProduct: null,
            relatedProducts: []
        }
    }

    componentWillMount() {
        let slug = this.props.match.params.slug;
        this.props.getNewProductRequest();
        this.props.getDiscountProductRequest();
        window.addEventListener('load',this.loadDataApi(slug));
    }
    componentWillReceiveProps(nextProps) {
        let slug = nextProps.match.params.slug;
        window.addEventListener('load',this.loadDataApi(slug));
        
    }
    loadDataApi = (slug) => {
        apiCaller('detail_product/'+slug, 'GET', null).then(response => {
            this.setState({
                detailProduct: response.data
            });
        });
        apiCaller('related_products/' + slug, 'GET', null).then(response => {
            this.setState({
                relatedProducts: response.data.data
            });
        });
    }
    handleAddToCart = (product, quantity) => {
        this.props.addToCart(product, quantity);
    }
    render() {
        const {
            newProducts,
            discountProducts,
            
        } = this.props;
        let {
            detailProduct,
            relatedProducts
        } = this.state;
        const elmRelatedProducts = <RelatedProducts
                                        relatedProducts={relatedProducts}
                                        handleAddToCart={this.handleAddToCart}
                                    />
        return (
            <DetailProduct
                detailProduct={detailProduct}
                handleAddToCart={this.handleAddToCart}
                elmRelatedProducts={elmRelatedProducts}
            >
                <DiscountProducts
                    discountProducts={discountProducts}
                />
                <NewProducts
                    newProducts={newProducts}
                />
            </DetailProduct>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        detailProduct: state.products.detailProduct,
        newProducts: state.products.newProducts,
        discountProducts: state.products.discountProducts,
        relatedProducts: state.products.relatedProducts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleDetDetailProductRequest: (slug) => {
            dispatch(getDetailProductRequest(slug));
        },
        addToCart: (product, quantity) => {
            dispatch(addToCart(product, quantity));
        },
        getNewProductRequest: () => {
            dispatch(getNewProductRequest());
        },
        getDiscountProductRequest: () => {
            dispatch(getDiscountProductRequest());
        },
        getRelatedProductRequest: (slug) => {
            dispatch(getRelatedProductRequest(slug));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailProductContainer);
