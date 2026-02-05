import Link from 'next/link';

export default function CategoryCard({ category }) {
    return (
        <Link href={`/recipes/category/${category.strCategory}`}>
            <div className="bg-white rounded-2xl p-6 shadow-lg card-hover text-center group cursor-pointer">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-linear-to-br from-primary to-accent p-1 group-hover:from-secondary group-hover:to-primary transition-all">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <span className="text-4xl">🍽️</span>
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">{category.strCategory}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{category.strCategoryDescription?.substring(0, 80)}...</p>
                <div className="mt-4">
                    <span className="inline-block bg-gray-100 text-primary px-4 py-1 rounded-full text-sm font-bold">
                        Explore Recipes
                    </span>
                </div>
            </div>
        </Link>
    );
}