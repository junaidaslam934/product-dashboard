import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectAllProducts = createSelector(
  selectProductsState,
  state => state.products
);

export const selectFilteredProducts = createSelector(
  selectProductsState,
  state => state.filteredProducts
);

export const selectSelectedProduct = createSelector(
  selectProductsState,
  state => state.selectedProduct
);

export const selectSelectedCategory = createSelector(
  selectProductsState,
  state => state.selectedCategory
);

export const selectProductsLoading = createSelector(
  selectProductsState,
  state => state.loading
);

export const selectProductsError = createSelector(
  selectProductsState,
  state => state.error
);

export const selectCategories = createSelector(
  selectAllProducts,
  products => {
    const categories = products.map(p => p.category);
    return Array.from(new Set(categories)).sort();
  }
);

export const selectProductById = (id: string) => createSelector(
  selectAllProducts,
  products => products.find(p => p.id === id)
);
