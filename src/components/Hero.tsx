import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img 
            src="/lovable-uploads/herooo.png" 
            alt="Creative Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center perspective-container"
        >
         <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-cursive text-white text-shadow mb-8"
            initial={{ rotateX: 15 }}
            animate={{ rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Dive deeper into the world of Authentic Creativity and Rightful Royalties
          </motion.h1>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <button className="button-3d bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg shadow-lg">
              Explore Gallery
            </button>
            <button className="button-3d bg-white hover:bg-gray-100 text-black border border-black px-8 py-3 rounded-lg shadow-lg">
              Join Community
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse-subtle" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
