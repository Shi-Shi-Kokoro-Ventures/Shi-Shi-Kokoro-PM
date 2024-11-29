import React, { memo } from 'react';
import { Calendar, Users } from 'lucide-react';

const TaskItem = memo(function TaskItem({ task, date, status, assignee }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">{task}</span>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {date}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" /> {assignee}
          </span>
        </div>
      </div>
      <span
        className={`px-2 py-1 text-xs rounded-full ${
          status === 'pending'
            ? 'bg-yellow-100 text-yellow-800'
            : status === 'confirmed'
            ? 'bg-green-100 text-green-800'
            : 'bg-blue-100 text-blue-800'
        }`}
      >
        {status}
      </span>
    </div>
  );
});

export default TaskItem;
