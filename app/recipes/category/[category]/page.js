'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import RecipeCard from '@/components/RecipeCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import Link from 'next/link';

export default function CategoryPage() {
  const params = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.category) {
      fetchCategoryRecipes();
    }
  }, [params.category]);

  const fetchCategoryRecipes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
      );
      setRecipes(response.data.meals || []);
    } catch (error) {
      console.error('Error fetching category recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-primary hover:text-red-600 transition-colors"
        >
          ← Back to Categories
        </Link>
        <h1 className="text-4xl font-bold text-dark mt-4 mb-2 capitalize">
          {params.category} Recipes
        </h1>
        <p className="text-gray-600">
          Discover amazing {params.category.toLowerCase()} recipes from around the world
        </p>
      </div>

      {recipes.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-linear-to-r from-primary to-accent rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Want More {params.category} Recipes?</h3>
              <p className="mb-6">Subscribe to unlock premium {params.category.toLowerCase()} recipes!</p>
              <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Get Premium Access
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-6">🍳</div>
          <h3 className="text-2xl font-bold text-dark mb-4">No recipes found</h3>
          <p className="text-gray-600 mb-8">Try another category or check back later!</p>
          <Link 
            href="/" 
            className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition-colors"
          >
            Browse Categories
          </Link>
        </div>
      )}
    </div>
  );
}