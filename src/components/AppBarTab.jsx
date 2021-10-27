import React from "react";

import { Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({ title }) => {
    return (
        <Text fontWeight='bold' fontSize='subheading' style={{ color: 'white', padding: 20 }}>{title}</Text>
    );
};

export default AppBarTab;