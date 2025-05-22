import { Suspense } from 'react';
import { RecipeDetails } from '@/components/RecipeDetails';

export const revalidate = 60; // Cache for 1 minute

export default function RecipePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<div className="text-center">Loading recipe details...</div>}>
          <RecipeDetails id={params.id} />
        </Suspense>
      </main>
    </div>
  );
} 