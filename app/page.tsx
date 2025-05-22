import { SearchForm } from '@/components/SearchForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Recipe Search
          </h1>
          <SearchForm />
        </div>
      </main>
    </div>
  );
}
