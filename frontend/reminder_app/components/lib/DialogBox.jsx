import { useTheme } from "@react-native-material/core";
import React, { useState } from "react";
import { Modal, View, Text, Button } from "react-native";

import RNPickerSelect from 'react-native-picker-select';


const DialogBox = ({ visible, onClose }) => {
    const theme  = useTheme()
    const [selectedOption1, setSelectedOption1] = useState(null);
    const options1 = [
        { label: 'Option 1.1', value: 'option1.1' },
        { label: 'Option 1.2', value: 'option1.2' },
        { label: 'Option 1.3', value: 'option1.3' },
      ];
    return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            // padding: 20,
            borderRadius: 10,
            width: 300,
            alignItems: "center",
          }}
        >
        <View
          style={{
            backgroundColor: "yellow",
            padding: 20,
            borderRadius: 10,
            width: 300,
            alignItems: "left",
          }}
        >
          <Text>New reminder</Text>
        </View>
          {/* <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            eligendi inventore, laboriosam laudantium minima minus nesciunt
            pariatur sequi.
            lor
          </Text> */}
        <RNPickerSelect
          placeholder={{ label: 'Select Option 1', value: null }}
          onValueChange={(value) => setSelectedOption1(value)}
          items={options1}
          value={selectedOption1}
        />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            <Button title="Cancel" onPress={onClose} />
            <Button title="Ok" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DialogBox;
