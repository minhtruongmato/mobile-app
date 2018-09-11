import * as types from './../constants/ActionTypes';

let initialState = {}

export default (state = initialState, action) => {
	switch(action.type) {
		case types.SEND_ORDER:
			state = action.order;
			return {...state};
		default: 
			return {...state};
	}
}