import React from 'react';

export const metadata = {
  title: 'Datenschutzerklärung - Rechtsanwältin Ina Klimpke',
  description: 'Datenschutzerklärung der Kanzlei Rechtsanwältin Ina Klimpke',
};

const Datenschutz: React.FC = () => {
  return (
    <main className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-text-light dark:text-text-dark">
          Datenschutzerklärung
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <h2>Hinweise zur Datenverarbeitung nach DSGVO</h2>
          
          <h3>1. Name und Kontaktdaten der für die Verarbeitung Verantwortlichen</h3>
          <p>
            Diese Datenschutzhinweise gelten für die Datenverarbeitung durch meine Kanzlei. Verantwortlicher im Sinne des Datenschutzrechtes bin ich, RA Ina Klimpke, Gerichtsstrasse 5, 44135 Dortmund, E-Mail: sekretariat-klimpke@web.de
          </p>

          <h3>2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck und deren Verwendung</h3>
          <p>
            Wenn Sie uns mandatieren, erheben wir folgende Informationen:
          </p>
          <ul>
            <li>Anrede, Vorname, Nachname</li>
            <li>Eine gültige E-Mail-Adresse</li>
            <li>Anschrift</li>
            <li>Telefonnummer (Festnetz und/oder Mobilfunk)</li>
            <li>Informationen, die für die Geltendmachung und Verteidigung Ihrer Rechte im Rahmen des Mandats notwendig sind</li>
          </ul>
          <p>
            Die Erhebung dieser Daten erfolgt,
          </p>
          <ul>
            <li>um Sie als unseren Mandanten identifizieren zu können;</li>
            <li>um Sie angemessen anwaltlich beraten und vertreten zu können;</li>
            <li>zur Korrespondenz mit Ihnen;</li>
            <li>zur Rechnungsstellung;</li>
            <li>zur Abwicklung von evtl. vorliegenden Haftungsansprüchen sowie der Geltendmachung etwaiger Ansprüche gegen Sie;</li>
          </ul>
          <p>
            Die Datenverarbeitung erfolgt auf Ihre Anfrage hin und ist nach Art. 6 Abs. 1 S. 1 lit. b DSGVO zu den genannten Zwecken für die angemessene Bearbeitung des Mandats und für die beidseitige Erfüllung von Verpflichtungen aus dem Mandatsvertrag erforderlich.
          </p>
          <p>
            Die für die Mandatierung von uns erhobenen personenbezogenen Daten werden bis zum Ablauf der gesetzlichen Aufbewahrungspflicht für Anwälte (6 Jahre nach Ablauf des Kalenderjahres, in dem das Mandat beendet wurde,) gespeichert und danach gelöscht, es sei denn, dass wir nach Artikel 6 Abs. 1 S. 1 lit. c DSGVO aufgrund von steuer- und handelsrechtlichen Aufbewahrungs- und Dokumentationspflichten (aus HGB, StGB oder AO) zu einer längeren Speicherung verpflichtet sind oder Sie in eine darüberhinausgehende Speicherung nach Art. 6 Abs. 1 S. 1 lit. a DSGVO eingewilligt haben.
          </p>

          <h3>3. Weitergabe von Daten an Dritte</h3>
          <p>
            Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt.
          </p>
          <p>
            Soweit dies nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Mandatsverhältnissen mit Ihnen erforderlich ist, werden Ihre personenbezogenen Daten an Dritte weitergegeben. Hierzu gehört insbesondere die Weitergabe an Verfahrensgegner und deren Vertreter (insbesondere deren Rechtsanwälte) sowie Gerichte und andere öffentliche Behörden zum Zwecke der Korrespondenz sowie zur Geltendmachung und Verteidigung Ihrer Rechte. Die weitergegebenen Daten dürfen von dem Dritten ausschließlich zu den genannten Zwecken verwendet werden.
          </p>
          <p>
            Das Anwaltsgeheimnis bleibt unberührt. Soweit es sich um Daten handelt, die dem Anwaltsgeheimnis unterliegen, erfolgt eine Weitergabe an Dritte nur in Absprache mit Ihnen.
          </p>

          <h3>4. Betroffenenrechte</h3>
          <p>
            Sie haben das Recht:
          </p>
          <ul>
            <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen;</li>
            <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;</li>
            <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
            <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;</li>
            <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen;</li>
            <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;</li>
            <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
          </ul>

          <h3>5. Widerspruchsrecht</h3>
          <p>
            Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben.
          </p>
          <p>
            Möchten Sie von Ihrem Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an sekretariat-klimpke@web.de.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Datenschutz;