'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CUISINES = [
  { value: 'italian', label: 'Italian' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'indian', label: 'Indian' },
  { value: 'american', label: 'American' },
];

export function SearchForm() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [maxReadyTime, setMaxReadyTime] = useState('');

  const isFormValid = query.trim() !== '' || cuisine !== '' || maxReadyTime !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (query.trim()) params.append('query', query.trim());
    if (cuisine) params.append('cuisine', cuisine);
    if (maxReadyTime) params.append('maxReadyTime', maxReadyTime);

    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div>
        <label htmlFor="query" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Recipe Name
        </label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., pasta, chicken, salad"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        />
      </div>

      <div>
        <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Cuisine
        </label>
        <select
          id="cuisine"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        >
          <option value="">Select a cuisine</option>
          {CUISINES.map((cuisine) => (
            <option key={cuisine.value} value={cuisine.value}>
              {cuisine.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="maxReadyTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Maximum Preparation Time (minutes)
        </label>
        <input
          type="number"
          id="maxReadyTime"
          value={maxReadyTime}
          onChange={(e) => setMaxReadyTime(e.target.value)}
          min="1"
          placeholder="e.g., 30"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        />
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors ${
          isFormValid
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Search Recipes
      </button>
    </form>
  );
} 