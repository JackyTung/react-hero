import { empty } from 'rxjs';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const slice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    getHeros: (state, action) => {},
  },
});

export const epics = {
  getHeros: (action$, state$, action) => {
    return empty();
  },
};

export const { getHeros } = slice.actions;

export default slice.reducer;
