import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Toggle = ({ children, title }: any) => {
    const [toggle, setToggle] = useState(true);
    return (
        <motion.div
            layout
            className='question'
            onClick={() => setToggle(!toggle)}
        >
            <motion.h4 layout>{title}</motion.h4>
            {toggle && children}
            <motion.div className='faqLine' />
        </motion.div>
    );
};

export default Toggle;
