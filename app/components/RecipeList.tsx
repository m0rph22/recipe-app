'use client';

import Image from 'next/image';
import Link from 'next/link';

const mockRecipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
  },
  {
    id: 2,
    title: 'Chicken Tikka Masala',
    image: 'https://spoonacular.com/recipeImages/715538-312x231.jpg',
  },
  {
    id: 3,
    title: 'Beef Tacos',
    image: 'https://spoonacular.com/recipeImages/716627-312x231.jpg',
  },
];

export function RecipeList() {
  const recipes = mockRecipes;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          href={`/recipes/${recipe.id}`}
          className="block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
              {recipe.title}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
} 