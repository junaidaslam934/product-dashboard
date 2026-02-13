import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs/operators';
import * as FavoritesActions from './favorites.actions';
import * as FavoritesSelectors from './favorites.selectors';
import { ToastService } from '../../../core/services/toast.service';

@Injectable()
export class FavoritesEffects {
  // Save to localStorage whenever favorites change
  saveFavorites$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          FavoritesActions.addToFavorites,
          FavoritesActions.removeFromFavorites,
          FavoritesActions.clearFavorites
        ),
        withLatestFrom(this.store.select(FavoritesSelectors.selectFavoriteItems)),
        tap(([, items]) => {
          try {
            localStorage.setItem('favorites', JSON.stringify(items));
          } catch (error) {
            console.error('Failed to save favorites to localStorage:', error);
          }
        })
      ),
    { dispatch: false }
  );

  // Show toast on add to favorites
  addToFavoritesToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FavoritesActions.addToFavorites),
        tap(({ product }) => {
          this.toastService.success(`${product.title} added to favorites! ❤️`);
        })
      ),
    { dispatch: false }
  );

  // Show toast on remove from favorites
  removeFromFavoritesToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FavoritesActions.removeFromFavorites),
        tap(() => {
          this.toastService.info('Removed from favorites 💔');
        })
      ),
    { dispatch: false }
  );

  // Show toast on clear favorites
  clearFavoritesToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FavoritesActions.clearFavorites),
        tap(() => {
          this.toastService.success('All favorites cleared! 🗑️');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private toastService: ToastService
  ) {}
}
