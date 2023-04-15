import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrailTracker } from '../models/trail-tracker';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrailTrackerService {
  private baseUrl = 'http://localhost:8085/';
  private url = this.baseUrl + 'api/trails'; // FIXME:

  constructor(private http: HttpClient) {}

  index(): Observable<TrailTracker[]> {
    return this.http.get<TrailTracker[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'TrailTrackerService.index(): error retrieving Trails: ' + err
            )
        );
      })
    );
  }
}
