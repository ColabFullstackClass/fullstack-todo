import React from 'react';
import { Check } from 'lucide-react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggleComplete, onDelete, onUpdate }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <Check size={48} className="mx-auto" />
        </div>
        <p className="text-gray-500 text-lg">No todos yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
} 