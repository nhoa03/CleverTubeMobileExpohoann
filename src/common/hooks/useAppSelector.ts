import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@/common/redux/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
