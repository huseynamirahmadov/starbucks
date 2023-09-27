import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "../slice/contentSlice";

export const store = configureStore({
    reducer: {
        content: contentSlice
    }
})