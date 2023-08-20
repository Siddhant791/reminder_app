import { Text } from "@react-native-material/core";
import React from "react";
import { ListItem } from "@react-native-material/core";
import { useSelector } from "react-redux";

export const Reminder = ({title = "Testing",date}) => {

    return(
        <>
            <ListItem title={title} />
        </>
    )
}