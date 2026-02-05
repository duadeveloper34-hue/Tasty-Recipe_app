import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tasty Recipes - Discover Delicious Meals',
  description: 'Explore thousands of delicious recipes from around the world. Find cooking inspiration for every meal.',
  keywords: 'recipes, cooking, food, meals, delicious, tasty',
  openGraph: {
    title: 'Tasty Recipes',
    description: 'Discover amazing recipes for every occasion',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-linear-to-br from-gray-50 to-gray-100`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}