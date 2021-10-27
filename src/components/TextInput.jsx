import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({

});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = error ? { ...style, borderColor: '#d73a4a' } : [style];
    
    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;