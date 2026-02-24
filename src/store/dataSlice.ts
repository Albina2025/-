import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { BaseItem } from '../types/dataTypes';

interface DataState {
  items: BaseItem[];
}

const initialState: DataState = {
  items: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<BaseItem>) => {
      state.items.push(action.payload);
    },
  },
});


export const { addItem } = dataSlice.actions;
export default dataSlice.reducer;

