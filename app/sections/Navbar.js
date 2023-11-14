"use client"

import { motion } from "framer-motion"
import styles from "../styles/styles"
import Image from "next/image"
import { search, menu } from "../assets"
import { navVariants } from "../components/utils/motion"


const Navbar = () => (
    <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
    >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
            <Image
                src={search}
                alt="search"
                width="24"
                height="24"
                className="w-[24px] h-[24px] object-contain"
            />
            <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
                METAVERSUS
            </h2>
            <Image
                src={menu}
                alt="menu"
                width="24"
                height="24"
                className="w-[24px] h-[24px] object-contain"
            />
        </div>
    </motion.nav>
);

export default Navbar