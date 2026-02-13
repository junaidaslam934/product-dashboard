import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../../../core/models';
import * as ProductsActions from '../../store/products.actions';
import * as ProductsSelectors from '../../store/products.selectors';
import * as FavoritesActions from '../../../favorites/store/favorites.actions';
import * as FavoritesSelectors from '../../../favorites/store/favorites.selectors';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product | null>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  isFavorite$: Observable<boolean> | undefined;
  isFavorite: boolean = false;
  productId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
    this.product$ = this.store.select(ProductsSelectors.selectSelectedProduct);
    this.loading$ = this.store.select(ProductsSelectors.selectProductsLoading);
    this.error$ = this.store.select(ProductsSelectors.selectProductsError);
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') || '';
    
    this.isFavorite$ = this.store.select(FavoritesSelectors.selectIsFavorite(this.productId));
    
    this.isFavorite$.subscribe(isFav => {
      this.isFavorite = isFav;
    });
    
    this.store.select(ProductsSelectors.selectProductById(this.productId))
      .subscribe(product => {
        if (!product) {
          this.store.dispatch(ProductsActions.loadProductById({ id: this.productId }));
        } else {
          this.store.dispatch(ProductsActions.loadProductByIdSuccess({ product }));
        }
      });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  onRetry(): void {
    this.store.dispatch(ProductsActions.loadProductById({ id: this.productId }));
  }

  onToggleFavorite(product: Product): void {
    if (this.isFavorite) {
      this.store.dispatch(FavoritesActions.removeFromFavorites({ productId: product.id }));
    } else {
      this.store.dispatch(FavoritesActions.addToFavorites({ product }));
    }
  }
}
