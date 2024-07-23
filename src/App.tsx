// src/App.tsx
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Button, Input, List } from 'antd';
import useForm from './hooks/useForm';

interface Todo {
  id: number;
  name: string;
}

function App({ todos: initialTodos }: any) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos || []);
  const { data, handleChange } = useForm({ name: '' });
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState('');
  
  useEffect(() => {
    getTodos();
  }, []);
  
  const addTodo = async () => {
    if (data.name.trim()) {
      try {
        const response = await fetch('http://localhost:3000/api/todos', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: data.name }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const newTodo = await response.json();
        setTodos((prevTodos) => [...prevTodos, newTodo]);

        // Clear input field
        handleChange('name')(mockEvent);
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  };

  const updateTodo = async (id: number, newName: string) => {
    if (newName.trim()) {
      try {
        const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
          method: 'PUT',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: newName }),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const updatedTodo = await response.json();
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
        );
  
        // Clear input field if necessary
        handleChange('name')(mockEvent);
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    }
  };
 

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/todos', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const todos = await response.json();
      console.log(todos);
      setTodos(todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };
  
  const deleteTodo = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const deleteTodo = await response.json();
      console.log(deleteTodo);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

      // Clear input field if necessary
      handleChange('name')(mockEvent);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const mockEvent = {
    target: {
      value: ''
    },
    // Add the necessary properties to match EventTarget & HTMLInputElement
    preventDefault: () => {},
    stopPropagation: () => {},
    currentTarget: {
      value: ''
    }
  } as ChangeEvent<HTMLInputElement>;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Assuming you have a value from your form input
    //const todoText = data.name; // Adjust this based on your actual input field

    // Call the addTodo function with the todo name
    addTodo();

    // Clear the input field (if needed)
    handleChange('name')(mockEvent);
  };

  const toggleEdit = (id: any, currentName: string) => {
    setEditingId(id);
    setNewName(currentName);
  };

  const handleEditChange = (e: any) => {
    setNewName(e.target.value);
  };

  const handleEditSubmit = (id: number) => {
    updateTodo(id, newName);
    setEditingId(null);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          value={data.name}
          onChange={handleChange('name')}
          placeholder="Enter a new task"
          required
        />
        <Button type="primary" htmlType="submit">
          Add Todo
        </Button>
      </form>
      <List
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item key={todo.id}>
            {todo.name}
            <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
            {editingId === todo.id ? (
              <>
                <Input
                  type="text"
                  value={newName}
                  onChange={handleEditChange}
                  placeholder="Update task name"
                  required
                />
                <Button onClick={() => handleEditSubmit(todo.id)}>Update</Button>
                <Button onClick={() => setEditingId(null)}>Cancel</Button>
              </>
            ) : (
              <Button onClick={() => toggleEdit(todo.id, todo.name)}>Edit</Button>
            )}
          </List.Item>
        )}
      />
    </div>
  );
};

export default App;
