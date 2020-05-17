import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromRootReducer from '../reducers';

export const selectRouter = createFeatureSelector<
  fromRootReducer.State,
  fromRouter.RouterReducerState<any>>(fromRootReducer.routerFeatureKey);

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouter);

export const selectIsRoot = createSelector(selectUrl, (path: string) => {
  if (!path) { return false; }

  const rootPathExp = new RegExp(/(^\/$|^\/\?\S*$|^\/#\S*$)/, 'gs');
  return rootPathExp.exec(path) !== null;
});
