
import { NAVBAR_DECIDE_TRANSPARENT, CHANGE_ACTIVE, SIDENAV_POSITION } from './types';

export const decideTransparent = (decision) => (dispatch) => {
	dispatch({ type: NAVBAR_DECIDE_TRANSPARENT, payload: decision });
}

export const changeActive = (active) => (dispatch) => {
	dispatch({ type: CHANGE_ACTIVE, payload: active });
}

export const sideNav = (position) => (dispatch) => {
	dispatch({ type: SIDENAV_POSITION, payload: position})
}