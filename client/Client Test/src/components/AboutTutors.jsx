import React from "react";
import { motion } from "framer-motion";

const AboutTutors = () => {
  const tutors = [
    {
      name: "K.Rahul",
      photoUrl: "/images/profile.png",
      bio: "Rahul is a cybersecurity expert with a backgroud in ethical hacking, web application, penetration testing with a teaching experience of 3 years . CEH(v13) | CyberSecurity Trainer | OSINT Engineer | CyberSecurity Analyst | Penetartion Tester",
    },
    {
      name: "S.Praneeth",
      photoUrl: "/images/profile.png",
      bio: "Praneeth  is a cybersecurity expert with a backgroud in ethical hacking, web application, penetration testing with a teaching experience of 3 years . CEH(v13) | CyberSecurity Trainer | OSINT Engineer | CyberSecurity Analyst | Penetartion Tester",
    },
  ];

  return (
    <section className="about-tutors py-16 text-white"
    style={{backgroundImage: "url('/images/1010066.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-10"
        >
          Meet Our Expert Tutors
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {tutors.map((tutor, index) => (
            <motion.div
              key={index}
              className="relative bg-black text-white-900 p-6 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 hover:opacity-30 transition duration-300"></div>
              <img
                src={tutor.photoUrl}
                alt={tutor.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
              />
              <h3 className="text-2xl font-semibold text-center mb-2">{tutor.name}</h3>
              <p className="text-white-700 text-center px-4">{tutor.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTutors;