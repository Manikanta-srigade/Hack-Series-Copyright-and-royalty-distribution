
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/ffa984a7-d0dc-4687-9ea7-5e0006b1753c.png" 
          alt="Creative Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center perspective-container"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-cursive text-shadow mb-6"
            initial={{ rotateX: 15 }}
            animate={{ rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Dive deeper into the world of Authentic Creativity and Rightful Royalties
          </motion.h1>
          
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <button className="button-3d bg-black text-white px-8 py-3 rounded-md">
              Explore Gallery
            </button>
            <button className="button-3d bg-white text-black border border-black px-8 py-3 rounded-md">
              Join Community
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-black flex justify-center pt-2">
          <div className="w-1 h-3 bg-black rounded-full animate-pulse-subtle" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
