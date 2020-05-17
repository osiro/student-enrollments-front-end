import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SubjectService } from 'src/app/services/subject.service';
import { switchMap, map, catchError, concatMap, finalize } from 'rxjs/operators';
import { EMPTY, concat, of } from 'rxjs';
import { loadSubjectsActionKey, setSubjectsActionKey } from '../actions/subject.actions';
import { showLoadingActionKey, hideLoadingActionKey } from '../actions/loading.actions';

@Injectable()
export class SubjectEffects {
  constructor(
    private actions$: Actions,
    private subjectService: SubjectService
  ) {}

  loadSubjects$ = createEffect(() => this.actions$.pipe(
    ofType(loadSubjectsActionKey),
    concatMap(action => concat(
      of({ type: showLoadingActionKey }),
      this.subjectService.getSubjects().pipe(
        map(subjects => ({ type: setSubjectsActionKey, subjects })),
        catchError(() => EMPTY)
      ),
      of({ type: hideLoadingActionKey }))
    )
    )
  );
}
