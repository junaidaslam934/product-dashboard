import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../../../core/models';
import * as HomeActions from '../../store/home.actions';
import * as HomeSelectors from '../../store/home.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  featuredProducts$: Observable<Product[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {
    this.featuredProducts$ = this.store.select(HomeSelectors.selectFeaturedProducts);
    this.loading$ = this.store.select(HomeSelectors.selectHomeLoading);
    this.error$ = this.store.select(HomeSelectors.selectHomeError);
  }

  ngOnInit(): void {
    this.store.dispatch(HomeActions.loadFeaturedProducts());
  }

  onRetry(): void {
    this.store.dispatch(HomeActions.loadFeaturedProducts());
  }
}
