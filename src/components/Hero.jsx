import { motion } from 'framer-motion';
import { styles } from '../styles';
import { whiteabstract } from '../assets';
import RotatingText from './hero/RotatingText';
import HeroAnim from './hero anim/heroanim';
import tram from '../assets/hero/tram.webm';

const Hero = () => {
  return (
    <>
      <section
        className="relative w-full min-h-screen mx-auto overflow-hidden sm:bg-hero bg-hero-mobile">
        {/* Original world map images (commented out so they can be restored if needed)
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
        */}
        <div
          className="absolute inset-0 z-0 scrolling-texture"
          style={{ backgroundImage: `url(${whiteabstract})` }}
        />
        <div className={`relative z-10 ${styles.paddingX} max-w-7xl mx-auto min-h-screen flex flex-col justify-center pt-28 pb-24 sm:pt-32 sm:pb-20`}>
          <div className="flex flex-1 flex-col justify-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10 xl:gap-16">
            <div className="flex w-full justify-start lg:max-w-[48%] xl:max-w-[44%]">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="mt-2 flex flex-col items-center sm:hidden">
                  <div className="h-4 w-4 rounded-full bg-[#0a0a0a]" />
                  <div className="h-24 w-1 bw-gradient" />
                </div>

                <span className="rotating-line hero-rotating-line">
                  <span className="rotating-before">Crafting</span>
                  <RotatingText
                    texts={['Better', 'Digital', 'Intuitive', 'Engaging']}
                    mainClassName="rotating-hero bg-transparent justify-center overflow-hidden rounded-lg px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-2"
                    staggerFrom="last"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-120%' }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                  <span className="rotating-after">Experiences</span>
                </span>
              </div>
            </div>

            <div className="flex w-full justify-center lg:w-[44%] lg:justify-end xl:w-[40%]">
              <HeroAnim
                videoSrc={tram}
                className="hero-anim-shell relative aspect-[10/13] w-full max-w-[16rem] xs:max-w-[18rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-none lg:w-[clamp(20rem,34vw,31rem)]"
                videoProps={{ playsInline: true, autoPlay: true, muted: true, loop: true }}
              />
            </div>
          </div>
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
      </section>
    </>
  );
};

export default Hero;
