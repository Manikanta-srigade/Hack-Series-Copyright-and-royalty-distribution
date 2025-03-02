
import { motion } from 'framer-motion';
import { Palette, Award, Shield, Users, Clock, Globe } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }: { 
  icon: typeof Palette,
  title: string,
  description: string,
  delay: number
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="card-3d bg-white rounded-xl p-6 perspective-container"
    >
      <div className="mb-4 p-3 bg-gray-50 rounded-full w-fit">
        <Icon size={24} className="text-black" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: "Authentic Creativity",
      description: "Explore a world of genuine creativity, hand-picked by our curation team."
    },
    {
      icon: Award,
      title: "Fair Compensation",
      description: "Our platform ensures creators get rightful royalties for their artistic work."
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "End-to-end encryption and blockchain technology secure every transaction."
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description: "Join a community of artists, collectors, and enthusiasts sharing their passion."
    },
    {
      icon: Clock,
      title: "Timeless Value",
      description: "Invest in digital assets that stand the test of time with proven value."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with creators and collectors from around the world."
    }
  ];

  return (
    <section id="why-us" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 mb-4 bg-gray-100 text-gray-800 rounded-full text-sm">WHY US?</span>
          <h2 className="text-3xl md:text-4xl font-bold">Discover the Creative Advantage</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We're not just another platform. We're a movement dedicated to authenticity, 
            fair compensation, and building a sustainable creative economy.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
