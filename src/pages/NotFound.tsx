
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="perspective-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center card-3d bg-white p-10 rounded-xl max-w-md"
        >
          <motion.h1 
            className="text-7xl font-bold mb-4"
            initial={{ rotateX: 15 }}
            animate={{ rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            404
          </motion.h1>
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            We couldn't find the page you were looking for. 
            Perhaps it was moved, deleted, or never existed.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="/"
            className="button-3d inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Return to Home</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
