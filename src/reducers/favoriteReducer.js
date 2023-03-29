import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from '../actions/favoritesActions.js'

const initialState = {
  favorites: [],
  displayFavorites: true,
}

const reducer = (state = initialState, action) => {
  const check = (id) => {
    let check = true
    state.favorites.forEach((fav) => {
      if (fav.id === id) {
        check = false
      }
    })
    return check
  }

  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !Boolean(state.displayFavorites),
      }

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: check(action.payload.id)
          ? [...state.favorites, action.payload]
          : state.favorites,
      }

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      }

    default:
      return state
  }
}

export default reducer
