import React from 'react';

interface RouteInputProps {
  label: string;
  name: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const RouteInput = ({ 
  label, 
  name, 
  required = false, 
  value, 
  onChange,
  placeholder 
}: RouteInputProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
      </label>
      <input
        name={name}
        type="text"
        required={required}
        value={value}
        onChange={e => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 dark:bg-gray-800 dark:border-gray-600 dark:text-white
                 dark:focus:ring-blue-400"
      />
    </div>
  );
};
