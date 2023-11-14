'use client';

import { motion } from 'framer-motion';

import styles from '../styles/styles';
import { TitleText, TypingText } from '../components/CustomTexts';
import { fadeIn, staggerContainer } from '../components/utils/motion';

import Image from 'next/image';
import { map, people01, people02, people03 } from '../assets';


const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <Image src={map} alt="map" className="w-full h-full object-cover" priority />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image src={people01} alt="people" className="w-full h-full" priority />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image src={people02} alt="people" className="w-full h-full" priority />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image src={people03} alt="people" className="w-full h-full" priority />
        </div>
      </motion.div>
    </motion.div>
  </section>
  )
}

export default World