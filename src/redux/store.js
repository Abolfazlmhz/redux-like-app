import { configureStore } from "@reduxjs/toolkit";
import { messageApi } from "./messageApi";

const store = configureStore({
  reducer: { [messageApi.reducerPath]: messageApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(messageApi.middleware),
});

export default store;
