import { NAVBAR_DECIDE_TRANSPARENT, CHANGE_ACTIVE, SIDENAV_POSITION } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case NAVBAR_DECIDE_TRANSPARENT: 
			return {...state, transparent : action.payload};
		case CHANGE_ACTIVE:
			return { ...state, active: action.payload }
		case SIDENAV_POSITION:
			return {...state, sideNavPosition: action.payload}
		default:
			return state;
	}
}