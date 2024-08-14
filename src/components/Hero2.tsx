'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button"

const Hero2: React.FC = () => {
  return (
    <section id='hero' className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Bildschirmfoto 2024-07-22 um 12.34.33.png"
        alt="Rechtsanwältin Ina Klimpke"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
      
      <div className="container relative z-20 text-white">
        <div className="max-w-2xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Kompetente <span className="text-primary-light">Strafverteidigung</span> für Ihr Recht
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mit Expertise und Leidenschaft setzen wir uns für Ihre Rechte ein. Vertrauen Sie auf jahrelange Erfahrung im Strafrecht.
          </motion.p>
          <motion.div 
            className="flex space-x-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="group bg-primary-light hover:bg-primary-light/90 text-white">
              Kontakt aufnehmen
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
              Mehr erfahren
            </Button>
          </motion.div>
          <motion.div
            className="bg-red-900/80 p-4 rounded-lg shadow-md max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-red-300 mb-2 flex items-center">
              <Phone className="mr-2" /> Notfallkontakt
            </h3>
            <p className="text-sm text-red-200 mb-2">
              In Notfällen wie Festnahme, Verhaftung oder Durchsuchung:
            </p>
            <a href="tel:+1732934496" className="text-xl font-bold text-red-300 hover:underline">
              +173 2934496
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;