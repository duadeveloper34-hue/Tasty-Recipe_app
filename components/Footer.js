export default function Footer() {
  return (
    <footer className="bg-dark text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🍳</span>
              <h2 className="text-2xl font-bold">TastyRecipes</h2>
            </div>
            <p className="text-gray-300">
              Discover amazing recipes from around the world. Cook like a pro with our step-by-step guides.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary transition-colors">Vegetarian</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Seafood</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Desserts</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Quick Meals</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe for weekly recipes</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow px-4 py-2 rounded-l-lg text-dark"
              />
              <button className="bg-primary px-4 py-2 rounded-r-lg font-bold hover:bg-red-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TastyRecipes. All rights reserved. For monetization purposes.</p>
        </div>
      </div>
    </footer>
  );
}