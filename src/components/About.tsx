
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="perspective-container">
              <div className="card-3d rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/ffa984a7-d0dc-4687-9ea7-5e0006b1753c.png" 
                  alt="About Us" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <span className="inline-block py-1 px-3 mb-4 bg-gray-200 text-gray-800 rounded-full text-sm">About us</span>
            <h2 className="text-3xl font-bold mb-6">Championing Creativity & Ensuring Fair Compensation</h2>
            <p className="text-gray-600 mb-4">
              We believe in a world where creativity is valued, protected, and fairly compensated. 
              Our platform connects authentic creators with appreciative audiences, ensuring that 
              the rightful royalties always reach the hands that crafted the art.
            </p>
            <p className="text-gray-600 mb-6">
              Founded by a collective of artists, technologists, and industry veterans, we're committed 
              to building a sustainable ecosystem that nurtures creativity while leveraging cutting-edge 
              technology to protect intellectual property.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold text-lg mb-1">10k+</h4>
                <p className="text-gray-500 text-sm">Artists Onboarded</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold text-lg mb-1">250k+</h4>
                <p className="text-gray-500 text-sm">Creations Protected</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold text-lg mb-1">$12M+</h4>
                <p className="text-gray-500 text-sm">Royalties Distributed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
