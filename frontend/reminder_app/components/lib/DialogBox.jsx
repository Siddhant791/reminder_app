import React from "react";
import { Modal, View, Text, Button } from "react-native";

const DialogBox = ({ visible, onClose }) => {
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
            padding: 20,
            borderRadius: 10,
            width: 300,
            alignItems: "center",
          }}
        >
          <Text>Dialog Header</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            eligendi inventore, laboriosam laudantium minima minus nesciunt
            pariatur sequi.
          </Text>
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
