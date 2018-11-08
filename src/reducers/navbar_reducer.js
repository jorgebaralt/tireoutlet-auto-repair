import { NAVBAR_DECIDE_TRANSPARENT, CHANGE_ACTIVE, SIDENAV_POSITION, DECIDE_EXPAND_SIDEBAR } from '../actions/types';

export default (state = { expandSideNavbar: false}, action) => {
	switch (action.type) {
		case NAVBAR_DECIDE_TRANSPARENT: 
			return {...state, transparent : action.payload};
		case CHANGE_ACTIVE:
			return { ...state, active: action.payload }
		case SIDENAV_POSITION:
			return { ...state, sideNavPosition: action.payload }
		case DECIDE_EXPAND_SIDEBAR:
			return { ...state, expandSideNavbar: action.payload };
		default:
			return state;
	}
}