'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id='hero'>
      <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark flex items-center pt-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light dark:text-text-dark mb-6 leading-tight">
                Kompetente <span className="text-primary-light dark:text-primary-dark">Strafverteidigung</span> für Ihr Recht
              </h1>
              <p className="text-xl text-text-light/80 dark:text-text-dark/80 mb-8 leading-relaxed">
                Mit Fachkompetenz und Leidenschaft setze ich mich für Ihr Recht ein. Vertrauen Sie auf meine langjährige Erfahrung im Strafrecht.
              </p>
              <div className="mb-8">
                <p className="text-lg font-semibold text-text-light dark:text-text-dark mb-2 flex items-center">
                  <Phone className="mr-2" /> Notfallkontakt
                </p>
                <p className="text-base text-text-light dark:text-text-dark mb-2">
                  In Notfällen wie Festnahme oder Durchsuchung:
                </p>
                <a href="tel:+1732934496" className="text-xl font-bold text-text-light dark:text-text-dark hover:underline">
                  +49 173 2934496
                </a>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 lg:pl-12"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/ina_green.svg"
                  alt="Rechtsanwältin Ina Klimpke"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;