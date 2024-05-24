import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../../../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Course[]>(this.API);
    // [
    //   {_id: '1', name: 'Angular', category: 'Frontend' },
    //   {_id: '2', name: 'Node', category: 'Backend' },
    //   {_id: '3', name: 'MongoDB', category: 'Database' },
    //   {_id: '4', name: 'Express', category: 'Backend'},
    //   {_id: '5', name: 'React', category: 'Frontend'},
    //   {_id: '1', name: 'Angular', category: 'Frontend' },
    //   {_id: '2', name: 'Node', category: 'Backend' },
    //   {_id: '3', name: 'MongoDB', category: 'Database' },
    //   {_id: '4', name: 'Express', category: 'Backend'},
    //   {_id: '5', name: 'React', category: 'Frontend'}
    // ];
  }
}
