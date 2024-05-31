import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule
  ],
})
export class SharedModule {}
