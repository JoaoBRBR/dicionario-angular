import { Component } from '@angular/core';
import { Course } from '../../model/course';
import { CoursesService } from './services/courses.service';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/error-dialog/error-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [SharedModule, CommonModule],
  providers: [HttpClient],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss',
})
export class TermsComponent {
  public courses: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    private http: HttpClient,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.courses = coursesService.list().pipe(
      catchError((error) => {
        console.error('Error loading courses', error);
        this.onError('Error loading courses: ' + error.message);
        return of([]);
      })
    );
  }

  displayedColumns: string[] = ['name', 'category', 'actions'];

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, { data: errorMessage });
  }

  onAdd(){
    this.router.navigate(['/new']);
  }
}
