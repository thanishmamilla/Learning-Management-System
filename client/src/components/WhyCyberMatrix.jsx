import React from "react";
import { motion } from "framer-motion";

const WhyCyberMatrix = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6 text-blue-400"
        >
          Why Choose CyberMatrix?
        </motion.h2>
        <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-300">
          CyberMatrix is your go-to platform for mastering cybersecurity. Learn from industry experts,
          get hands-on experience, and become a cybersecurity professional with our cutting-edge courses.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-400 text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: "🔐",
    title: "Expert-Led Courses",
    description: "Learn from professionals with real-world cybersecurity experience."
  },
  {
    icon: "💻",
    title: "Hands-On Training",
    description: "Engage in practical exercises and real-world simulations."
  },
  {
    icon: "📜",
    title: "Industry-Recognized Certifications",
    description: "Earn certifications that enhance your career prospects."
  },
  {
    icon: "🌐",
    title: "24/7 Access to Learning",
    description: "Study at your own pace with our flexible online courses."
  },
  {
    icon: "🤝",
    title: "Community Support",
    description: "Join a community of like-minded learners and cybersecurity professionals."
  },
  {
    icon: "🚀",
    title: "Career Advancement",
    description: "Get guidance and job placement support in the cybersecurity industry."
  }
];

export default WhyCyberMatrix;
