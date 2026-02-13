import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { ContentfulService } from '../../../core/services/contentful.service';
import * as HomeActions from './home.actions';

@Injectable()
export class HomeEffects {
  loadHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.loadHero),
      switchMap(() =>
        this.contentfulService.getHeroSection().pipe(
          map(hero => HomeActions.loadHeroSuccess({ hero })),
          catchError(error =>
            of(HomeActions.loadHeroFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadFeaturedProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.loadFeaturedProducts),
      switchMap(() =>
        this.contentfulService.getFeaturedProducts().pipe(
          map(products => HomeActions.loadFeaturedProductsSuccess({ products })),
          catchError(error =>
            of(HomeActions.loadFeaturedProductsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private contentfulService: ContentfulService
  ) {}
}
