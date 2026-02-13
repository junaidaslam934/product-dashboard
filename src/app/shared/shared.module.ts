import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ToastComponent } from './components/toast/toast.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    LoaderComponent,
    ErrorMessageComponent,
    ToastComponent,
    ConfirmationModalComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    LoaderComponent,
    ErrorMessageComponent,
    ToastComponent,
    ConfirmationModalComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
