import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSubject from '../reducers/subject.reducer';

export const selectSubjectState = createFeatureSelector<fromSubject.State>(fromSubject.subjectFeatureKey);
export const getSubjects = createSelector(selectSubjectState, fromSubject.getSubjects);
export const getCurrentSubject = createSelector(selectSubjectState, fromSubject.getCurrentSubject);
