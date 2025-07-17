import { useDispatch } from "react-redux";
import { AppDispatch } from "@/common/redux/store";

export function useAppDispatch() {
  return useDispatch<AppDispatch>();
}
