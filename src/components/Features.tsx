'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Scale, BookOpen, Users, Check, Gavel, Pill, User, Briefcase, Smartphone, Baby, Car, Siren, FileWarning } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Umfassender Schutz",
    description: "Ganzheitliche Verteidigung in allen Bereichen des Strafrechts, von Bagatelldelikten bis zu komplexen Fällen.",
    benefits: [
      "24/7 Erreichbarkeit",
      "Individuelle Strategieentwicklung",
      "Diskretion und Vertraulichkeit"
    ]
  },
  {
    icon: Scale,
    title: "Faire Vertretung",
    description: "Ich setze mich mit Nachdruck für Ihre Rechte ein und sorge für ein gerechtes Verfahren.",
    benefits: [
      "Transparente Kommunikation",
      "Ethische Vorgehensweise",
      "Faire Honorargestaltung"
    ]
  },
  {
    icon: BookOpen,
    title: "Juristische Expertise",
    description: "Jahrelange Erfahrung und fundiertes Fachwissen in allen strafrechtlichen Fragen.",
    benefits: [
      "Spezialisierung im Strafrecht",
      "Kontinuierliche Weiterbildung",
      "Netzwerk von Experten"
    ]
  },
  {
    icon: Users,
    title: "Persönliche Betreuung",
    description: "Enge und vertrauensvolle Zusammenarbeit mit höchster Priorität für Ihre Anliegen.",
    benefits: [
      "Direkter Kontakt zur Anwältin",
      "Regelmäßige Fallbesprechungen",
      "Emotionale Unterstützung"
    ]
  }
];

const areasOfExpertise = [
  { icon: Pill, name: "Betäubungsmittelstrafrecht" },
  { icon: User, name: "Sexualstrafrecht" },
  { icon: Siren, name: "Tötungsdelikte" },
  { icon: Briefcase, name: "Wirtschaftsstrafrecht" },
  { icon: Baby, name: "Jugendstrafrecht" },
  { icon: Smartphone, name: "Cyberkriminalität" },
  { icon: Shield, name: "Allg. Strafrecht" },
  { icon: Car, name: "Verkehrsstrafrecht" },
  { icon: FileWarning, name: "Medizinstrafrecht" }
];

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, benefits }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center mb-4">
      <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-3 rounded-full mr-4">
        <Icon className="w-6 h-6 text-primary-light dark:text-primary-dark" />
      </div>
      <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">{title}</h3>
    </div>
    <p className="text-text-light/80 dark:text-text-dark/80 mb-4">{description}</p>
    <ul className="space-y-2">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center text-sm text-text-light/70 dark:text-text-dark/70">
          <Check className="w-4 h-4 mr-2 text-green-500" />
          {benefit}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ExpertiseCard: React.FC = () => (
  <motion.div
    className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="text-center mb-8">
      <div className="inline-block bg-primary-light/10 dark:bg-primary-dark/10 p-4 rounded-full mb-4">
        <Gavel className="w-10 h-10 text-primary-light dark:text-primary-dark" />
      </div>
      <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">Fachgebiete im Strafrecht</h3>
      <p className="text-text-light/80 dark:text-text-dark/80 max-w-2xl mx-auto">
        Meine Expertise erstreckt sich über das gesamte Spektrum des Strafrechts. Ich biete Ihnen kompetente Verteidigung in diesen Bereichen an:
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {areasOfExpertise.map((area, index) => (
        <motion.div 
          key={index} 
          className="flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-700 p-4 rounded-lg h-32"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <area.icon className="w-8 h-8 text-primary-light dark:text-primary-dark mb-2" />
          <span className="text-sm font-medium text-text-light/80 dark:text-text-dark/80">{area.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark" id='feat'>
      <div className="container mx-auto px-4">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-text-light dark:text-text-dark">
          Strafrecht ist kein Rechtsgebiet wie viele andere
        </h2>
        <div className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-3xl mx-auto">
          <p className="text-justify">
            Der Mandant, der in den Blick der Strafverfolgungsbehörden gerät, sieht sich der Staatsmacht gegenüber, die über große Ressourcen verfügt. Sie kann mit Durchsuchungen, Beschlagnahmungen und Verhaftungen gegen den Beschuldigten vorgehen, unabhängig davon, ob dieser schuldig oder unschuldig ist. Strafverteidigung, die hierzu das Gegengewicht bildet, benötigt neben Fachkompetenz vor allem langjährige praktische Erfahrung und Unerschrockenheit in der Durchsetzung. Dafür stehe ich. Ich verfüge sowohl über die notwendige Erfahrung als auch über das erforderliche Verhandlungsgeschick im Umgang mit den Strafverfolgungsbehörden und Gerichten.
          </p>
        </div>
      </motion.div>
        <ExpertiseCard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;