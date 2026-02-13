import { createAction, props } from '@ngrx/store';
import { Product } from '../../../core/models';

export const loadProducts = createAction('[Products] Load Products');

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);

export const loadProductById = createAction(
  '[Products] Load Product By ID',
  props<{ id: string }>()
);

export const loadProductByIdSuccess = createAction(
  '[Products] Load Product By ID Success',
  props<{ product: Product }>()
);

export const loadProductByIdFailure = createAction(
  '[Products] Load Product By ID Failure',
  props<{ error: string }>()
);

export const filterByCategory = createAction(
  '[Products] Filter By Category',
  props<{ category: string }>()
);

export const clearFilter = createAction('[Products] Clear Filter');
