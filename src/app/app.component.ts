import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FavoritesActions from './features/favorites/store/favorites.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'product-dashboard';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(FavoritesActions.loadFavoritesFromStorage());
  }
}
