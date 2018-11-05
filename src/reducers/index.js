import { combineReducers } from 'redux';
import navBarEffect from './navbar_reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	navBarEffect,
	form: formReducer
});
