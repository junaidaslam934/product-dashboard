import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  categories$: Observable<string[]>;
  selectedCategory$: Observable<string | null>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {
    this.products$ = this.store.select(ProductsSelectors.selectFilteredProducts);
    this.categories$ = this.store.select(ProductsSelectors.selectCategories);
    this.selectedCategory$ = this.store.select(ProductsSelectors.selectSelectedCategory);
    this.loading$ = this.store.select(ProductsSelectors.selectProductsLoading);
    this.error$ = this.store.select(ProductsSelectors.selectProductsError);
  }

  ngOnInit(): void {
    this.store.dispatch(ProductsActions.loadProducts());
  }

  onFilterByCategory(category: string): void {
    this.store.dispatch(ProductsActions.filterByCategory({ category }));
  }

  onClearFilter(): void {
    this.store.dispatch(ProductsActions.clearFilter());
  }

  onRetry(): void {
    this.store.dispatch(ProductsActions.loadProducts());
  }
}
