import { createSelector } from 'reselect';

const appSelector = (state) => state.appReducer;
export const selectLocaleSelector = createSelector(appSelector, (subState) =>
  subState.locale
);
