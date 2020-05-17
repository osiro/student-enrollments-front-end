import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private endpoint = 'enrollments';

  constructor(private http: HttpClient) { }

  getCourses(code: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${environment.apiBaseUrl}/${this.endpoint}/${code}`)
      .pipe(
        catchError(this.handleError<Course[]>('getCourses', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
