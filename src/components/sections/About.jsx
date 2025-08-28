// About.jsx
export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Hi 👋, I’m <span className="font-semibold text-indigo-600">Sarvesh Kumar Singh</span>, 
          a passionate full-stack developer with hands-on experience in building 
          modern web applications using the <span className="font-semibold">MERN stack</span>.  
          I enjoy solving real-world problems through clean, scalable, and 
          user-friendly applications. 🚀
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow-md p-6 rounded-2xl w-72">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">🎓 B.Tech (Computer Science)</h3>
            <p className="text-gray-600">JSS Academy of Technical Education, Noida | 2023 – 2026</p>
            <p className="text-gray-600 font-semibold mt-1">CGPA: 7.5 / 10</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-2xl w-72">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">🎓 Diploma</h3>
            <p className="text-gray-600">Govt Polytechnic, Ghaziabad | 2020 – 2023</p>
            <p className="text-gray-600 font-semibold mt-1">Percentage: 73%</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-2xl w-72">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">🏫 Higher Secondary (12th)</h3>
            <p className="text-gray-600">ABC School | Science Stream | 2018 – 2020</p>
            <p className="text-gray-600 font-semibold mt-1">Percentage: 74%</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-2xl w-72">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">🏫 Secondary (10th)</h3>
            <p className="text-gray-600">Mahabodhi Inter College | 2016 – 2018</p>
            <p className="text-gray-600 font-semibold mt-1">Percentage: 80%</p>
          </div>
        </div>

        <p className="mt-6 text-gray-600">
          View my full resume <a href="https://drive.google.com/file/d/105M6iBMLsKyqsIZN-VdEpZaAlffGdDqu/view?usp=drivesdk" 
          target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">here</a>.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow-md p-6 rounded-2xl w-72">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">🎯 My Focus</h3>
            <p className="text-gray-600">
              Full Stack Development, Problem Solving, and AI-powered solutions.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-2xl w-72">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">💡 Philosophy</h3>
            <p className="text-gray-600">
              Build projects that make an impact and continuously learn new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
