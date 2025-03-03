import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface HomeState {
  message: string;
}

const initialState: HomeState = {
  message: "Hello from Redux!",
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = homeSlice.actions;
export default homeSlice.reducer; 
