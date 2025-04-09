import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import glo from "./assets/img/glow.jpg";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  const tools = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "Firebase",
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A fully responsive online store built with React and Tailwind CSS, featuring a seamless shopping cart, payment integration with Stripe, and a dynamic product catalog powered by Firebase.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      title: "Portfolio Showcase",
      description:
        "A minimalist yet elegant portfolio site designed with Bootstrap and animated with Framer Motion. It highlights my work with smooth transitions and a mobile-first approach.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      title: "Real-Time Dashboard",
      description:
        "A sophisticated dashboard application leveraging JavaScript and Firebase for real-time data updates. Features include interactive charts, user authentication, and a clean, modern UI.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      title: "Blog Platform",
      description:
        "A content-rich blogging site built with React and styled with Tailwind CSS. It includes a markdown editor, comment system, and Firebase-powered backend for post management.",
      image: "https://via.placeholder.com/400x300",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // Custom dot styling
    customPaging: () => (
      <div className="w-3 h-3 bg-white rounded-full" />
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      {/* Navigation Bar with Hamburger */}
      <nav className="  top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 shadow-lg ">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-300">
            Felix Gloria
          </a>
          {/* Hamburger Icon */}
          <button
            className="md:hidden text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#home"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-900">
            <li>
              <a
                href="#home"
                className="hover:text-indigo-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-indigo-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-indigo-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-indigo-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-indigo-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-br from-indigo-900 via-gray-800 to-black py-32 pt-24 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-20" />
        <img
          src={glo}
          alt="Your Image"
          className="w-54 h-54 rounded-full mx-auto border-4 border-indigo-500 shadow-lg object-cover"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold mt-8 tracking-tight">
          Felix Gloria
        </h1>
        <p className="text-xl md:text-3xl mt-4 text-indigo-300">
          Visionary Web Developer | Crafting Digital Masterpieces
        </p>
        <p className="text-lg mt-6 max-w-2xl mx-auto">
          With a relentless passion for innovation, I transform ideas into
          immersive, high-performance web experiences that leave a lasting
          impression.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block bg-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition"
        >
          Let’s Build Something Extraordinary
        </a>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-24 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-lg leading-relaxed">
              I’m a dedicated web developer with over five years of experience,
              driven by a love for creating seamless, visually stunning, and
              technically robust digital solutions. My journey began with
              mastering the fundamentals—HTML, CSS, and JavaScript—before diving
              into modern frameworks like React and tools like Firebase. I
              thrive on solving complex problems, whether it’s optimizing
              performance, designing intuitive user interfaces, or integrating
              real-time functionalities.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Beyond coding, I’m a lifelong learner, constantly exploring new
              technologies and refining my craft. My philosophy? Every project
              is an opportunity to push boundaries and deliver something
              extraordinary. When I’m not at my desk, you’ll find me sketching
              UI concepts, reading about design trends, or mentoring aspiring
              developers in my community.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6">My Expertise</h3>
            <p className="text-lg leading-relaxed">
              I specialize in front-end development with a strong foundation in
              responsive design, state management, and database integration. My
              toolkit is a blend of timeless classics and cutting-edge
              technologies, ensuring every project is both reliable and
              forward-thinking.
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-4">
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-4">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-indigo-800 text-indigo-200 px-5 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Carousel */}
      <section id="projects" className="py-24 bg-gray-800">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My Signature Projects
        </motion.h2>
        <div className="max-w-6xl mx-auto px-6">
          <Slider {...sliderSettings}>
            {projects.map((project) => (
              <div key={project.title} className="px-3">
                <motion.div
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="text-gray-300 mt-3 leading-relaxed">
                      {project.description}
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                      View Details →
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Voices of Satisfaction
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              "Working with [Your Name] was a game-changer. Their attention to
              detail and ability to turn my vision into a polished, functional
              website was nothing short of exceptional. The project was
              delivered ahead of schedule and exceeded all my expectations."
            </p>
            <p className="mt-6 text-indigo-400 font-semibold">
              - Jane Doe, Startup Founder
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              "[Your Name] brought unparalleled expertise to our team. The
              real-time dashboard they built not only looks incredible but also
              performs flawlessly under heavy use. Their professionalism and
              creativity are top-tier."
            </p>
            <p className="mt-6 text-indigo-400 font-semibold">
              - John Smith, Tech Lead at XYZ Corp
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800 p-8 rounded-lg md:col-span-2"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              "I’ve collaborated with many developers, but [Your Name] stands
              out for their ability to blend aesthetics with functionality. The
              e-commerce platform they developed has boosted our sales by 40%
              thanks to its intuitive design and seamless performance."
            </p>
            <p className="mt-6 text-indigo-400 font-semibold">
              - Emily Carter, E-Commerce Manager
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-indigo-900">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Let’s Create Together
        </motion.h2>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-center mb-10">
            I’m always excited to collaborate on innovative projects. Whether
            you need a stunning website, a robust web app, or just want to chat
            about possibilities, I’m here to make it happen. Reach out today!
          </p>
          <form className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500"
            />
            <textarea
              placeholder="Tell me about your project..."
              className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500 h-40"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 p-4 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
          <div className="mt-10 text-center">
            <p className="text-gray-300">
              Prefer another way?{" "}
              <a
                href="mailto:your.email@example.com"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Email me directly
              </a>{" "}
              or connect on{" "}
              <a
                href="https://linkedin.com/in/yourprofile"
                className="text-indigo-400 hover:text-indigo-300"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center">
        <p className="text-gray-400 text-lg">
          © 2025 Your Name. Designed and developed with precision, passion, and
          a commitment to excellence.
        </p>
        <p className="text-gray-500 mt-2">
          Built using React, Tailwind CSS, and a touch of magic.
        </p>
      </footer>
    </div>
  );
};

export default App;