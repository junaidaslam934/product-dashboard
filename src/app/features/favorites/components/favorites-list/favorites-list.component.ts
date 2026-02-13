import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../../../core/models';
import * as FavoritesActions from '../../store/favorites.actions';
import * as FavoritesSelectors from '../../store/favorites.selectors';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit {
  favorites$: Observable<Product[]>;
  favoritesCount$: Observable<number>;
  showConfirmation = false;

  constructor(private store: Store) {
    this.favorites$ = this.store.select(FavoritesSelectors.selectFavoriteItems);
    this.favoritesCount$ = this.store.select(FavoritesSelectors.selectFavoritesCount);
  }

  ngOnInit(): void {
    // Favorites are already loaded in app.component.ts on app start
  }

  onRemoveFromFavorites(productId: string): void {
    this.store.dispatch(FavoritesActions.removeFromFavorites({ productId }));
  }

  onClearAll(): void {
    this.showConfirmation = true;
  }

  onConfirmClear(): void {
    this.store.dispatch(FavoritesActions.clearFavorites());
    this.showConfirmation = false;
  }

  onCancelClear(): void {
    this.showConfirmation = false;
  }
}
