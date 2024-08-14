'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  { icon: Phone, info: "0231 / 950 960-5", label: "Telefon" },
  { icon: Mail, info: "sekretariat-klimpke@web.de", label: "E-Mail" },
  { icon: MapPin, info: "Gerichtsstrasse 5, 44135 Dortmund", label: "Adresse" },
  { icon: Clock, info: "Mo-Fr: 9:00 - 17:00 Uhr", label: "Bürozeiten" },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-text-light dark:text-text-dark"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Kontaktieren Sie uns
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-2 sm:p-3 rounded-full mr-4">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-light dark:text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200">{item.label}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
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
            className="rounded-lg overflow-hidden shadow-lg h-[300px] sm:h-[400px] md:h-[450px] lg:h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6460697785166!2d7.465376776946271!3d51.51439291181741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b919754dd9a607%3A0x3b0f820e25c45c0!2sGerichtsstra%C3%9Fe%205%2C%2044135%20Dortmund%2C%20Germany!5e0!3m2!1sen!2sus!4v1701893046309!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
