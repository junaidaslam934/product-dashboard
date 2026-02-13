import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService, Toast } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {
  toasts: (Toast & { id: number })[] = [];
  private subscription?: Subscription;
  private idCounter = 0;

  constructor(
    private toastService: ToastService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.toastService.toast$.subscribe(toast => {
      const id = this.idCounter++;
      const toastWithId = { ...toast, id };
      this.toasts.push(toastWithId);
      this.cdr.detectChanges();

      setTimeout(() => {
        this.removeToast(id);
      }, toast.duration || 3000);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  removeToast(id: number): void {
    this.toasts = this.toasts.filter(t => t.id !== id);
    this.cdr.detectChanges();
  }
}
