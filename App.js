import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ToDoList from './android/app/src/components/ToDoList';

export default function App() {
  // State management for tasks
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  return (
    <View style={styles.container}>
      <ToDoList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
