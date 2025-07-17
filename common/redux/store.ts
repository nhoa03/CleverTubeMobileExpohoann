import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { rootReducer } from "./rootReducer";

// Tạo store mà không cần middleware Thunk
export const store = configureStore({
  reducer: rootReducer,
  // thunk đã được include mặc định, có thể loại bỏ nếu không dùng
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }),
});

// Define types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks cho Redux
export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
