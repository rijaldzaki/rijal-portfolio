"use client";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import TextType from "./components/TextType/TextType";
import { FaGithub, FaLinkedin, FaEnvelope, FaPlay, FaPause } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { X, ArrowRight, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from '@vercel/analytics/next';

// Load component
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        className="w-12 h-12 border-4 border-[#3375CC] border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

const Home: NextPage = () => {
  // Loading screen state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Project state
  const [openProject, setOpenProject] = useState<number | null>(null);

  // Music state
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = document.getElementById("bg-music") as HTMLAudioElement;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Send error:", error);
      alert("⚠️ Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  // Data projects
  const projects = [
    {
      id: 1,
      title: "Power Management System for Automated Recording Device",
      images: ["/assets/ard.png", "/assets/ard2.png", "/assets/ard3.png", "/assets/ard4.png", "/assets/ard5.png"],
      description: `This project focused on the design and construction of an energy consumption management system for an IoT-based Automated Recording Device (ARD), which is widely used in long-term acoustic environmental monitoring. Despite its benefits in providing continuous and automated data collection, the ARD often faces limitations in the field due to high energy consumption and restricted power resources. To address this challenge, the project introduced an automatic power switching mechanism that manages energy usage based on operational phases.\n\n
      The system development process involved identifying the ARD’s components and phases, creating block diagrams, workflow designs, and schematic layouts, and implementing the system using Wemos D1 Mini, relay modules, electronic components, and the MQTT protocol for communication and monitoring. This integration allowed for precise control of power distribution, particularly by disconnecting the microcomputer during idle phases to minimize unnecessary energy usage.\n\n
      Evaluation results showed that the system effectively reduced energy consumption per cycle by 6.51% (from 0.737 Wh to 0.689 Wh) and increased the device’s average daily availability by 10.11%, improving uptime from 87.69% to 97.80%. These findings highlight the success of the project in enhancing both energy efficiency and operational reliability, laying the groundwork for sustainable IoT-based ARDs suitable for deployment in energy-limited environments.`,
    },
    {
      id: 2,
      title: "IoT-Based Irrigation Automation System",
      images: ["/assets/fertili.png", "/assets/fertili2.png"],
      description: `This project was developed as part of UGM’s community service program, aiming to support sustainable agriculture in Pejawaran, Banjarnegara. The IoT-based irrigation automation system utilized an ESP32 module and an RTC with an offline Wi-Fi interface, enabling time-based control through an ESP32 access point website without relying on a full internet connection. Additionally, the system was integrated with solar power to ensure energy sustainability in rural areas.\n\n
      The implementation of this project not only improved the efficiency of water and energy use but also introduced environmentally friendly technology to local farming groups. Through socialization and training, farmers gained an understanding of the system’s operation and were able to perform maintenance and make adjustments independently. Thus, this project serves as a practical example of appropriate technology that empowers local communities while promoting environmental sustainability.`,
    },
    {
      id: 3,
      title: "LoStresRa : Prototype of a LoRa-Based Stress Diagnosis System",
      images: ["/assets/lostress.png", "/assets/lostress2.png", "/assets/lostress3.png", "/assets/lostress4.png"],
      description: `This project designed and developed a prototype of a stress detection system (LoStresRa) utilizing physiological sensors and LoRa communication modules. The system was created to monitor stress levels among students by measuring Galvanic Skin Response (GSR) and Skin Temperature (ST), which are then classified into three categories (low, medium, high) using LED indicators. The main hardware components include an Arduino Mega, GSR sensor, LM35 sensor, LEDs, LCD, and LoRa modules, programmed through the Arduino IDE.\n\n
      The testing results demonstrated that the system can successfully read body signals in real time, classify stress levels, and transmit the data via LoRa to be displayed on a serial monitor. The integration of LoRa technology enables long-range data transmission with low power consumption, making this system a promising, efficient, and sustainable solution for physiological monitoring and early stress detection.`
    },
    {
      id: 4,
      title: "Automatic Baking System",
      images: ["/assets/baking.png", "/assets/baking2.png", "/assets/baking3.png", "/assets/baking4.png"],
      description: `This project focuses on the design of an Automatic Baking System aimed at improving the consistency and efficiency of small-scale Bolen pastry production through process automation. Traditional manual baking methods often result in inconsistent product quality due to imprecise temperature control and human error. The proposed system provides a solution by integrating automatic temperature and time control with a programmable logic controller-based conveyor system, ensuring that each batch of Bolen is baked evenly achieves a consistent level of doneness.\n\n
      The system is designed with a SoftPLC-based control architecture connected to sensors and actuators via an Ethernet TCP/IP network. A photoelectric sensor is used to detect the presence of products, while thermocouple and humidity sensors monitor oven conditions in real-time. Sensor data are processed by the SoftPLC to control the AC induction motor for the conveyor and the linear actuator for the roller gate, ensuring precise synchronization between product movement and baking temperature. Communication between the control unit and the Human Machine Interface (HMI) is established using the OPC-UA protocol, enabling real-time monitoring and system adjustments. The HMI interface is designed to be user-friendly, featuring start/stop buttons, temperature and time displays, and a visual representation of the baking process.`,
    },
    {
      id: 5,
      title: "Prototype of an IoT-Based Indoor Air Quality (IAQ) Monitoring System",
      images: ["/assets/iaq.png", "/assets/iaq2.png", "/assets/iaq3.png"],
      description: `The Prototype of an IoT-Based Indoor Air Quality (IAQ) Monitoring System was developed to monitor indoor air conditions in real time using the NodeMCU ESP32. The system integrates an MQ-2 gas sensor to detect smoke, LPG, and CO, as well as a DHT-22 sensor to measure temperature and humidity. Data is processed by the ESP32 and transmitted via Wi-Fi to the Blynk Cloud, allowing users to view live readings and receive alerts when gas levels exceed safe thresholds. Testing results show that the system can accurately monitor air quality and display real-time data through the Blynk dashboard.`,
    },
  ];

  const selectedProject = projects.find((p) => p.id === openProject);

  // Slider state
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!selectedProject) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % selectedProject.images.length);
    }, 4000); // kasih jeda lebih lama biar kelihatan
    return () => clearInterval(interval);
  }, [selectedProject]);

  const nextSlide = () => {
    if (!selectedProject) return;
    setCurrent((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevSlide = () => {
    if (!selectedProject) return;
    setCurrent((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };  

  if (loading) return <Loader />; // Load screen

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Home */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative flex items-center justify-center w-full min-h-screen px-4 md:px-8 py-16 md:py-0 scroll-mt-32"
      >
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: "url('/assets/foto.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "90% center",
            opacity: 0.2,
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center md:items-start md:text-left md:justify-center md:pl-16 w-full h-full">
          <h1 className="font-raleway text-2xl sm:text-4xl font-bold text-[#050e1a] mb-1 sm:mb-3">
            Rijal Dzaki Fadhlurrohman
          </h1>
          <div className="flex flex-row items-center gap-2 flex-wrap justify-center md:justify-start">
            <h1 className="font-montserrat text-base sm:text-xl font-semibold text-[#050e1a]">
              I'm
            </h1>
            <TextType
              text={["Hardware Engineer", "IoT Developer", "Instrument Engineer"]}
              className="font-montserrat font-semibold text-base sm:text-xl"
              typingSpeed={120}
              pauseDuration={2000}
              deletingSpeed={70}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-[#3375CC]"
              textColors={["#3375CC"]}
            />
          </div>
          <div className="flex items-center gap-4 mt-4 justify-center md:justify-start">
            <a href="mailto:rijaldzaki10@gmail.com" target="_blank">
              <FaEnvelope
                size={24}
                className="text-gray-500 hover:text-blue-500 transition"
              />
            </a>
            <a href="https://instagram.com/r.dzakif" target="_blank">
              <AiFillInstagram
                size={24}
                className="text-gray-500 hover:text-pink-500 transition"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rijaldzaki"
              target="_blank"
            >
              <FaLinkedin
                size={24}
                className="text-gray-500 hover:text-blue-700 transition"
              />
            </a>
            <a href="https://github.com/rijaldzaki" target="_blank">
              <FaGithub
                size={24}
                className="text-gray-500 hover:text-gray-900 transition"
              />
            </a>
          </div>
        </div>
      </motion.section>

      {/* About Me */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full flex flex-col items-center py-12 px-8 bg-[#050e1a] scroll-mt-32"
      >
        <h2 className="sm:text-3xl text-2xl font-raleway font-bold mb-4 text-white">
          ABOUT ME
        </h2>
        <div className="h-1 w-32 mb-6 rounded bg-gradient-to-r from-[#3375CC] via-[#83B9FF] to-[#3375CC]" />
        <p className="mb-6 font-montserrat text-white text-sm sm:text-base text-center max-w-md sm:max-w-4xl mx-auto tracking-wide">
          I am an Engineering Physics graduate with a strong interest in technology 
          development in the fields of instrumentation and control, automation, and 
          the Internet of Things (IoT). I am actively involved in research projects 
          focusing on the development of embedded systems and IoT-based systems.
        </p>
        <a
          href="/assets/CV-Rijal Dzaki Fadhlurrohman.pdf"
          download
          className="inline-flex items-center gap-2 bg-[#3375CC] hover:bg-[#83B9FF] text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 font-raleway font-semibold"
        >
          <Download size={20} />
          Download CV
        </a>
      </motion.section>

      {/* Project */}
      <motion.section
        id="project"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full flex flex-col items-center py-20 px-4 md:px-8 bg-white scroll-mt-32"
      >
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />
        <div className="relative z-10 w-full flex flex-col items-center">
          <h2 className="sm:text-3xl text-2xl font-raleway font-bold mb-4 text-[#050e1a]">
            PROJECT
          </h2>
          <div className="h-1 w-32 mb-10 rounded bg-gradient-to-r from-[#3375CC] via-[#83B9FF] to-[#3375CC]" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl px-4 md:px-0">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div
                  className="
                    absolute inset-0 bg-[#3375CC]/30 backdrop-blur-md
                    flex flex-col items-center justify-center
                    translate-y-full group-hover:translate-y-0
                    transition-transform duration-1000 ease-out
                  "
                >
                  <h3 className="text-white font-montserrat text-lg sm:text-lg font-semibold mb-3 px-4 text-center">
                    {project.title}
                  </h3>
                  <button
                    onClick={() => setOpenProject(project.id)}
                    className="p-3 bg-[#3375CC] text-white rounded-full hover:bg-[#235ba3] transition flex items-center justify-center"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Modal Project */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white backdrop-blur-sm shadow-xl rounded-lg max-w-5xl w-full h-[90vh] overflow-y-auto relative p-6 mx-6 transform transition-transform duration-500 scale-90 opacity-0 animate-zoomIn">
            <button
              onClick={() => setOpenProject(null)}
              className="absolute top-3 right-3 p-1 text-white bg-[#3375CC]/70 rounded-lg hover:bg-[#3375CC] hover:text-white transition shadow-sm z-50"
            >
              <X size={28} />
            </button>

            {/*Image Slider */}
            <div className="relative w-full max-w-2xl mx-auto mb-6">
              <div className="relative mx-auto flex mb-6 items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedProject.images[current]}
                    src={selectedProject.images[current]}
                    alt={`Slide ${current}`}
                    className="w-[400px] aspect-[4/3] object-contain rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>

              {/* Prev */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#050e1a]/40 hover:bg-[#050e1a] text-white p-2 rounded-full"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next */}
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#050e1a]/40 hover:bg-[#050e1a] text-white p-2 rounded-full"
              >
                <ChevronRight size={20} />
              </button>

              {/* Indicator */}
              <div className="flex justify-center mt-3 gap-2">
                {selectedProject.images.map((_, idx) => (
                  <span
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition ${
                      idx === current ? "bg-[#3375CC]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <h2 className="text-lg text-[#050e1a] font-montserrat font-bold mb-4">
              {selectedProject.title}
            </h2>
            <div className="text-gray-800 leading-relaxed text-justify text-sm sm:text-base tracking-tight space-y-5">
              {selectedProject.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contact */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full flex flex-col items-center py-20 px-8 md:px-8 bg-white scroll-mt-32"
      >
        <div className="relative z-10 w-full flex flex-col items-center">
          <h2 className="sm:text-3xl text-2xl font-raleway font-bold mb-4 text-[#050e1a]">
            CONTACT
          </h2>
          <div className="h-1 w-32 mb-10 rounded bg-gradient-to-r from-[#3375CC] via-[#83B9FF] to-[#3375CC]" />
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 text-sm sm:text-base">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black font-montserrat focus:outline-none focus:ring-2 focus:ring-[#3375CC] focus:border-[#3375CC]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black font-montserrat focus:outline-none focus:ring-2 focus:ring-[#3375CC] focus:border-[#3375CC]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black font-montserrat focus:outline-none focus:ring-2 focus:ring-[#3375CC] focus:border-[#3375CC]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 text-black font-montserrat focus:outline-none focus:ring-2 focus:ring-[#3375CC] focus:border-[#3375CC]"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full py-2 px-4 bg-[#050e1a] text-white rounded-lg font-montserrat font-semibold hover:bg-[#3375CC] transition disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.section
        id="footer"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full flex flex-col items-center py-12 px-4 sm:px-8 bg-[#050e1a] scroll-mt-32"
      >
        <div className="flex items-center gap-5 mt-4 w-full justify-center mb-8">
          <a href="mailto:rijaldzaki10@gmail.com" target="_blank">
            <FaEnvelope
              size={24}
              className="text-white hover:text-blue-500 transition"
            />
          </a>
          <a href="https://instagram.com/r.dzakif" target="_blank">
            <AiFillInstagram
              size={24}
              className="text-white hover:text-pink-500 transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rijaldzaki"
            target="_blank"
          >
            <FaLinkedin
              size={24}
              className="text-white hover:text-blue-500 transition"
            />
          </a>
          <a href="https://github.com/rijaldzaki" target="_blank">
            <FaGithub
              size={24}
              className="text-white hover:text-gray-400 transition"
            />
          </a>
        </div>
        <p className="font-montserrat text-white text-center max-w-xl text-sm mx-auto">
          © 2025 Rijal Dzaki. All rights reserved.
        </p>
      </motion.section>

      {/* Music Button */}
      <div className="fixed bottom-6 left-6 z-30">
        <button
          onClick={toggleMusic}
          className="group flex items-center bg-[#3375CC] text-white rounded-full shadow-lg hover:bg-[#235ba3] transition-all duration-500 overflow-hidden w-11 h-11 sm:w-14 sm:h-14 hover:w-auto pr-4 sm:pr-6"
        >
          <span className="flex items-center justify-center min-w-[2.5rem] sm:min-w-[3.5rem]">
            {isPlaying ? <FaPause className="w-3 h-3 sm:w-4 sm:h-4" /> : <FaPlay className="w-4 h-4 sm:w-4 sm:h-4" />}
          </span>
          <span
            className="font-montserrat font-semibold whitespace-nowrap opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out text-xs sm:text-sm"
          >
            Music
          </span>
        </button>
      </div>
      <audio id="bg-music" loop>
        <source src="/assets/music.mp3" type="audio/mpeg" />
      </audio>
      <Analytics />
    </div>
  );
};

export default Home;
