import React, { useState } from 'react';
import { Trash2, Edit3, Save, X, Check } from 'lucide-react';

export default function TodoItem({ todo, onToggleComplete, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodo, setEditingTodo] = useState({ name: '', description: '' });

  const startEditing = () => {
    setIsEditing(true);
    setEditingTodo({ name: todo.name, description: todo.description });
  };

  const saveEdit = () => {
    if (editingTodo.name.trim()) {
      onUpdate(todo.id, {
        ...todo,
        name: editingTodo.name.trim(),
        description: editingTodo.description.trim()
      });
      setIsEditing(false);
      setEditingTodo({ name: '', description: '' });
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditingTodo({ name: '', description: '' });
  };

  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter') {
      action();
    }
  };

  if (isEditing) {
    return (
      <div className="bg-white border-2 border-blue-300 rounded-xl p-6">
        <div className="space-y-4">
          <input
            type="text"
            value={editingTodo.name}
            onChange={(e) => setEditingTodo({...editingTodo, name: e.target.value})}
            onKeyPress={(e) => handleKeyPress(e, saveEdit)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <textarea
            value={editingTodo.description}
            onChange={(e) => setEditingTodo({...editingTodo, description: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-24"
          />
          <div className="flex gap-2">
            <button
              onClick={saveEdit}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <Save size={16} />
              Save
            </button>
            <button
              onClick={cancelEdit}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <X size={16} />
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white border-2 rounded-xl p-6 transition-all ${
        todo.completed 
          ? 'border-green-200 bg-green-50' 
          : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
      }`}
    >
      <div className="flex items-start gap-4">
        <button
          onClick={() => onToggleComplete(todo.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all ${
            todo.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-blue-500'
          }`}
        >
          {todo.completed && <Check size={16} className="mx-auto" />}
        </button>
        
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold text-lg ${
            todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
          }`}>
            {todo.name}
          </h3>
          {todo.description && (
            <p className={`mt-2 ${
              todo.completed ? 'line-through text-gray-400' : 'text-gray-600'
            }`}>
              {todo.description}
            </p>
          )}
        </div>
        
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={startEditing}
            className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
            title="Edit todo"
          >
            <Edit3 size={18} />
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
            title="Delete todo"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
} 