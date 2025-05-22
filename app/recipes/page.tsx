import { Suspense } from 'react';
import { RecipeList } from '@/components/RecipeList';

export const revalidate = 60; // Cache for 1 minute

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Search Results
        </h1>
        <Suspense fallback={<div className="text-center">Loading recipes...</div>}>
          <RecipeList />
        </Suspense>
      </main>
    </div>
  );
} 