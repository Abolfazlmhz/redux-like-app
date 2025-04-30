import { createEntityAdapter } from "@reduxjs/toolkit";

export const messageAdapter = createEntityAdapter();
export const initialState = messageAdapter.getInitialState();
