import { createAction, props } from '@ngrx/store';

export const showLoadingActionKey = '[Loading] Show';
export const hideLoadingActionKey = '[Loading] Hide';

export const showLoading = createAction(showLoadingActionKey);
export const hidideLoading = createAction(hideLoadingActionKey);
