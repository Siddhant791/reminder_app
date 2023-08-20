import { Text } from '@react-native-material/core'
import React from 'react'
import { ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { Reminder } from './Reminder'

export const ListOfReminders = () => {
    const reminderList = useSelector((state) => state.reminders.reminderList)
    return(
        <>
        <ScrollView>
            {reminderList.map((reminder) => {
                console.log(reminder.month);
                return(
                <React.Fragment key={reminder.id}>
                    <Reminder title={reminder.message} />
                </React.Fragment>)
            })}
        </ScrollView>
        </>
    )
}