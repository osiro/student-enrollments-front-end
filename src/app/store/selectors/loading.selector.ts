import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLoading from '../reducers/loading.reducer';

export const selectLoadingState = createFeatureSelector<fromLoading.State>(fromLoading.loadingFeatureKey);
export const getStatus = createSelector(selectLoadingState, fromLoading.showLoadingStatus);
