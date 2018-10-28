import { NAVBAR_DECIDE_TRANSPARENT } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case NAVBAR_DECIDE_TRANSPARENT: 
			return action.payload;
		default:
			return state;
	}
}