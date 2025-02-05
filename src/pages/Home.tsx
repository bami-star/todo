// Import necessary components from Ionic and React
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonList, IonItem, IonLabel, IonCheckbox } from '@ionic/react';
import React, { useState } from 'react';

const Home: React.FC = () => {
  // State to hold the current task input value
  const [task, setTask] = useState<string>('');

  // State to hold the list of tasks, each with a 'task' (text) and 'completed' (boolean) property
  const [tasks, setTasks] = useState<{ task: string; completed: boolean }[]>([]);

  // Function to add a new task
  const handleAddTask = () => {
    // Check if the task input is not empty
    if (task.trim() !== '') {
      // Add the task to the tasks array with 'completed' set to false by default
      setTasks([...tasks, { task, completed: true }]);
      // Clear the input field after adding the task
      setTask('');
    }
  };

  // Function to toggle the completion status of a task (mark as completed or not)
  const handleToggleCompletion = (index: number) => {
    // Create a copy of the tasks array
    const updatedTasks = [...tasks];
    // Toggle the 'completed' property of the task at the specified index
    updatedTasks[index].completed = !updatedTasks[index].completed;
    // Update the state with the modified tasks array
    setTasks(updatedTasks);
  };

  // Function to remove a task from the list
  const handleRemoveTask = (index: number) => {
    // Create a new array excluding the task at the specified index
    const updatedTasks = tasks.filter((_, i) => i !== index);
    // Update the state with the filtered tasks array
    setTasks(updatedTasks);
  };

  return (
    <IonPage>
      {/* IonHeader: Toolbar with title */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>To-Do List</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* IonContent: Main content area of the page */}
      <IonContent>
        {/* IonInput: Text input field for entering a new task */}
        <IonInput
          value={task} // The value of the input is controlled by the 'task' state
          onIonChange={(e) => setTask(e.detail.value!)} // Update 'task' state when the user types
          placeholder="Add a new task" // Placeholder text when the input is empty
        />
        {/* IonButton: Button to add a task when clicked */}
        <IonButton onClick={handleAddTask}>Add Task</IonButton>

        {/* IonList: Container for the list of tasks */}
        <IonList>
          {/* Loop through the tasks array to render each task */}
          {tasks.map((task, index) => (
            <IonItem key={index}>
              {/* IonCheckbox: Checkbox to toggle task completion */}
              <IonCheckbox
                checked={task.completed} // The checkbox is checked if the task is completed
                onIonChange={() => handleToggleCompletion(index)} // Toggle task completion on click
              />
              {/* IonLabel: Display the task text */}
              <IonLabel className={task.completed ? 'completed' : ''}>
                {task.task} {/* Display the task's name */}
              </IonLabel>
              {/* IonButton: Button to remove a task from the list */}
              <IonButton fill="clear" onClick={() => handleRemoveTask(index)}>
                Delete {/* Button text to delete the task */}
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
