
import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { diplomas } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon, diplomaIMG }) => (

    <Tilt className='xs:w-[250px] w-full flex items-center justify-center'>
        <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card relative block bg-gray-900 group' >
        <div 
            options={{
            max: 45,
            scale: 1,
            speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
            <img src={icon} alt='web-development' className='w-16 h-16 object-contain absolute group-hover:opacity-50 mt-7' />

            <h3 className='text-[#a68cd0] text-[20px] font-bold text-center mt-2'>
                {title}
            </h3>
            <div className="relative py-2">
                <div className="">
                    {/* Hidden content */}
                    <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0" >
                        <hr/>
                        <div className="mt-2 transition-all duration-500 ease-in-out transform bg-center bg-cover hover:mb-2">
                            <img src={diplomaIMG} className="text-sm text-white hover:scale-150 hover:rounded-lg " />
                        </div>
                    </div>
                    {/* End of hidden content */}
                </div>
            </div>
        </div>
        </motion.div>
    </Tilt>
);

const Diplomas = () => {

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Diplomas</p>
                <h2 className={styles.sectionHeadText}>Various Diploma Courses</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                I'm a skilled software developer with experience in TypeScript and
                JavaScript, and expertise in frameworks like React, Node.js, and
                Three.js. I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that solve
                real-world problems. Let's work together to bring your ideas to life!
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {diplomas.map((diploma, index) => (
                <ServiceCard key={diploma.title} index={index} {...diploma} />
                ))}
            </div>
        </>
    );

};


export default SectionWrapper(Diplomas, "diplomas");

