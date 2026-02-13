import { createAction, props } from '@ngrx/store';
import { Hero, Product } from '../../../core/models';

// Hero Actions
export const loadHero = createAction('[Home] Load Hero');
export const loadHeroSuccess = createAction(
  '[Home] Load Hero Success',
  props<{ hero: Hero }>()
);
export const loadHeroFailure = createAction(
  '[Home] Load Hero Failure',
  props<{ error: string }>()
);

// Featured Products Actions
export const loadFeaturedProducts = createAction('[Home] Load Featured Products');
export const loadFeaturedProductsSuccess = createAction(
  '[Home] Load Featured Products Success',
  props<{ products: Product[] }>()
);
export const loadFeaturedProductsFailure = createAction(
  '[Home] Load Featured Products Failure',
  props<{ error: string }>()
);
