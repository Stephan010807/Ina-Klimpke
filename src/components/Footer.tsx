import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {currentYear} RA Ina Klimpke. Alle Rechte vorbehalten.</p>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
            <Link href="/Impressum" className="text-sm hover:text-primary-light dark:hover:text-primary-dark transition-colors">
              Impressum
            </Link>
            <Link href="/Datenschutz" className="text-sm hover:text-primary-light dark:hover:text-primary-dark transition-colors">
              Datenschutz
            </Link>
           
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
