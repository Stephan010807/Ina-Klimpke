'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: Phone, info: "0231 / 950 960-5", label: "Telefon" },
  { icon: Mail, info: "sekretariat-klimpke@web.de", label: "E-Mail" },
  { icon: MapPin, info: "Gerichtsstrasse 5, 44135 Dortmund", label: "Adresse" },
  { icon: Clock, info: "Mo-Fr: 9:00 - 17:00 Uhr", label: "Bürozeiten" },
];

const AboutUs: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900" id='about'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start">
          <motion.div 
            className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 xl:pr-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-100">
              Über Ina Klimpke
            </h2>
            <p className="text-sm sm:text-base mb-6 sm:mb-8 text-gray-700 dark:text-gray-300 leading-relaxed text-justify hyphens-auto">
        Seit dem Beginn meiner Berufstätigkeit vor mehr als 25 Jahren habe ich mich auf die Strafverteidigung spezialisiert. Sie ist meine Berufung und meine Passion. Meine berufliche Ausbildung, langjährige Erfahrung und kontinuierliche Fortbildungen garantieren sowohl das juristische Know-how, die notwendige Durchsetzungskraft und das nötige Fingerspitzengefühl im Umgang mit den Strafverfolgungsbehörden in ganz Deutschland.
    </p>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Mein Werdegang</h3>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-sm sm:text-base text-gray-700 dark:text-gray-300 ">
              <li className="flex items-start">
                <span className="mr-2 text-primary-light dark:text-primary-dark">•</span>
                Studium der Rechtswissenschaften an der Ruhr Universität Bochum und der Université de Lausanne, Schweiz
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-light dark:text-primary-dark">•</span>
                Rechtsreferendariat am Landgericht Dortmund
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-light dark:text-primary-dark">•</span>
                1997 tätig als Rechtsanwältin in einer renommierten Dortmunder Strafrechtskanzlei
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-light dark:text-primary-dark">•</span>
                Seit 2000 Fachanwältin für Strafrecht
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-light dark:text-primary-dark">•</span>
                2002 Gründung der Kanzlei Klimpke & Rupprecht
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-light dark:text-primary-dark">•</span>
                Seit 2007 Kanzlei Fachanwälte Klimpke, Rupprecht & Hopfstock
              </li>
            </ul>
            <Button size="lg" className="w-full sm:w-auto bg-primary-light hover:bg-primary-light/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90 text-white">
              Termin vereinbaren
            </Button>
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2 lg:pl-8 xl:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl mb-8">
              <Image
                src="/Ina_grey.svg"
                alt="Ina Klimpke"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-light dark:text-primary-dark mr-3" />
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">{item.label}</p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
