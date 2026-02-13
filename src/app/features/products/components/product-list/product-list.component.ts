import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../../../../core/models';
import * as ProductsActions from '../../store/products.actions';
import * as ProductsSelectors from '../../store/products.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  paginatedProducts$: Observable<Product[]>;
  categories$: Observable<string[]>;
  selectedCategory$: Observable<string | null>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  totalItems$: Observable<number>;

  currentPage = 1;
  itemsPerPage = 4;

  constructor(private store: Store) {
    this.products$ = this.store.select(ProductsSelectors.selectFilteredProducts);
    this.categories$ = this.store.select(ProductsSelectors.selectCategories);
    this.selectedCategory$ = this.store.select(ProductsSelectors.selectSelectedCategory);
    this.loading$ = this.store.select(ProductsSelectors.selectProductsLoading);
    this.error$ = this.store.select(ProductsSelectors.selectProductsError);
    
    this.totalItems$ = this.products$.pipe(
      map(products => products.length)
    );

    this.paginatedProducts$ = this.products$.pipe(
      map(products => {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return products.slice(startIndex, endIndex);
      })
    );
  }

  ngOnInit(): void {
    this.store.dispatch(ProductsActions.loadProducts());
  }

  onFilterByCategory(category: string): void {
    this.currentPage = 1;
    this.store.dispatch(ProductsActions.filterByCategory({ category }));
  }

  onClearFilter(): void {
    this.currentPage = 1;
    this.store.dispatch(ProductsActions.clearFilter());
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.paginatedProducts$ = this.products$.pipe(
      map(products => {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return products.slice(startIndex, endIndex);
      })
    );
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onRetry(): void {
    this.store.dispatch(ProductsActions.loadProducts());
  }
}
