import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavoritesState } from './favorites.reducer';

export const selectFavoritesState = createFeatureSelector<FavoritesState>('favorites');

export const selectFavoriteItems = createSelector(
  selectFavoritesState,
  state => state.items
);

export const selectFavoritesCount = createSelector(
  selectFavoriteItems,
  items => items.length
);

export const selectIsFavorite = (productId: string) => createSelector(
  selectFavoriteItems,
  items => items.some(item => item.id === productId)
);
