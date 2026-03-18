import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { shaq, bwmap, worldmap } from '../assets';
import RotatingText from './hero/RotatingText';
import HeroAnim from './hero anim/heroanim';
import tram from '../assets/hero/tram.webm';
import HeroRender from '../assets/hero/Hero_Render.png';
import HeroRenderTrees from '../assets/hero/Hero_Render_Trees.png';


const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 ${styles.paddingX} max-w-7xl mx-auto flex flex-row items-center justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div className="flex-1 flex items-center">
            {/* <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                Shaquille
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              Lorem ipsum dolor sit amet. <br className="sm:block hidden" />
              consectetur adipisicing elit deleniti, voluptas.
            </p> */}

                  <span className="rotating-line relative flex items-center gap-4 justify-start max-w-[46%] pr-6 md:pr-12 lg:pr-20 xl:pr-28">
        <span className="rotating-before">Crafting</span>
        <RotatingText
          texts={['Better', 'Digital', 'Intuitive', 'Engaging']}
          mainClassName="rotating-hero px-2 sm:px-2 md:px-3 bg-transparent overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
          <span className="rotating-after">Experiences</span>

      </span>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Hero animation: base PNG (optional) -> video -> top PNG (overlay) */}
        <div>
        {/* <HeroAnim
            baseImage={HeroRender}
            videoSrc={tram}
            overlayImage={HeroRenderTrees}
            className="absolute top-1/2 right-[6vw] -translate-y-1/2 sm:h-[70vh] w-[36vw]"
            baseScale={0.90}
            baseStyle={{ transformOrigin: 'left center' }}
            overlayScale={1.08}
            overlayStyle={{ transformOrigin: 'left center', translate: '0 0' }}
          /> */}
          <HeroAnim
  videoSrc={tram}
  className="absolute top-1/2 right-[6vw] -translate-y-1/2 sm:h-[70vh] w-[36vw]"
  videoProps={{ playsInline: true, autoPlay: true, muted: true, loop: true }}
/>
        </div>
      </section>
    </>
  );
};

export default Hero;
