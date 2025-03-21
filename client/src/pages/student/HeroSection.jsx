// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const HeroSection = () => {
//   const [searchQuery, setSearchQuery] = useState("");
// const navigate = useNavigate();
//   const searchHandler = (e) => {
//     e.preventDefault();
//     if(searchQuery.trim() !== ""){
//       navigate(`/course/search?query=${searchQuery}`)
//     }
//     setSearchQuery("");
//   }

//   return (
//     <div className="relative h-[800px] bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-900 py-24 px-4 text-center " style={{backgroundImage: "url('/images/image1.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-white text-4xl font-bold mb-4">
//           Find the Best Courses for You
//         </h1>
//         <p className="text-gray-200 dark:text-gray-400 mb-8">
//           Discover, Learn, and Upskill with our wide range of courses
//         </p>

//         {/* <form onSubmit={searchHandler} className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6">
//           <Input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search Courses"
//             className="flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
//           />
//           <Button type="submit" className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 dark:hover:bg-blue-800">Search</Button>
//         </form>
//        <Button onClick={()=> navigate(`/course/search?query`)} className="bg-white dark:bg-gray-800 text-blue-600 rounded-full hover:bg-gray-200">Explore Courses</Button> */}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/course/search?query=${searchQuery}`);
    }
    setSearchQuery("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-[800px] bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 py-24 px-4 flex justify-start items-center"
      style={{
        backgroundImage: "url('/images/image1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl ml-12 text-left flex flex-col">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="text-white text-4xl font-extrabold mb-4 drop-shadow-lg"
          >
            A Single
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            className="text-white text-4xl font-extrabold mb-4 drop-shadow-lg"
          >
            Vulnerability
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
            className="text-white text-4xl font-extrabold mb-4 drop-shadow-lg"
          >
            is All an
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
            className="text-white text-4xl font-extrabold mb-4 drop-shadow-lg"
          >
            Attacker Needs
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1, ease: "easeOut" }}
          className="text-gray-200 dark:text-gray-400 text-lg mt-4 max-w-2xl drop-shadow-md"
        >
          A single vulnerability is all an attacker needs to bring down an empire.
        </motion.p>
        <div className="flex gap-2 mt-4">
          <div className="elementor-icon elementor-divider__element text-yellow-400 text-2xl">
            <i aria-hidden="true" className="fas fa-star"></i>
          </div>
          <div className="elementor-icon elementor-divider__element text-yellow-400 text-2xl">
            <i aria-hidden="true" className="fas fa-shield-alt"></i>
          </div>
          <div className="elementor-icon elementor-divider__element text-yellow-400 text-2xl">
            <i aria-hidden="true" className="fas fa-lock"></i>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
