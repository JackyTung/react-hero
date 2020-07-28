import { ofType } from 'redux-observable';

import { of } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';

import { createSlice } from '@reduxjs/toolkit';

import * as backend from '@/api/backend';

const initialState = { sources: [], loaded: false };

const slice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    getHeros: (state, action) => {},
    getHerosFulfilled: (state, action) => {
      const { response } = action.payload;
      state.sources = response;
      state.loaded = true;
    },
    getHerosCancelled: () => initialState,
    getHerosRejected: () => {},
  },
});

export const epics = {
  getHeros: (action$, state$, action) => {
    return backend.fetchHeros().pipe(
      map(response => getHerosFulfilled(response)),
      catchError(error => of(getHerosRejected(error))),
      takeUntil(action$.pipe(ofType(getHerosCancelled.type))),
    );
  },
};

export const { getHeros, getHerosFulfilled, getHerosCancelled, getHerosRejected } = slice.actions;

export default slice.reducer;
