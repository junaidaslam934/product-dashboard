import { createReducer, on } from '@ngrx/store';
import { Hero, Product } from '../../../core/models';
import * as HomeActions from './home.actions';

export interface HomeState {
  hero: Hero | null;
  featuredProducts: Product[];
  loading: boolean;
  error: string | null;
}

export const initialState: HomeState = {
  hero: null,
  featuredProducts: [],
  loading: false,
  error: null
};

export const homeReducer = createReducer(
  initialState,
  
  // Hero
  on(HomeActions.loadHero, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(HomeActions.loadHeroSuccess, (state, { hero }) => ({
    ...state,
    hero,
    loading: false
  })),
  on(HomeActions.loadHeroFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
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
