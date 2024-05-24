import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Course } from '../../model/course';
import { MatCardModule } from '@angular/material/card';
import { CoursesService } from './services/courses.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  providers: [ HttpClient ],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss'
})

export class TermsComponent {

  courses: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    private http: HttpClient,
  ) {
    this.courses = coursesService.list();
  }

  displayedColumns: string[] = ['name', 'category'];

}
