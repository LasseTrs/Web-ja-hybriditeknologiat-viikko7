import React from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const TaskList = ({ tasks, dispatch }) => {
  const renderTaskItem = ({ item }) => (
    <TouchableOpacity style={styles.todoItem} onPress={() => dispatch({ type: 'REMOVE_TASK', id: item.id })}>
      <Text style={styles.todoText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
    data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.todoList}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%', 
    marginTop: 20, 
  },
  taskContainer: {
    padding: 15,
  },
  taskText: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TaskList;