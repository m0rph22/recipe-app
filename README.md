# Recipe Search Application

A Next.js application that allows users to search for recipes using the Spoonacular API. Users can search by recipe name, cuisine type, and maximum preparation time.

## Features

- Search recipes by name, cuisine, and preparation time
- View recipe details including ingredients and instructions
- Responsive design with dark mode support
- Server-side rendering with caching
- Loading states with React Suspense

## Prerequisites

- Node.js 18.x or later
- A Spoonacular API key (get one at https://spoonacular.com/food-api)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd recipe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Spoonacular API key:
   ```
   NEXT_PUBLIC_SPOONACULAR_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/page.tsx` - Home page with search form
- `app/recipes/page.tsx` - Recipe search results page
- `app/recipes/[id]/page.tsx` - Individual recipe details page
- `app/components/` - React components
  - `SearchForm.tsx` - Search form component
  - `RecipeList.tsx` - Recipe list component
  - `RecipeDetails.tsx` - Recipe details component

## Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Spoonacular API

## API Usage

The application uses the following Spoonacular API endpoints:

- `GET /recipes/complexSearch` - Search for recipes
- `GET /recipes/{id}/information` - Get detailed recipe information

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
