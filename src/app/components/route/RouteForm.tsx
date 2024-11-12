'use client'
import React, { useState, FormEvent } from 'react';
import { RouteInput } from './RouteInput';
import { WaypointList } from './WaypointList';

interface FormData {
  startPoint: string;
  waypoints: string[];
  endPoint: string;
}

export const RouteForm = () => {
  const [waypoints, setWaypoints] = useState(['']);
  
  const handleAddWaypoint = () => {
    if (waypoints.length < 4) {
      setWaypoints([...waypoints, '']);
    }
  };

  const handleRemoveWaypoint = (index: number) => {
    const newWaypoints = waypoints.filter((_, i) => i !== index);
    setWaypoints(newWaypoints);
  };

  const handleWaypointChange = (index: number, value: string) => {
    const newWaypoints = [...waypoints];
    newWaypoints[index] = value;
    setWaypoints(newWaypoints);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = {
      startPoint: (e.currentTarget.elements.namedItem('start') as HTMLInputElement).value,
      waypoints: waypoints.filter(wp => wp.trim() !== ''),
      endPoint: (e.currentTarget.elements.namedItem('end') as HTMLInputElement).value
    };
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <RouteInput
          label="Start Point"
          name="start"
          required
        />
        
        <WaypointList
          waypoints={waypoints}
          onAdd={handleAddWaypoint}
          onRemove={handleRemoveWaypoint}
          onChange={handleWaypointChange}
        />

        <RouteInput
          label="End Point"
          name="end"
          required
        />

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