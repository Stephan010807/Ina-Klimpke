import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
return (
    <Link href="/" className="inline-block">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Image
                src="/Untitled design.svg"
                alt="Ina Klimpke - Fachanwältin für Strafrecht"
                width={1500}
                height={135}
                className="w-auto h-16 md:h-20"
            />
        </motion.div>
    </Link>
);
};

export default Logo;
