'use client';
import React, { useState, useEffect } from 'react';
import TodoHeader from './components/TodoHeader';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import todosData from './data/todos.json';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(todosData);
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => 
      todo.id === id ? updatedTodo : todo
    ));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <TodoHeader completedCount={completedCount} totalCount={totalCount} />
          
          <AddTodoForm onAddTodo={addTodo} />
          
          <TodoList
            todos={todos}
            onToggleComplete={toggleComplete}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        </div>
      </div>
    </div>
  );
}