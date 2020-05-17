import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, act } from '@ngrx/effects';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { EMPTY, concat, of } from 'rxjs';
import { setEnrollmentsActionKey } from '../actions/enrollment.actions';
import { setCurrentSubject } from '../actions/subject.actions';
import { showLoadingActionKey, hideLoadingActionKey } from '../actions/loading.actions';

@Injectable()
export class EnrollmentEffects {
  constructor(
    private actions$: Actions,
    private enrollmentService: EnrollmentService
  ) {}

  loadEnrollments$ = createEffect(() => this.actions$.pipe(
    ofType(setCurrentSubject),
    concatMap(action => concat(
      of({ type: showLoadingActionKey }),
      this.enrollmentService.getCourses(action.code).pipe(
        map(courses => ({ type: setEnrollmentsActionKey, courses })),
        catchError(() => EMPTY)
      ),
      of({ type: hideLoadingActionKey }))
    )),
  );
}
