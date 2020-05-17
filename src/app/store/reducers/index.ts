import {
  ActionReducerMap,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import { InjectionToken } from '@angular/core';
import * as fromSubject from './subject.reducer';
import * as fromEnrollments from './enrollments.reducer';
import * as fromLoading from './loading.reducer';

export const routerFeatureKey = 'router';

export interface State {
  [routerFeatureKey]: fromRouter.RouterReducerState<any>;
  [fromSubject.subjectFeatureKey]: fromSubject.State;
  [fromEnrollments.enrollmentsFeatureKey]: fromEnrollments.State;
  [fromLoading.loadingFeatureKey]: fromLoading.State;
}

export const reducers = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers token', {
  factory: () => ({
    [routerFeatureKey]: fromRouter.routerReducer,
    [fromSubject.subjectFeatureKey]: fromSubject.reducer,
    [fromEnrollments.enrollmentsFeatureKey]: fromEnrollments.reducer,
    [fromLoading.loadingFeatureKey]: fromLoading.reducer
  }),
});

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
