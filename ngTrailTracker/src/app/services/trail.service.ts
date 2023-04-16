import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trail } from '../models/trail';
import { Observable, catchError, throwError } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class TrailService {
  private baseUrl = 'http://localhost:8085/';
  private url = this.baseUrl + 'api/trails';

  // *METHODS
  // *getTrails() is a method that calls the trailService to retrieve all the trails
  // *createTrail() is a method that adds a new trail to the database
  // *updateTrail() is a method that updates a trail in the database
  // *destroyTrail() is a method that deletes a trail from the database

  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  getTrails(): Observable<Trail[]> {
    return this.http.get<Trail[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'TrailService.getTrails(): error retrieving Trails: ' + err
            )
        );
      })
    );
  }

  createTrail(trail: Trail): Observable<Trail> {
    return this.http.post<Trail>(this.url, trail).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'TrailService.createTrail(): error creating Trail: ' + err
            )
        );
      })
    );
  }

  updateTrail(trail: Trail): Observable<Trail> {
    // if (trail.completed) {
    //   this.datePipe.transform(Date.now(), 'shortDate');
    // } else {
    //   trail.completeDate = '';
    // }
    return this.http.put<Trail>(this.url + '/' + trail.id, trail).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'TrailService.updateTrail(): error updating Trail: ' + err
            )
        );
      })
    );
  }

  destroyTrail(trailId: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + trailId).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('TrailService.destroy(): error deleting Trail: ' + err)
        );
      })
    );
  }
}
