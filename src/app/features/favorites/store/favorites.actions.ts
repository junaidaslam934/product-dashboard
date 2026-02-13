import { createAction, props } from '@ngrx/store';
import { Product } from '../../../core/models';

export const addToFavorites = createAction(
  '[Favorites] Add To Favorites',
  props<{ product: Product }>()
);

export const removeFromFavorites = createAction(
  '[Favorites] Remove From Favorites',
  props<{ productId: string }>()
);

export const loadFavoritesFromStorage = createAction(
  '[Favorites] Load From Storage'
);

export const clearFavorites = createAction('[Favorites] Clear All');
