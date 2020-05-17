import { createReducer, on } from '@ngrx/store';
import { showLoading, hidideLoading } from '../actions/loading.actions';

export const loadingFeatureKey = 'loading';

export interface State {
  show: boolean;
}

export const initialState: State = {
  show: false
};


export const reducer = createReducer(
  initialState,
  on(showLoading, (state) => ({ ...state, show: true })),
  on(hidideLoading, (state) => ({ ...state, show: false }))
);

export const showLoadingStatus = (state: State) => state.show;
