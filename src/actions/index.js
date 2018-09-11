import * as types from './../constants/ActionTypes';
import apiCaller from './../apiCaller';

export const loginRequest = (user) => {
	return (dispatch) => {
		apiCaller('clientLogin', 'POST', user).then(response => {
    		dispatch(loginApi(response.data));
  		});
	}
}

export const loginApi = (user) => {
	return {
		type: types.LOGIN,
		user
	}
}

export const registerRequest = (user) => {
	return (dispatch) => {
		apiCaller('clientRegister', 'POST', user).then(response => {
    		dispatch(registerApi(response.data));
  		});
	}
}

export const registerApi = (user) => {
	return {
		type: types.REGISTER,
		user
	}
}

export const getProductTypeRequest = () => {
	return (dispatch) => {
		apiCaller('product_type', 'GET', null).then(response => {
			dispatch(getProductType(response.data));
		});
	}
}

export const getProductType = (data) => {
	return {
		type: types.GET_PRODUCT_TYPE,
		data
	}
}


export const getNewProductRequest = () => {
	return (dispatch) => {
		apiCaller('new_products', 'GET', null).then(response => {
			dispatch(getNewProduct(response.data));
		});
	}
}

export const getNewProduct = (data) => {
	return {
		type: types.GET_NEW_PRODUCTS,
		data
	}
}

export const getTopProductRequest = () => {
	return (dispatch) => {
		apiCaller('top_products', 'GET', null).then(response => {
			dispatch(getTopProduct(response.data));
		});
	}
}

export const getTopProduct = (data) => {
	return {
		type: types.GET_TOP_PRODUCTS,
		data
	}
}

export const getDiscountProductRequest = () => {
	return (dispatch) => {
		apiCaller('discount_products', 'GET', null).then(response => {
			dispatch(getDiscountProduct(response.data));
		});
	}
}

export const getDiscountProduct = (data) => {
	return {
		type: types.GET_DISCOUNT_PRODUCTS,
		data
	}
}

export const getRelatedProductRequest = (slug) => {
	return (dispatch) => {
		apiCaller('related_products/' + slug, 'GET', null).then(response => {
			dispatch(getRelatedProduct(response.data));
		});
	}
}

export const getRelatedProduct = (data) => {
	return {
		type: types.GET_RELATED_PRODUCTS,
		data
	}
}

export const getDetailProductRequest = (slug) => {
	return (dispatch) => {
		apiCaller('detail_product/'+slug, 'GET', null).then(response => {
			dispatch(getDetailProduct(response.data));
		});
	}
}

export const getDetailProduct = (product) => {
	return {
		type: types.GET_DETAIL_PRODUCTS,
		product
	}
}

export const addToCart = (product, quantity) => {
	return {
		type: types.ADD_TO_CART,
		product,
		quantity
	}
}

export const getToCart = () => {
	return {
		type: types.GET_TO_CART,
	}
}

export const removeToCart = () => {
	return {
		type: types.REMOVE_TO_CART,
	}
}

export const sendOrderRequest = (order) => {
	return (dispatch) => {
		apiCaller('order', 'POST', order).then((response) => {
			dispatch(sendOrder(response.data));
			if (response.data.message) {
				dispatch(removeToCart());
			}
		});
	}
}

export const sendOrder = (order) => {
	return {
		type: types.SEND_ORDER,
		order
	}
}

export const changeTotalCart = (product, value) => {
	return {
		type: types.CHANGE_TOTAL_CART,
		product,
		value
	}
}

export const removeProductInCart = (product) => {
	return {
		type: types.REMOVE_PRODUCT_IN_CART,
		product
	}
}