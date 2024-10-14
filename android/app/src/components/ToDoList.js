import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <View style={styles.listContainer}>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.taskItem}>
          {task}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 20
  },
  taskItem: {
    margin: 10,
    fontSize: 16
  }
});

export default ToDoList;
