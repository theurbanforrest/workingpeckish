/*import { combineReducers } from 'redux';
import * as recipesReducer from './recipes';

export default combineReducers(Object.assign(
	recipesReducer,
)); */

import * as types from './types'

export function addRecipe() {
	return {
		type: types.ADD_RECIPE,
	}
}