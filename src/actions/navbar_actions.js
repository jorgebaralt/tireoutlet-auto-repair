
import { NAVBAR_DECIDE_TRANSPARENT, CHANGE_ACTIVE } from './types';

export const decideTransparent = (decision) => (dispatch) => {
	dispatch({ type: NAVBAR_DECIDE_TRANSPARENT, payload: decision });
}

export const changeActive = (active) => (dispatch) => {
	dispatch({ type: CHANGE_ACTIVE, payload: active });
}