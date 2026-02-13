import { createReducer, on } from '@ngrx/store';
import { Product } from '../../../core/models';
import * as FavoritesActions from './favorites.actions';

export interface FavoritesState {
  items: Product[];
}

export const initialState: FavoritesState = {
  items: []
};

export const favoritesReducer = createReducer(
  initialState,
  
  on(FavoritesActions.addToFavorites, (state, { product }) => {
    // Check if product already exists
    const exists = state.items.find(item => item.id === product.id);
    if (exists) {
      return state;
    }
    return {
      ...state,
      items: [...state.items, product]
    };
  }),
  
  on(FavoritesActions.removeFromFavorites, (state, { productId }) => ({
    ...state,
    items: state.items.filter(item => item.id !== productId)
  })),
  
  on(FavoritesActions.loadFavoritesFromStorage, (state) => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      try {
        const items = JSON.parse(stored);
        return { ...state, items };
      } catch {
        return state;
      }
    }
    return state;
  }),
  
  on(FavoritesActions.clearFavorites, state => ({
    ...state,
    items: []
  }))
);
