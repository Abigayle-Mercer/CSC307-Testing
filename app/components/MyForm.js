import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const MyForm = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleInputChange1 = (text) => setInput1(text);
  const handleInputChange2 = (text) => setInput2(text);

  const handleSubmit = () => {
    console.log("Form submitted with inputs:", input1, input2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Input 1:</Text>
      <TextInput
        style={styles.input}
        placeholder="Input 1"
        placeholderTextColor="lightgrey"
        onChangeText={handleInputChange1}
        value={input1}
      />

      <Text style={styles.label}>Input 2:</Text>
      <TextInput
        style={styles.input}
        placeholder="Input 2"
        placeholderTextColor="lightgrey"
        onChangeText={handleInputChange2}
        value={input2}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    marginBottom: 4,
    color: "black", // You can customize label color if needed
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: "black", // You can customize input text color if needed
  },
});1                                                                                                                                

export default MyForm;
