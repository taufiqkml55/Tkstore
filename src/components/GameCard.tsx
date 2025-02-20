
import { motion } from "framer-motion";

interface GameCardProps {
  title: string;
  image: string;
  price: string;
}

export const GameCard = ({ title, image, price }: GameCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">Starting from</p>
        <p className="font-bold text-lg mt-1">{price}</p>
      </div>
    </motion.div>
  );
};
