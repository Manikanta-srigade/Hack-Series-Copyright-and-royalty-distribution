
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const SocialLink = ({ 
  platform, 
  icon: Icon, 
  handle, 
  followers, 
  color, 
  delay 
}: { 
  platform: string,
  icon: typeof Instagram,
  handle: string,
  followers: string,
  color: string,
  delay: number
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      id={platform.toLowerCase()}
      className="card-3d bg-white rounded-xl overflow-hidden"
    >
      <div className={`h-2 ${color}`}></div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-3 rounded-full ${color} bg-opacity-10`}>
            <Icon size={24} className={color.replace('bg-', 'text-')} />
          </div>
          <div>
            <h3 className="font-bold">{platform}</h3>
            <p className="text-gray-500 text-sm">{followers} followers</p>
          </div>
        </div>
        <p className="font-medium text-lg mb-3">@{handle}</p>
        <button className={`px-4 py-2 rounded-md text-sm font-medium ${color} text-white w-full hover:opacity-90 transition-opacity button-3d`}>
          Follow us
        </button>
      </div>
    </motion.div>
  );
};

const Social = () => {
  const platforms = [
    {
      platform: "Instagram",
      icon: Instagram,
      handle: "creativeroyalties",
      followers: "120K+",
      color: "bg-pink-500",
    },
    {
      platform: "Twitter",
      icon: Twitter,
      handle: "creativeroyalty",
      followers: "85K+",
      color: "bg-blue-400",
    },
    {
      platform: "Facebook",
      icon: Facebook,
      handle: "CreativeRoyalties",
      followers: "150K+",
      color: "bg-blue-600",
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Our Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow us on social media to stay updated with the latest creations, 
            events, and opportunities in our creative ecosystem.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <SocialLink
              key={platform.platform}
              platform={platform.platform}
              icon={platform.icon}
              handle={platform.handle}
              followers={platform.followers}
              color={platform.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
