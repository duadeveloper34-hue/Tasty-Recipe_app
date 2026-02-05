'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import LoadingSpinner from '@/components/LoadingSpinner';
import Link from 'next/link';

export default function RecipeDetail() {
  const params = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      fetchRecipe();
    }
  }, [params.id]);

  const fetchRecipe = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
      );
      setRecipe(response.data.meals[0]);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    } finally {
      setLoading(false);
    }
  };

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-dark mb-4">Recipe not found</h2>
        <Link href="/" className="text-primary hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const ingredients = getIngredients();

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href="/" 
        className="inline-flex items-center text-primary hover:text-red-600 mb-8 transition-colors"
      >
        ← Back to Recipes
      </Link>

      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="relative h-96 md:h-full">
              <img 
                src={recipe.strMealThumb} 
                alt={recipe.strMeal}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-full font-bold">
                {recipe.strCategory}
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-8 md:p-12">
            <div className="mb-6">
              <span className="text-secondary font-bold">{recipe.strArea} Cuisine</span>
              <h1 className="text-4xl font-bold text-dark mt-2 mb-4">{recipe.strMeal}</h1>
              <div className="flex items-center space-x-4 text-gray-600">
                <span>⏱️ 30 mins</span>
                <span>👥 4 servings</span>
                <span>🔥 Medium</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">Ingredients</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ingredients.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{item.ingredient}</span>
                      <span className="text-primary font-bold">{item.measure}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent/10 p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-bold text-dark mb-2">Nutrition Info</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">350</div>
                  <div className="text-gray-600">Calories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25g</div>
                  <div className="text-gray-600">Protein</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12g</div>
                  <div className="text-gray-600">Fat</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 border-t">
          <h2 className="text-3xl font-bold text-dark mb-6">Instructions</h2>
          <div className="prose max-w-none text-gray-700">
            {recipe.strInstructions.split('\n').map((step, index) => (
              step.trim() && (
                <div key={index} className="mb-6 flex">
                  <div className="shrink-0">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-lg">{step}</p>
                </div>
              )
            ))}
          </div>
        </div>

        {recipe.strYoutube && (
          <div className="p-8 md:p-12 border-t">
            <h2 className="text-3xl font-bold text-dark mb-6">Video Tutorial</h2>
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                src={recipe.strYoutube.replace('watch?v=', 'embed/')}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-12 bg-linear-to-r from-primary to-secondary rounded-3xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Want More Amazing Recipes?</h3>
        <p className="mb-6">Subscribe to get weekly premium recipes and cooking tips!</p>
        <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}