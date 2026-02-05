import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="recipe-gradient text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-2xl">🍳</span>
            </div>
            <Link href="/" className="text-2xl font-bold hover:text-accent transition-colors">
              TastyRecipes
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-accent font-medium transition-colors">
              Home
            </Link>
            <Link href="#categories" className="hover:text-accent font-medium transition-colors">
              Categories
            </Link>
            <Link href="#popular" className="hover:text-accent font-medium transition-colors">
              Popular
            </Link>
            <Link href="#" className="hover:text-accent font-medium transition-colors">
              About
            </Link>
          </div>
          
          <button className="bg-white text-primary px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-md">
            Get Pro
          </button>
        </div>
      </div>
    </nav>
  );
}