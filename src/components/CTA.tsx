
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gray-50 opacity-80"></div>
      
      {/* 3D Elements */}
      <motion.div 
        className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200 rounded-full opacity-20"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          rotate: [0, -20, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center perspective-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-3 mb-4 bg-black text-white rounded-full text-sm">
              Connect your wallet
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Step Into the World of Authentic Creativity?
            </h2>
            
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              By connecting your wallet, you'll gain access to exclusive creations, 
              the ability to support artists directly, and participate in our 
              community governance.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="button-3d bg-black text-white px-8 py-4 rounded-md flex items-center justify-center gap-3 mx-auto"
            >
              <Wallet size={20} />
              <span>Connect Wallet to Begin</span>
            </motion.button>
            
            <p className="mt-6 text-sm text-gray-500">
              We support MetaMask, Coinbase Wallet, and WalletConnect
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
