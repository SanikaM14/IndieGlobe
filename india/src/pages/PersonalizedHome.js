import React, { useState } from 'react';
import { getUsername, setUsername } from '../services/userService';

export default function PersonalizedHome() {
  const [name, setName] = useState(getUsername());

  const save = () => {
    if (name && name.trim()) setUsername(name.trim());
    alert('Preferences saved');
  };

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-2">Welcome, {name || 'Explorer of Indian Culture'}!</h1>
      <p className="mb-4">This page adapts to your preferences stored in cookies.</p>

      <div className="card p-4 bg-white shadow rounded">
        <label className="font-medium mb-1">Your Name</label>
        <input
          className="border p-2 w-full mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={save}>Save Preferences</button>
      </div>
    </div>
  );
}
