
import { SearchIcon } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { GameCard } from "@/components/GameCard";

const featuredGames = [
  {
    id: 1,
    title: "Mobile Legends",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    price: "$4.99"
  },
  {
    id: 2,
    title: "PUBG Mobile",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    price: "$9.99"
  },
  {
    id: 3,
    title: "Free Fire",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    price: "$2.99"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 pt-20 pb-16">
        {/* Search Bar */}
        <div className="relative mt-6 mb-8">
          <input
            type="text"
            placeholder="Search games..."
            className="w-full px-4 py-3 pl-12 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>

        {/* Featured Games */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Featured Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                image={game.image}
                price={game.price}
              />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Action', 'RPG', 'Strategy', 'Sports'].map((category) => (
              <button
                key={category}
                className="p-4 bg-white rounded-xl text-center hover:bg-primary hover:text-white transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
