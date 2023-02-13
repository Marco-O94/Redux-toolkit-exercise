import { createAction } from "@reduxjs/toolkit";

// This is a standalone action, we can use it in multiple slices
export const reset = createAction("app/reset");
