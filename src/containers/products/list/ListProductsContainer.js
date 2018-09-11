import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListProducts from './../../../components/products/list/Index';
import apiCaller from './../../../apiCaller';


export class ListProductsContainer extends Component {
	componentWillMount() {
		let slug = this.props.match.params.slug;
		console.log(this.props.match);
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

    render() {
        // const {
        //     action
        // } = this.props;

        return (
            <ListProducts />
        );
    }
}

const mapStateToProps = ({ state }) => ({
    // prop: state.prop
});

const mapDispatchToProps = (dispatch) => {
    return {
        // action: () => {
        //     dispatch(actionAction());
        // },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListProductsContainer);
