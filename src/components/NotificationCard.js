import React, { memo } from 'react';
import { AlertCircle, Clock, MapPin } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';

const NotificationCard = memo(function NotificationCard({ title, description, priority, timestamp, location }) {
  return (
    <Alert
      className={`${
        priority === 'high'
          ? 'border-red-500 bg-red-50'
          : priority === 'medium'
          ? 'border-yellow-500 bg-yellow-50'
          : 'border-blue-500 bg-blue-50'
      } transition-all duration-300 hover:shadow-md`}
    >
      <div className="flex justify-between items-start">
        <div>
          <AlertTitle className="flex items-center gap-2">
            {title}
            {priority === 'high' && <AlertCircle className="h-4 w-4 text-red-500" />}
          </AlertTitle>
          <AlertDescription>{description}</AlertDescription>
          <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {timestamp}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {location}
            </span>
          </div>
        </div>
      </div>
    </Alert>
  );
});

export default NotificationCard;
