import { createSlice } from '@reduxjs/toolkit'

export const reminderSlice = createSlice({
  name: 'reminders',
  initialState: {
    reminderList:[{
        "id": "1",
        "minute": "45",
        "hour": "22",
        "day": "16",
        "month": "8",
        "message":"Good morning chiku"
    },{
        "id": "2",
        "minute": "45",
        "hour": "22",
        "day": "16",
        "month": "8",
        "message":"Good morning kittu"
    }]
  },
  reducers: {
    addReminder: (state,action) => {
        state.reminderList.push(action.payload)
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { addReminder, decrement, incrementByAmount } = reminderSlice.actions

export default reminderSlice.reducer