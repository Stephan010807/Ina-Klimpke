import React from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Phone, MapPin, Download } from 'lucide-react';
import Downloads from '@/components/Downloads';
import Hero2 from '@/components/Hero2';

export default function Home() {
  return (
    <>
          <Head>
        <title>Ina Klimpke - Strafrecht Anwältin in Dortmund</title>
        <meta name="description" content="Ina Klimpke ist eine erfahrene Strafrecht Anwältin in Dortmund. Kontaktieren Sie uns für professionelle Rechtsberatung und Vertretung in Strafsachen." />
        <meta name="keywords" content="Ina Klimpke, Strafrecht, Anwältin, Dortmund, Rechtsberatung, Strafverteidigung, Strafverteidiger Dortmund, Anwalt für Strafrecht Dortmund, Rechtsberatung Strafrecht Dortmund, Strafverteidigung Anwalt Dortmund, Strafverteidiger für Drogendelikte Dortmund, Anwalt für Wirtschaftskriminalität Dortmund, Rechtsanwältin für Jugendstrafrecht Dortmund, Verteidiger bei Körperverletzung Dortmund, Fachanwältin für Strafrecht Dortmund, Strafverteidiger in der Nähe von Dortmund, Strafrecht Anwalt im Ruhrgebiet, Rechtsberatung in Dortmund Innenstadt" />        <meta name="author" content="Ina Klimpke" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Ina Klimpke - Strafrecht Anwältin in Dortmund" />
        <meta property="og:description" content="Ina Klimpke ist eine erfahrene Strafrecht Anwältin in Dortmund. Kontaktieren Sie uns für professionelle Rechtsberatung und Vertretung in Strafsachen." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ra-klimpke.de" />
        </Head>
      <Hero />
      <Features />
      
     <AboutUs /> 
     <Contact />
     <Downloads />

     

    </>
  );
}
