import * as types from './../constants/ActionTypes';
let initialState = sessionStorage.getItem('login') ? JSON.parse(sessionStorage.getItem('login')) : {}

export default (state = initialState, action) => {
	switch(action.type) {
		case types.LOGIN:
			state = action.user;
			if ( typeof(Storage) !== 'undefined' && state !== false) {
			    sessionStorage.setItem('login', JSON.stringify(state));
			}
			return {...state};
		case types.REGISTER:
			state = action.user;
			if ( typeof(Storage) !== 'undefined' && action.user.result === "success") {
			    sessionStorage.setItem('login', JSON.stringify(state.data));
			}
			return {...state};
		default: 
			return {...state};
	}
}