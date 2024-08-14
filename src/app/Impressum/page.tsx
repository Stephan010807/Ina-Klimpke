import React from 'react';

export const metadata = {
  title: 'Impressum - Rechtsanwältin Ina Klimpke',
  description: 'Ausführliches Impressum der Kanzlei Rechtsanwältin Ina Klimpke',
};

const Impressum: React.FC = () => {
  return (
    <main className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-text-light dark:text-text-dark">
          Impressum
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Ina Klimpke<br />
            Rechtsanwältin<br />
            Fachanwältin für Strafrecht<br />
            Gerichtsstraße 5<br />
            44135 Dortmund
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: 0231 / 950 960-5<br />
            Telefax: [Faxnummer einfügen, falls vorhanden]<br />
            E-Mail: sekretariat-klimpke@web.de
          </p>

          <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            Berufsbezeichnung: Rechtsanwältin (verliehen in der Bundesrepublik Deutschland)<br />
            Fachanwaltsbezeichnung: Fachanwältin für Strafrecht
          </p>
          <p>
            Zuständige Rechtsanwaltskammer:<br />
            Rechtsanwaltskammer Hamm<br />
            Ostenallee 18<br />
            59063 Hamm<br />
            <a href="https://www.rak-hamm.de" target="_blank" rel="noopener noreferrer">www.rak-hamm.de</a>
          </p>
          <p>
            Berufsrechtliche Regelungen:
          </p>
          <ul>
            <li>Bundesrechtsanwaltsordnung (BRAO)</li>
            <li>Berufsordnung für Rechtsanwälte (BORA)</li>
            <li>Fachanwaltsordnung (FAO)</li>
            <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
          </ul>
          <p>
            Die Regelungen finden Sie unter: <a href="https://www.brak.de/fuer-anwaelte/berufsrecht/" target="_blank" rel="noopener noreferrer">www.brak.de</a>
          </p>

          <h2>Berufshaftpflichtversicherung</h2>
          <p>
            [Name und Anschrift der Berufshaftpflichtversicherung einfügen]<br />
            Räumlicher Geltungsbereich: [Geltungsbereich angeben, z.B. &quot;Bundesrepublik Deutschland&quot;]
          </p>

          <h2>Umsatzsteuer-Identifikationsnummer</h2>
          <p>
            gemäß §27 a Umsatzsteuergesetz: [USt-IdNr. einfügen, falls vorhanden]
          </p>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Ina Klimpke<br />
            Gerichtsstraße 5<br />
            44135 Dortmund
          </p>

          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Verwendung von Google Fonts</h2>
          <p>
            Unsere Webseite verwendet Google Fonts, einen Dienst von Google LLC ("Google"), um Schriftarten auf unserer Website darzustellen. Durch die Nutzung von Google Fonts wird Ihre IP-Adresse an Google übermittelt, damit Google die Schriftarten korrekt auf Ihrem Gerät anzeigen kann. Weitere Informationen zur Erhebung und Verarbeitung Ihrer Daten durch Google finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.
          </p>

          <h2>Verwendung von Google Maps</h2>
          <p>
            Unsere Webseite verwendet Google Maps, einen Dienst von Google LLC ("Google"), um interaktive Karten anzuzeigen. Bei der Nutzung von Google Maps werden Daten über Ihre Nutzung der Kartenfunktionen an Google übertragen, einschließlich Ihrer IP-Adresse. Weitere Informationen zur Erhebung und Verarbeitung Ihrer Daten durch Google finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Impressum;