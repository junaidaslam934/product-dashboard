import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, switchMap, take } from 'rxjs/operators';
import * as ProductsSelectors from '../../features/products/store/products.selectors';
import * as ProductsActions from '../../features/products/store/products.actions';

@Injectable({
  providedIn: 'root'
})
export class ProductExistsGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const productId = route.paramMap.get('id');
    
    if (!productId) {
      this.router.navigate(['/products']);
      return of(false);
    }

    return this.checkStore(productId).pipe(
      switchMap(inStore => {
        if (inStore) {
          return of(true);
        }
        
        this.store.dispatch(ProductsActions.loadProductById({ id: productId }));
        return this.waitForProductToLoad(productId);
      }),
      catchError(() => {
        this.router.navigate(['/products']);
        return of(false);
      })
    );
  }

  private checkStore(productId: string): Observable<boolean> {
    return this.store.select(ProductsSelectors.selectProductById(productId)).pipe(
      map(product => !!product),
      take(1)
    );
  }

  private waitForProductToLoad(productId: string): Observable<boolean> {
    return this.store.select(ProductsSelectors.selectProductById(productId)).pipe(
      map(product => !!product),
      tap(exists => {
        if (!exists) {
          this.router.navigate(['/products']);
        }
      }),
      take(1)
    );
  }
}
