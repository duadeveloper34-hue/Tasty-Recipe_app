import Link from 'next/link';
import Image from 'next/image';

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.strMealThumb} 
          alt={recipe.strMeal}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
          {recipe.strCategory}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-dark line-clamp-1">{recipe.strMeal}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{recipe.strInstructions?.substring(0, 100)}...</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{recipe.strArea} Cuisine</span>
          <Link 
            href={`/recipes/${recipe.idMeal}`}
            className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-red-600 transition-colors"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}