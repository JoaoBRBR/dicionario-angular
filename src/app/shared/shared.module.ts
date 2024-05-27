import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';

@NgModule({
  imports: [CategoryPipe, ErrorDialogComponent],
  exports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule,
    CategoryPipe,
    ErrorDialogComponent,
    MatDialogModule,
  ],
})
export class SharedModule {}
