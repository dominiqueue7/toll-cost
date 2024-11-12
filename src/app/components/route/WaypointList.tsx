import React from 'react';
import { PlusCircle, XCircle } from 'lucide-react';

interface WaypointListProps {
  waypoints: string[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onChange: (index: number, value: string) => void;
}

export const WaypointList = ({
  waypoints,
  onAdd,
  onRemove,
  onChange
}: WaypointListProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Waypoints
        </label>
        {waypoints.length < 4 && (
          <button
            type="button"
            onClick={onAdd}
            className="text-blue-600 hover:text-blue-700 flex items-center text-sm
                     dark:text-blue-400 dark:hover:text-blue-300"
          >
            <PlusCircle className="w-4 h-4 mr-1" />
            Add Waypoint
          </button>
        )}
      </div>
      
      {waypoints.map((waypoint, index) => (
        <div key={index} className="flex gap-2">
          <input
            type="text"
            value={waypoint}
            onChange={(e) => onChange(index, e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:bg-gray-800 dark:border-gray-600 dark:text-white
                     dark:focus:ring-blue-400"
            placeholder={`Waypoint ${index + 1}`}
          />
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="text-red-600 hover:text-red-700
                     dark:text-red-400 dark:hover:text-red-300"
          >
            <XCircle className="w-6 h-6" />
          </button>
        </div>
      ))}
    </div>
  );
};
