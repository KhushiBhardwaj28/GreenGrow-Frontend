import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  // Animation variants for nav links
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <motion.nav
      className="bg-green-900 text-white p-4 shadow-md sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold flex items-center gap-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          🌱 GreenGrow
        </motion.h1>

        {/* Nav Links */}
        <div className="space-x-6 flex">
          {["Home", "Crop Recommendations", "Disease Detection", "Soil Restoration"].map(
            (item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                className="relative group"
              >
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className="hover:text-green-300 transition"
                >
                  {item}
                </Link>
                {/* Underline Animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-300 transition-all duration-300 group-hover:w-full"></span>
              </motion.div>
            )
          )}
        </div>
      </div>
    </motion.nav>
  );
}
