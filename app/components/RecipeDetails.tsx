'use client';

import Image from 'next/image';
import Link from 'next/link';

const mockRecipeDetails = {
  1: {
    id: 1,
    title: 'Spaghetti Carbonara',
    image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
    readyInMinutes: 30,
    servings: 2,
    extendedIngredients: [
      { original: '200g spaghetti' },
      { original: '100g pancetta' },
      { original: '2 eggs' },
      { original: '50g parmesan' },
    ],
    instructions: '1. Boil pasta. 2. Fry pancetta. 3. Mix eggs and cheese. 4. Combine all.',
  },
  2: {
    id: 2,
    title: 'Chicken Tikka Masala',
    image: 'https://spoonacular.com/recipeImages/715538-312x231.jpg',
    readyInMinutes: 45,
    servings: 4,
    extendedIngredients: [
      { original: '500g chicken breast' },
      { original: '200g tomato sauce' },
      { original: '100g yogurt' },
      { original: 'Spices' },
    ],
    instructions: '1. Marinate chicken. 2. Cook sauce. 3. Combine and simmer.',
  },
  3: {
    id: 3,
    title: 'Beef Tacos',
    image: 'https://spoonacular.com/recipeImages/716627-312x231.jpg',
    readyInMinutes: 25,
    servings: 3,
    extendedIngredients: [
      { original: '300g ground beef' },
      { original: '6 taco shells' },
      { original: 'Lettuce' },
      { original: 'Cheese' },
    ],
    instructions: '1. Cook beef. 2. Prepare shells. 3. Assemble tacos.',
  },
};

export function RecipeDetails({ id }: { id: string }) {
  const recipe = mockRecipeDetails[Number(id) as keyof typeof mockRecipeDetails];

  if (!recipe) {
    return <div className="text-center">Recipe not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        href="/recipes"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        ← Back to Search Results
      </Link>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 sm:h-96">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {recipe.title}
          </h1>
          <div className="flex gap-4 mb-6 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <span className="font-semibold">Prep Time:</span> {recipe.readyInMinutes} minutes
            </div>
            <div>
              <span className="font-semibold">Servings:</span> {recipe.servings}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {recipe.extendedIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient.original}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Instructions
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              {recipe.instructions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 