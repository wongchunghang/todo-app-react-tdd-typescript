import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App'; // Adjust the path as necessary


describe('App Component', () => {
  test('renders Todo App heading', () => {
    render(<App />);
    expect(screen.getByText('Todo App')).toBeInTheDocument();
  });

  test('renders form elements', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Enter a new task')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  test('renders list elements', () => {
    const todos = [{ id: 1, name: 'Test Todo' }];
    render(<App todos={todos} />);
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.getByText('Edit')).toBeInTheDocument();
  });

  /*
  test('adds a new todo', () => {
    render(<App />);
  
    // Simulate user input
    const input = screen.getByPlaceholderText('Enter a new task');
    fireEvent.change(input, { target: { value: 'New Task' } });
  
    // Simulate form submission
    const addButton = screen.getByRole('button', { name: /add todo/i });
    fireEvent.click(addButton);
  
    // Check if the new todo is added
    const newTodo = screen.getByText('New Task');
    expect(newTodo).toBeInTheDocument();
  });
    */
/*  
  test('adds a new todo', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Enter a new task'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });
/*
  test('deletes a todo', () => {
    const todos = [{ id: 1, name: 'Test Todo' }];
    render(<App todos={todos} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText('Test Todo')).not.toBeInTheDocument();
  });

  test('edits a todo', () => {
    render(<App />);
    const editButton = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'button' && content.includes('Edit');
    });
    expect(editButton).toBeInTheDocument();
  });
  
  test('edits a todo', () => {
    const todos = [{ id: 1, name: 'Test Todo' }];
    render(<App todos={todos} />);
  
    // Use a custom matcher function to find the 'Edit' button
    const editButton = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'button' && content.includes('Edit');
    });
    fireEvent.click(editButton);
  
    // Find the input field by its placeholder text
    const inputField = screen.getByPlaceholderText('Update task name');
    fireEvent.change(inputField, { target: { value: 'Updated Todo' } });
  
    // Find the 'Update' button and click it
    const updateButton = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'button' && content.includes('Update');
    });
    fireEvent.click(updateButton);
  
    // Check if the updated todo is in the document
    expect(screen.getByText('Updated Todo')).toBeInTheDocument();
  });
  */
});
