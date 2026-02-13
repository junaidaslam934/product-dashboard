import { createAction, props } from '@ngrx/store';
import { Product } from '../../../core/models';

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
