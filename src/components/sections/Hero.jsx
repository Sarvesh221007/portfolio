import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 bg-gradient-to-r from-blue-50 to-white"
    >
      {/* Left Text */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:w-2/5 w-full"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-6">
          Hi, I’m <span className="text-blue-600">Sarvesh</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-md">
          A passionate MERN Stack Developer 🚀 building modern and scalable
          applications. I love turning ideas into reality through code.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition transform hover:-translate-y-1"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 border border-blue-600 text-blue-600 rounded-lg shadow hover:bg-blue-50 transition transform hover:-translate-y-1"
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/105M6iBMLsKyqsIZN-VdEpZaAlffGdDqu/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2"
          >
            📄 Download Resume
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:w-3/5 w-full flex justify-center mt-10 md:mt-0"
      >
        <img
          src="/me.jpg"
          alt="Sarvesh Profile"
          className="w-72 h-72 md:w-[400px] md:h-[400px] rounded-full shadow-xl border-4 border-blue-600 object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
