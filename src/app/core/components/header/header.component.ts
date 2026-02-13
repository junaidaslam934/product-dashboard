import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as FavoritesSelectors from '../../../features/favorites/store/favorites.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  favoritesCount$: Observable<number>;

  constructor(private store: Store) {
    this.favoritesCount$ = this.store.select(FavoritesSelectors.selectFavoritesCount);
  }
}
