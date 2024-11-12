'use client'
import React, { useState, FormEvent } from 'react';
import { PlusCircle, XCircle } from 'lucide-react';

interface FormData {
  start: string;
  waypoints: string[];
  end: string;
}

const Home = () => {
  const [waypoints, setWaypoints] = useState(['']);
  
  const handleAddWaypoint = (): void => {
    if (waypoints.length < 4) {
      setWaypoints([...waypoints, '']);
    }
  };

  const handleRemoveWaypoint = (index: number): void => {
    const newWaypoints = waypoints.filter((_, i) => i !== index);
    setWaypoints(newWaypoints);
  };

  const handleWaypointChange = (index: number, value: string): void => {
    const newWaypoints = [...waypoints];
    newWaypoints[index] = value;
    setWaypoints(newWaypoints);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = {
      startPoint: (e.currentTarget.elements.namedItem('start') as HTMLInputElement).value,
      waypoints: waypoints.filter(wp => wp.trim() !== ''),
      endPoint: (e.currentTarget.elements.namedItem('end') as HTMLInputElement).value
    };
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Start Point
          </label>
          <input
            name="start"
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:bg-gray-800 dark:border-gray-600 dark:text-white
                     dark:focus:ring-blue-400"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Waypoints
            </label>
            {waypoints.length < 4 && (
              <button
                type="button"
                onClick={handleAddWaypoint}
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
                onChange={(e) => handleWaypointChange(index, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         dark:bg-gray-800 dark:border-gray-600 dark:text-white
                         dark:focus:ring-blue-400"
                placeholder={`Waypoint ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => handleRemoveWaypoint(index)}
                className="text-red-600 hover:text-red-700
                         dark:text-red-400 dark:hover:text-red-300"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            End Point
          </label>
          <input
            name="end"
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:bg-gray-800 dark:border-gray-600 dark:text-white
                     dark:focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md 
                   hover:bg-blue-700 focus:outline-none focus:ring-2 
                   focus:ring-blue-500 focus:ring-offset-2
                   dark:bg-blue-500 dark:hover:bg-blue-600
                   dark:focus:ring-blue-400 dark:focus:ring-offset-gray-800"
        >
          Save Route
        </button>
      </form>
    </div>
  );
};

export default Home;