import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEnrollment from '../reducers/enrollments.reducer';

export const selectEnrollmentState = createFeatureSelector<fromEnrollment.State>(fromEnrollment.enrollmentsFeatureKey);
export const getCourses = createSelector(selectEnrollmentState, fromEnrollment.getCourses);
