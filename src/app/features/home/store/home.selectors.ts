import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from './home.reducer';

export const selectHomeState = createFeatureSelector<HomeState>('home');

export const selectFeaturedProducts = createSelector(
  selectHomeState,
  state => state.featuredProducts
);

export const selectHomeLoading = createSelector(
  selectHomeState,
  state => state.loading
);

export const selectHomeError = createSelector(
  selectHomeState,
  state => state.error
);
