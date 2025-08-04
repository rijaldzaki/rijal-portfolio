"use client";
import type { NextPage } from "next";
import Navbar from "./components/Navbar/Navbar";
import TiltedCard from "./components/TiltedCard/TiltedCard";
import TextType from "./components/TextType/TextType";
import SpotlightCard from './components/SpotlightCard/SpotlightCard';
import ImageSlider from './components/ImageSlider/ImageSlider';
import { Mail, Instagram, Linkedin, Github } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="relative flex flex-col-reverse md:flex-row items-center justify-center w-full min-h-screen px-4 md:px-8 py-16 md:py-0 scroll-mt-32"
      >
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          style={{
            backgroundImage: "url('/assets/noise.png')",
            opacity: 0.8,
            backgroundRepeat: "repeat",
            backgroundSize: "auto"
          }}
        />
        <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left md:pl-16 relative z-10">
          <h1 className="font-marcellus text-2xl sm:text-5xl font-extrabold text-[#050e1a] mb-3">
            Rijal Dzaki Fadhlurrohman
          </h1>
          <div className="flex flex-row items-center gap-2 flex-wrap">
            <h1 className="font-montserrat font-semibold text-1xl sm:text-2xl text-[#050e1a]">I'm</h1>
            <TextType
              text={["Hardware Engineer", "Software Engineer", "IoT Developer"]}
              className="font-montserrat font-semibold text-1xl sm:text-2xl font-bold"
              typingSpeed={120}
              pauseDuration={2000}
              deletingSpeed={70}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-[#3375CC]"
              textColors={["#3375CC"]}
            />
          </div>
          <div className="flex items-center gap-4 mt-4 w-full justify-center md:justify-start">
            <a href="mailto:rijaldzaki10@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={24} className="text-gray-500 hover:text-blue-500 transition" />
            </a>
            <a href="https://instagram.com/r.dzakif" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram size={24} className="text-gray-500 hover:text-pink-500 transition" />
            </a>
            <a href="https://www.linkedin.com/in/rijal-dzaki-726967220" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-gray-500 hover:text-blue-700 transition" />
            </a>
            <a href="https://github.com/rijaldzaki" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="text-gray-500 hover:text-gray-900 transition" />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center mb-8 md:mb-0 relative z-10">
          <TiltedCard
            imageSrc="/assets/foto.jpg"
            altText="Rijal Dzaki"
            captionText="Rijal Dzaki"
            containerHeight="400px"
            containerWidth="400px"
            imageHeight="400px"
            imageWidth="400px"
            rotateAmplitude={4}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full flex flex-col items-center py-12 px-4 sm:px-8 bg-[#050e1a] scroll-mt-32">
        <h2 className="text-3xl font-marcellus mb-4 text-white">About Me</h2>
        <div className="h-1 w-32 mb-6 rounded bg-gradient-to-r from-[#3375CC] via-[#83B9FF] to-[#3375CC]" />
        <p className="font-montserrat max-w-2xl text-white text-2sm text-center max-w-4xl mx-auto">
          I am a Physics Engineering graduate with a strong interest in technology development in the fields of instrumentation, automation, and the Internet of Things (IoT). I am actively involved in research projects focusing on the development of IoT-based systems, particularly for monitoring and automation.
        </p>
      </section>

      {/* Project Section */}
      <section id="project" className="relative w-full flex flex-col items-center py-20 px-4 md:px-8 bg-white scroll-mt-32">
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          style={{
            backgroundImage: "url('/assets/noise.png')",
            opacity: 0.8,
            backgroundRepeat: "repeat",
            backgroundSize: "auto"
          }}
        />
        <div className="relative z-10 w-full flex flex-col items-center">
          <h2 className="text-3xl font-marcellus mb-4 text-black">Project</h2>
          <div className="h-1 w-32 mb-10 rounded bg-gradient-to-r from-[#3375CC] via-[#83B9FF] to-[#3375CC]" />
          <div
            className="
              grid
              grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]
              gap-10
              w-full
              max-w-screen-xl
              justify-items-center
            "
          >
            {/* Project 1 */}
            <SpotlightCard
              className="
                bg-[#050e1a]
                backdrop-blur-md
                border border-white/30
                rounded-xl
                p-4
                flex flex-col items-center justify-center
                shadow-xl
                transition-transform duration-300 ease-out hover:scale-105
                w-full
                max-w-[640px]
                aspect-[8/8] 
              "
              spotlightColor="rgba(51, 117, 204, 0.5)"
            >
              <div className="w-full h-full max-w-full mb-4 rounded-lg overflow-hidden">
                <ImageSlider
                  images={[
                    "/images/project2-1.png",
                    "/images/project2-2.png",
                  ]}
                  interval={3500}
                />
              </div>
              <h3 className="font-montserrat font-semibold text-lg md:text-lg mb-2 text-center">
                Power Management System for Automated Recording Device
              </h3>
            </SpotlightCard>
            {/* Project 2 */}
            <SpotlightCard
              className="
                bg-[#050e1a]
                backdrop-blur-md
                border border-white/30
                rounded-xl
                p-4
                flex flex-col items-center justify-center
                shadow-xl
                transition-transform duration-300 ease-out hover:scale-105
                w-full
                max-w-[640px]
                aspect-[8/8] 
              "
              spotlightColor="rgba(51, 117, 204, 0.5)"
            >
              <div className="w-full h-full max-w-full mb-4 rounded-lg overflow-hidden">
                <ImageSlider
                  images={[
                    "/images/project2-1.png",
                    "/images/project2-2.png",
                  ]}
                  interval={3500}
                />
              </div>
              <h3 className="font-montserrat font-semibold text-lg md:text-lg mb-2 text-center">
                IoT-Based Irrigation Automation System
              </h3>
            </SpotlightCard>

            {/* Project 3 */}
            <SpotlightCard
              className="
                bg-[#050e1a]
                backdrop-blur-md
                border border-white/30
                rounded-xl
                p-4
                flex flex-col items-center justify-center
                shadow-xl
                transition-transform duration-300 ease-out hover:scale-105
                w-full
                max-w-[640px]
                aspect-[8/8] 
              "
              spotlightColor="rgba(51, 117, 204, 0.5)"
            >
              <div className="w-full h-full max-w-full mb-4 rounded-lg overflow-hidden">
                <ImageSlider
                  images={[
                    "/images/project2-1.png",
                    "/images/project2-2.png",
                  ]}
                  interval={3500}
                />
              </div>
              <h3 className="font-montserrat font-semibold text-lg md:text-lg mb-2 text-center">
                IoT-Based Irrigation Automation System
              </h3>
            </SpotlightCard>
            {/* Project 4 */}
            <SpotlightCard
              className="
                bg-[#050e1a]
                backdrop-blur-md
                border border-white/30
                rounded-xl
                p-4
                flex flex-col items-center justify-center
                shadow-xl
                transition-transform duration-300 ease-out hover:scale-105
                w-full
                max-w-[640px]
                aspect-[8/8] 
              "
              spotlightColor="rgba(51, 117, 204, 0.5)"
            >
              <div className="w-full h-full max-w-full mb-4 rounded-lg overflow-hidden">
                <ImageSlider
                  images={[
                    "/images/project2-1.png",
                    "/images/project2-2.png",
                  ]}
                  interval={3500}
                />
              </div>
              <h3 className="font-montserrat font-semibold text-lg md:text-lg mb-2 text-center">
                IoT-Based Irrigation Automation System
              </h3>
            </SpotlightCard>
            {/* Project 5 */}
            <SpotlightCard
              className="
                bg-[#050e1a]
                backdrop-blur-md
                border border-white/30
                rounded-xl
                p-4
                flex flex-col items-center justify-center
                shadow-xl
                transition-transform duration-300 ease-out hover:scale-105
                w-full
                max-w-[640px]
                aspect-[8/8] 
              "
              spotlightColor="rgba(51, 117, 204, 0.5)"
            >
              <div className="w-full h-full max-w-full mb-4 rounded-lg overflow-hidden">
                <ImageSlider
                  images={[
                    "/images/project2-1.png",
                    "/images/project2-2.png",
                  ]}
                  interval={3500}
                />
              </div>
              <h3 className="font-montserrat font-semibold text-lg md:text-lg mb-2 text-center">
                IoT-Based Irrigation Automation System
              </h3>
            </SpotlightCard>
            {/* Project 6 */}
            <SpotlightCard
              className="
                bg-[#050e1a]
                backdrop-blur-md
                border border-white/30
                rounded-xl
                p-4
                flex flex-col items-center justify-center
                shadow-xl
                transition-transform duration-300 ease-out hover:scale-105
                w-full
                max-w-[640px]
                aspect-[8/8] 
              "
              spotlightColor="rgba(51, 117, 204, 0.5)"
            >
              <div className="w-full h-full max-w-full mb-4 rounded-lg overflow-hidden">
                <ImageSlider
                  images={[
                    "/images/project2-1.png",
                    "/images/project2-2.png",
                  ]}
                  interval={3500}
                />
              </div>
              <h3 className="font-montserrat font-semibold text-lg md:text-lg mb-2 text-center">
                IoT-Based Irrigation Automation System
              </h3>
            </SpotlightCard>            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative w-full flex flex-col items-center py-20 px-4 md:px-8 bg-white scroll-mt-32">
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          style={{
            backgroundImage: "url('/assets/noise.png')",
            opacity: 0.8,
            backgroundRepeat: "repeat",
            backgroundSize: "auto"
          }}
        />
        <div className="relative z-10 relative z-10 w-full flex flex-col items-center">
          <h2 className="text-3xl font-marcellus mb-4 text-[#050e1a]">Contact</h2>
          <div className="h-1 w-32 mb-10 rounded bg-gradient-to-r from-[#3375CC] via-[#83B9FF] to-[#3375CC]" />
          <form className="w-full max-w-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black font-montserrat focus:outline-none focus:ring-2 focus:ring-[#3375CC]-300 focus:border-[#3375CC]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black font-montserrat focus:outline-none focus:ring-2 focus:ring-[#3375CC]-300 focus:border-[#3375CC]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black font-montserrat focus:outline-none focus:ring-2 focus:ring-[#3375CC]-300 focus:border-[#3375CC]"
            />

            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 text-black font-montserrat focus:outline-none focus:ring-2 focus:ring-[#3375CC]-300 focus:border-[#3375CC]"
            />
            <button type="submit" className="w-full py-2 px-4 bg-[#050e1a] text-white rounded-lg font-montserrat font-semibold hover:bg-[#3375CC] transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <section id="footer" className="w-full flex flex-col items-center py-12 px-4 sm:px-8 bg-[#050e1a] scroll-mt-32">
        <div className="flex items-center gap-5 mt-4 w-full justify-center md:justify-center mb-8">
          <a href="mailto:rijaldzaki10@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={24} className="text-white hover:text-blue-500 transition" />
          </a>
          <a href="https://instagram.com/r.dzakif" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size={24} className="text-white hover:text-pink-500 transition" />
          </a>
          <a href="https://www.linkedin.com/in/rijal-dzaki-726967220" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="text-white hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com/rijaldzaki" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="text-white hover:text-gray-400 transition" />
          </a>
        </div>       
        <p className="font-montserrat max-w-cl text-white text-center max-w-xl text-sm mx-auto">
          © 2025 Rijal Dzaki Fadhlurrohman. All rights reserved.
        </p>
      </section>
    </div>
  );
};

export default Home;
