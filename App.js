import React, { useReducer, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Add from './components/Add';
import TaskList from './components/Tasklist';

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), title: action.title }];
    case 'REMOVE_TASK':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

export default function App() {
  const initialTasks = [];
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);


  return (
    <View style={styles.container}>
      <Add dispatch={dispatch} />  {}
      
      <TaskList tasks={tasks} dispatch={dispatch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    width: '100%',
  },
  todoItem: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 18,
  },
});