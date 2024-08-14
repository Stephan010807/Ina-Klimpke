'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button"

const documents = [
  {
    title: "Mandantenfragebogen",
    description: "Formular zur Erfassung Ihrer persönlichen Daten und rechtlichen Anliegen.",
    fileSize: "PDF, 27 KB",
    downloadLink: "/downloads/Ina-Klimpke-Mandantenfragebogen.pdf",
    previewLink: "/downloads/Ina-Klimpke-Mandantenfragebogen.pdf"
  },
  {
    title: "Strafprozessvollmacht",
    description: "Bevollmächtigung für Ihre strafrechtliche Vertretung.",
    fileSize: "PDF, 44 KB",
    downloadLink: "/downloads/Strafprozessvollmacht-2.024.pdf",
    previewLink: "/downloads/Strafprozessvollmacht-2.024.pdf"
  },
  {
    title: "Datenschutzerklärung",
    description: "Informationen zur Verarbeitung Ihrer personenbezogenen Daten.",
    fileSize: "PDF, 63 KB",
    downloadLink: "/downloads/Hinweise-zur-Datenverarbeitung-nach-DSGVO.pdf",
    previewLink: "/downloads/Hinweise-zur-Datenverarbeitung-nach-DSGVO.pdf"
  }
];

const DownloadCard: React.FC<{ document: typeof documents[0] }> = ({ document }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between h-full"
    whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div>
      <div className="flex justify-between items-start mb-4">
        <FileText className="w-10 h-10 text-primary-light dark:text-primary-dark" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">{document.title}</h3>
      <p className="text-sm text-text-light/70 dark:text-text-dark/70 mb-4">{document.description}</p>
      <p className="text-xs text-text-light/50 dark:text-text-dark/50 mb-4">{document.fileSize}</p>
    </div>
    <div className="flex justify-between items-center">
      <Button variant="outline" size="sm" className="flex items-center" onClick={() => window.open(document.previewLink, '_blank')}>
        <Eye className="w-4 h-4 mr-2" /> Vorschau
      </Button>
      <Button size="sm" className="flex items-center bg-primary-light hover:bg-primary-light/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90 text-white" onClick={() => window.open(document.downloadLink, '_blank')}>
        <Download className="w-4 h-4 mr-2" /> Herunterladen
      </Button>
    </div>
  </motion.div>
);

const Downloads: React.FC = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark" id="download">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-light dark:text-text-dark">
            Download-Center
          </h2>
          <p className="text-xl text-text-light/80 dark:text-text-dark/80 max-w-2xl mx-auto mb-8">
            Hier finden Sie wichtige Formulare zum Herunterladen. Bitte füllen Sie diese aus und bringen Sie sie zu unserem ersten Termin mit.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {documents.map((doc, index) => (
            <DownloadCard key={doc.title} document={doc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downloads;