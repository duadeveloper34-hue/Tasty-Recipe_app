'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '@/components/RecipeCard';
import CategoryCard from '@/components/CategoryCard';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Home() {
  const [featuredRecipe, setFeaturedRecipe] = useState(null);
  const [categories, setCategories] = useState([]);
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch featured recipe
      const featuredResponse = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'
      );
      
      // Fetch categories
      const categoriesResponse = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      );
      
      // Fetch seafood recipes for popular section
      const seafoodResponse = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
      );
      
      setFeaturedRecipe(featuredResponse.data.meals[0]);
      setCategories(categoriesResponse.data.categories);
      setPopularRecipes(seafoodResponse.data.meals.slice(0, 4));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="recipe-gradient rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cook Like a <span className="text-accent">Pro Chef</span>
              </h1>
              <p className="text-xl mb-8">
                Discover thousands of delicious recipes with step-by-step instructions. Perfect for home cooks and food lovers!
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg">
                  Start Cooking
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary transition-colors text-lg">
                  Watch Video
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                {featuredRecipe && (
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white">
                      <img 
                        src={featuredRecipe.strMealThumb} 
                        alt={featuredRecipe.strMeal}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Featured Recipe</h3>
                    <h4 className="text-xl mb-4">{featuredRecipe.strMeal}</h4>
                    <span className="bg-accent text-dark px-4 py-2 rounded-full font-bold">
                      {featuredRecipe.strCategory}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark mb-4">Recipe Categories</h2>
          <p className="text-gray-600 text-lg">Browse recipes by category</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.slice(0, 8).map((category) => (
            <CategoryCard key={category.idCategory} category={category} />
          ))}
        </div>
      </section>

      {/* Popular Recipes Section */}
      <section id="popular" className="mb-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-dark mb-2">Popular Recipes</h2>
            <p className="text-gray-600">Most loved recipes by our community</p>
          </div>
          <button className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-red-600 transition-colors">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularRecipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16">
        <div className="bg-linear-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Master Cooking?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of home cooks who are already creating amazing meals with our recipes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg">
              Get Premium Recipes
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-colors text-lg">
              Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}