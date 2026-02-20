import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../store";

// Typed selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
