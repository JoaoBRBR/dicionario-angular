import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../../../model/course';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Course[]>(this.API)
    .pipe(
      delay(6000)
    );
  }
}
