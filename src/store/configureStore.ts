import { configureStore } from '@reduxjs/toolkit'
import sections from './slices/sectionsSlice'

export const store = configureStore({
  reducer: {
    sections,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
