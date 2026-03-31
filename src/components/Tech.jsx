import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import FilesDemo from './filesystem/FilesDemo';
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <div className="hidden sm:block w-full h-full">
              <BallCanvas icon={technology.icon} />
            </div>
            <div className="flex items-center justify-center sm:hidden w-full h-full">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
           <FilesDemo />
    </>
  );
};

export default SectionWrapper(Tech, '');
