import { NAVBAR_DECIDE_TRANSPARENT, CHANGE_ACTIVE } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case NAVBAR_DECIDE_TRANSPARENT: 
			return {...state, transparent : action.payload};
		case CHANGE_ACTIVE:
			return {...state, active: action.payload}
		default:
			return state;
	}
}