import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/models/course';

export const loadEnrollmentsActionKey = '[Enrollments] Load Enrollments';
export const setEnrollmentsActionKey = '[Enrollments] Set Enrollments';

export const loadEnrollments = createAction(loadEnrollmentsActionKey, props<{ subjectCode: string }>());
export const setEnrollments = createAction(setEnrollmentsActionKey, props<{ courses: Course[]}>());
