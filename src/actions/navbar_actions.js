
import { NAVBAR_DECIDE_TRANSPARENT } from './types';

export const decideTransparent = (decision) => (dispatch) => {
	dispatch({ type: NAVBAR_DECIDE_TRANSPARENT, payload: decision });
}