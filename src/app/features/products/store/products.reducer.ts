import { createReducer, on } from '@ngrx/store';
import { Product } from '../../../core/models';
import * as ProductsActions from './products.actions';

export interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  selectedProduct: Product | null;
  selectedCategory: string | null;
  loading: boolean;
  error: string | null;
}

export const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  selectedProduct: null,
  selectedCategory: null,
  loading: false,
  error: null
};

export const productsReducer = createReducer(
  initialState,
  
  on(ProductsActions.loadProducts, state => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(ProductsActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    filteredProducts: products,
    loading: false
  })),
  
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  on(ProductsActions.loadProductById, state => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(ProductsActions.loadProductByIdSuccess, (state, { product }) => ({
    ...state,
    selectedProduct: product,
    loading: false
  })),
  
  on(ProductsActions.loadProductByIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  on(ProductsActions.filterByCategory, (state, { category }) => ({
    ...state,
    selectedCategory: category,
    filteredProducts: state.products.filter(p => p.category === category)
  })),
  
  on(ProductsActions.clearFilter, state => ({
    ...state,
    selectedCategory: null,
    filteredProducts: state.products
  }))
);
