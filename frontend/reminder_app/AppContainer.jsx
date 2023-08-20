import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppBar, Button, Chip, FAB} from "@react-native-material/core";
import FloatingActionButton from './components/lib/FloatingActionButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ListOfReminders } from './components/lib/ListOfReminders';
import { addReminder } from './redux/slice/reminderSlice';
import { generateUUID } from './utils/utilityFunctions';
import DialogBox from './components/lib/DialogBox';

export default function AppContainer() {

  const dispatch = useDispatch();
  const [visible,setVisible] = useState(false)

  const onClickFabButton = () => {
    setVisible(true)
    const payload = {
      "id": generateUUID().toString(),
      "minute": "45",
      "hour": "22",
      "day": "16",
      "month": "9",
      "message":"Good morning Siddhant"+generateUUID().toString()
  }
    dispatch(addReminder(payload))
  }

  const onCloseModal = () => {
    setVisible(false)
  }

  return (
    <>
      <DialogBox visible={visible} onClose = {onCloseModal}/>
      {/* <ReminderModal visible={visible} onClose = {onCloseModal}/> */}
      <SafeAreaView>
        <AppBar title="Reminder App" />
          <ListOfReminders/>
      </SafeAreaView>
      <FloatingActionButton onClickFabButton={onClickFabButton}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
