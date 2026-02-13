import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductExistsGuard } from '../../core/guards';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { 
    path: ':id', 
    component: ProductDetailComponent,
    canActivate: [ProductExistsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
