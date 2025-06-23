import React from 'react';

export default function TodoHeader({ completedCount, totalCount }) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">colab's todo list</h1>
      <p className="text-gray-600">Stay organized and productive and blah blah</p>
      <div className="flex justify-center gap-4 mt-4 text-sm">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
          {completedCount} completed
        </span>
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
          {totalCount - completedCount} remaining
        </span>
      </div>
    </div>
  );
} 