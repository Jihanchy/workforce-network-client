import React from 'react';
import { motion } from 'motion/react';
import { easeOut } from 'motion';
import team2 from '../../../assets/team/team2.jpg'
import team1 from '../../../assets/team/team1.jpg'
const Banner = () => {
    return (
        <div className="hero  min-h-96">
            <div className="hero-content sm:items-center items-start flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{ y: [20, 50, 20] }}
                        transition={{ duration: 7, repeat: Infinity }}
                        src={team2}
                        className="max-w-sm w-64 border-blue-500 border-l-8 border-b-8 rounded-t-[40px] rounded-e-[40px]" />
                    <motion.img
                        animate={{ x: [90, 130, 90] }}
                        transition={{ duration: 7, delay:4, repeat: Infinity }}
                        src={team1}
                        className="max-w-sm w-64 border-blue-500 border-l-8 border-b-8 rounded-t-[40px] rounded-e-[40px]" />
                </div>
                <div className='flex-1 md:pl-16 text-center md:text-left py-5'>
                    <motion.h1
                        animate={{ y: 20 }}
                        initial={{ y: 70 }}
                        transition={{ duration: 1.5, ease: easeOut }}
                        className="text-5xl leading-tight font-bold">The <motion.span
                            animate={{ color: '#4f77ec', duration: 2 }}
                            initial={{ color: '#161616' }}
                            className='text-blue-500'>Easiest Way</motion.span> <br />
                        to Get Your New Job</motion.h1>
                    <motion.p
                        animate={{ y: 20 }}
                        initial={{ y: 40 }}
                        transition={{ duration: 1.5, ease: easeOut }} className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </motion.p>
                    <button className="btn btn-primary mt-5">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;