import { combineReducers } from 'redux'

import movieReducer from './movieReducer'
import favoriteReducer from './favoriteReducer'

export const reducers = combineReducers({
  movieReducer: movieReducer,
  favoriteReducer: favoriteReducer,
})
