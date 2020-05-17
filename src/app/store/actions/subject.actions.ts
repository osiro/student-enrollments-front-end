import { createAction, props } from '@ngrx/store';
import { Subject } from 'src/app/models/subject';

export const loadSubjectsActionKey = '[Subject] Load Subjects';
export const setSubjectsActionKey = '[Subject] Set Subjects';
export const setCurrentSubjectActionKey = '[Subject] Set Current Subject';

export const loadSubjects = createAction(loadSubjectsActionKey);
export const setSubjects = createAction(setSubjectsActionKey, props<{ subjects: Subject[]}>());
export const setCurrentSubject = createAction(setCurrentSubjectActionKey, props<{ code: string}>());
