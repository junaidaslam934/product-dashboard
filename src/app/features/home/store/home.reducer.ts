import { createReducer, on } from '@ngrx/store';
import { Product } from '../../../core/models';
import * as HomeActions from './home.actions';

export interface HomeState {
  featuredProducts: Product[];
  loading: boolean;
  error: string | null;
}

export const initialState: HomeState = {
  featuredProducts: [],
  loading: false,
  error: null
};

export const homeReducer = createReducer(
  initialState,
  
  // Featured Products
  on(HomeActions.loadFeaturedProducts, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(HomeActions.loadFeaturedProductsSuccess, (state, { products }) => ({
    ...state,
    featuredProducts: products,
    loading: false
  })),
  on(HomeActions.loadFeaturedProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
