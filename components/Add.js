import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const Add = ({ dispatch }) => {
  const [newTask, setNewTask] = useState('');


  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch({ type: 'ADD_TASK', title: newTask });
      setNewTask('');
    }
  };

  return (
    <View style={styles.addContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add new..."
        value={newTask}
        onChangeText={setNewTask}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'right',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Add;
