import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice'
import reminderSlice from './slice/reminderSlice'

export default configureStore({
  reducer: {
    counter:counterReducer,
    reminders:reminderSlice
  }
})