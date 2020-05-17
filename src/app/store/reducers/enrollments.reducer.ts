import { createReducer, on } from '@ngrx/store';
import { setEnrollments } from '../actions/enrollment.actions';
import { Course } from 'src/app/models/course';

export const enrollmentsFeatureKey = 'enrollments';

export interface State {
  data: Course[];
}

export const initialState: State = {
  data: []
};

export const reducer = createReducer(
  initialState,
  on(setEnrollments, (state, payload) => ({ ...state, data: payload.courses })),
);

export const getCourses = (state: State) => state.data;
