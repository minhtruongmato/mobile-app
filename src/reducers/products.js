import * as types from './../constants/ActionTypes';
let initialState = {
	productType: [],
	newProducts: [],
	topProducts: [],
	discountProducts: [],
	relatedProducts: [],
	detailProduct: null
}

export default (state = initialState, action) => {
	switch(action.type) {
		case types.GET_PRODUCT_TYPE:
			state.productType = action.data;
			return {...state};
		case types.GET_NEW_PRODUCTS:
			state.newProducts = action.data.data;
			return {...state};
		case types.GET_TOP_PRODUCTS:
			state.topProducts = action.data.data;
			return {...state};
		case types.GET_DISCOUNT_PRODUCTS:
			state.discountProducts = action.data.data;
			return {...state};
		case types.GET_RELATED_PRODUCTS:
			state.relatedProducts = action.data.data;
			return {...state};
		case types.GET_DETAIL_PRODUCTS:
			state.detailProduct = action.product;
			return {...state};
		default: 
			return state;
	}
}