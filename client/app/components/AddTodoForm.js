import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function AddTodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState({ name: '', description: '' });

  const addTodo = () => {
    if (newTodo.name.trim()) {
      const todo = {
        id: Date.now(),
        name: newTodo.name.trim(),
        description: newTodo.description.trim(),
        completed: false
      };
      onAddTodo(todo);
      setNewTodo({ name: '', description: '' });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Todo</h2>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Todo name..."
            value={newTodo.name}
            onChange={(e) => setNewTodo({...newTodo, name: e.target.value})}
            onKeyPress={handleKeyPress}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <textarea
            placeholder="Description (optional)..."
            value={newTodo.description}
            onChange={(e) => setNewTodo({...newTodo, description: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none h-24"
          />
        </div>
        <button
          onClick={addTodo}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          Add Todo
        </button>
      </div>
    </div>
  );
} 