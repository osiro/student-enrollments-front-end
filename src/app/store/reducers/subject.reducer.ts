import { createReducer, on } from '@ngrx/store';
import { Subject } from 'src/app/models/subject';
import { setSubjects, setCurrentSubject } from '../actions/subject.actions';

export const subjectFeatureKey = 'subjects';

export interface State {
  data: Subject[];
  currentSubjectCode?: string;
}

export const initialState: State = {
  data: [],
  currentSubjectCode: null
};

export const reducer = createReducer(
  initialState,
  on(setSubjects, (state, payload) => ({ ...state, data: payload.subjects })),
  on(setCurrentSubject, (state, payload) => ({ ...state, currentSubjectCode: payload.code }))
);

export const getSubjects = (state: State) => state.data;
export const getCurrentSubject = (state: State) => state.currentSubjectCode;
