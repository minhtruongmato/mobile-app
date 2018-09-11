import * as types from './../constants/ActionTypes';
let initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

export default (state = initialState, action) => {
	let {product, quantity} = action;
	let index = -1;
	switch(action.type) {
		case types.ADD_TO_CART:
			index = findProductInCart(state, product);
			if(index !== -1){
				state[index].quantity += quantity
			}else{
				state.push({product, quantity})
			}
			if (typeof(Storage) !== "undefined" && product !== null) {
				localStorage.setItem('cart', JSON.stringify(state));
			} else {
				document.write('Trình duyệt của bạn không hỗ trợ local storage');
			}
			return [...state];
		case types.GET_TO_CART:
			return [...state];
		case types.REMOVE_TO_CART:
			if(localStorage.getItem('cart')){
				localStorage.removeItem('cart');
			}
			state = [];
			return [...state];
		case types.CHANGE_TOTAL_CART:
			index = findProductInCart(state, action.product);
			if(index !== -1){
				state[index].quantity += action.value
			}
			if (typeof(Storage) !== "undefined" && product !== null) {
				localStorage.setItem('cart', JSON.stringify(state));
			} else {
				document.write('Trình duyệt của bạn không hỗ trợ local storage');
			}
			return [...state];
		case types.REMOVE_PRODUCT_IN_CART:
			index = findProductInCart(state, action.product);
			if(index !== -1){
				state.splice(index, 1);
			}
			if (typeof(Storage) !== "undefined" && product !== null) {
				localStorage.setItem('cart', JSON.stringify(state));
			} else {
				document.write('Trình duyệt của bạn không hỗ trợ local storage');
			}
			return [...state];
		default: 
			return [...state];
	}
}

let findProductInCart = (cart, product) => {
	let index = -1;
	if(cart.length > 0){
		for (var i = 0; i < cart.length; i++) {
			if(cart[i].product.id === product.id){
				index = i;
				break;
			}
		}
	}
	return index;
}