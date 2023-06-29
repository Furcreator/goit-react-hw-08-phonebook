import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    editFilter(_, { payload }) {
      console.log(payload);
      return payload;
    },
  },
});

export const { editFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
