import Website from "@/typings"
import Link from "next/link"
import Page from "../../../components/Page/Page"
import { getDictionary } from "../dictionaries"
import styles from "./page.module.scss"

export default async function Privacy({
    params: { lang },
}: {
    params: { lang: Website.I18n.Language }
}) {
    const dict = await getDictionary(lang)

    return (
        <Page
            className={styles.privacy}
            dictionary={dict}
            lang={lang}
            pageTitle={
                lang === "de" || lang === "de-DE"
                    ? "Datenschutzerklärung"
                    : "Privacy Policy"
            }
        >
            {lang === "de" || lang === "de-DE" ? (
                <>
                    <h2 id="m716">Präambel</h2>
                    <p>
                        Mit der folgenden Datenschutzerklärung möchten wir Sie
                        darüber aufklären, welche Arten Ihrer personenbezogenen
                        Daten (nachfolgend auch kurz als &quot;Daten&quot;
                        bezeichnet) wir zu welchen Zwecken und in welchem Umfang
                        verarbeiten. Die Datenschutzerklärung gilt für alle von
                        uns durchgeführten Verarbeitungen personenbezogener
                        Daten, sowohl im Rahmen der Erbringung unserer
                        Leistungen als auch insbesondere auf unseren Webseiten,
                        in mobilen Applikationen sowie innerhalb externer
                        Onlinepräsenzen, wie z.B. unserer Social-Media-Profile
                        (nachfolgend zusammenfassend bezeichnet als
                        &quot;Onlineangebot&quot;).
                    </p>
                    <p>
                        Die verwendeten Begriffe sind nicht
                        geschlechtsspezifisch.
                    </p>
                    <p>Stand: 16. März 2023</p>
                    <h2>Inhaltsübersicht</h2>
                    <ul className="index">
                        <li>
                            <a className="index-link" href="#m716">
                                Präambel
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m3">
                                Verantwortlicher
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#mOverview">
                                Übersicht der Verarbeitungen
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m13">
                                Maßgebliche Rechtsgrundlagen
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m27">
                                Sicherheitsmaßnahmen
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m25">
                                Übermittlung von personenbezogenen Daten
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m12">
                                Löschung von Daten
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m225">
                                Bereitstellung des Onlineangebotes und
                                Webhosting
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m182">
                                Kontakt- und Anfragenverwaltung
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m136">
                                Präsenzen in sozialen Netzwerken (Social Media)
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m15">
                                Änderung und Aktualisierung der
                                Datenschutzerklärung
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m10">
                                Rechte der betroffenen Personen
                            </a>
                        </li>
                    </ul>
                    <h2 id="m3">Verantwortlicher</h2>
                    <p>
                        Lennard Fickus
                        <br />
                        Sudetenstraße 14
                        <br />
                        35216 Biedenkopf
                    </p>
                    E-Mail-Adresse: <p>info(at)lennard-fickus.de</p>
                    <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
                    <p>
                        Die nachfolgende Übersicht fasst die Arten der
                        verarbeiteten Daten und die Zwecke ihrer Verarbeitung
                        zusammen und verweist auf die betroffenen Personen.
                    </p>
                    <h3>Arten der verarbeiteten Daten</h3>
                    <ul>
                        <li>Kontaktdaten.</li>
                        <li>Inhaltsdaten.</li>
                        <li>Nutzungsdaten.</li>
                        <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
                    </ul>
                    <h3>Kategorien betroffener Personen</h3>
                    <ul>
                        <li>Kommunikationspartner.</li>
                        <li>Nutzer.</li>
                    </ul>
                    <h3>Zwecke der Verarbeitung</h3>
                    <ul>
                        <li>Kontaktanfragen und Kommunikation.</li>
                        <li>Sicherheitsmaßnahmen.</li>
                        <li>Verwaltung und Beantwortung von Anfragen.</li>
                        <li>Feedback.</li>
                        <li>Marketing.</li>
                        <li>
                            Bereitstellung unseres Onlineangebotes und
                            Nutzerfreundlichkeit.
                        </li>
                        <li>Informationstechnische Infrastruktur.</li>
                    </ul>
                    <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3>
                    <p>
                        Im Folgenden erhalten Sie eine Übersicht der
                        Rechtsgrundlagen der DSGVO, auf deren Basis wir
                        personenbezogene Daten verarbeiten. Bitte nehmen Sie zur
                        Kenntnis, dass neben den Regelungen der DSGVO nationale
                        Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder
                        Sitzland gelten können. Sollten ferner im Einzelfall
                        speziellere Rechtsgrundlagen maßgeblich sein, teilen wir
                        Ihnen diese in der Datenschutzerklärung mit.
                    </p>
                    <ul>
                        <li>
                            <strong>
                                Vertragserfüllung und vorvertragliche Anfragen
                                (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)
                            </strong>
                            - Die Verarbeitung ist für die Erfüllung eines
                            Vertrags, dessen Vertragspartei die betroffene
                            Person ist, oder zur Durchführung vorvertraglicher
                            Maßnahmen erforderlich, die auf Anfrage der
                            betroffenen Person erfolgen.
                        </li>
                        <li>
                            <strong>
                                Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
                                f) DSGVO)
                            </strong>
                            - Die Verarbeitung ist zur Wahrung der berechtigten
                            Interessen des Verantwortlichen oder eines Dritten
                            erforderlich, sofern nicht die Interessen oder
                            Grundrechte und Grundfreiheiten der betroffenen
                            Person, die den Schutz personenbezogener Daten
                            erfordern, überwiegen.
                        </li>
                    </ul>
                    <p>
                        Zusätzlich zu den Datenschutzregelungen der DSGVO gelten
                        nationale Regelungen zum Datenschutz in Deutschland.
                        Hierzu gehört insbesondere das Gesetz zum Schutz vor
                        Missbrauch personenbezogener Daten bei der
                        Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das
                        BDSG enthält insbesondere Spezialregelungen zum Recht
                        auf Auskunft, zum Recht auf Löschung, zum
                        Widerspruchsrecht, zur Verarbeitung besonderer
                        Kategorien personenbezogener Daten, zur Verarbeitung für
                        andere Zwecke und zur Übermittlung sowie automatisierten
                        Entscheidungsfindung im Einzelfall einschließlich
                        Profiling. Des Weiteren regelt es die Datenverarbeitung
                        für Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG),
                        insbesondere im Hinblick auf die Begründung,
                        Durchführung oder Beendigung von
                        Beschäftigungsverhältnissen sowie die Einwilligung von
                        Beschäftigten. Ferner können Landesdatenschutzgesetze
                        der einzelnen Bundesländer zur Anwendung gelangen.
                    </p>
                    <h2 id="m27">Sicherheitsmaßnahmen</h2>
                    <p>
                        Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
                        Berücksichtigung des Stands der Technik, der
                        Implementierungskosten und der Art, des Umfangs, der
                        Umstände und der Zwecke der Verarbeitung sowie der
                        unterschiedlichen Eintrittswahrscheinlichkeiten und des
                        Ausmaßes der Bedrohung der Rechte und Freiheiten
                        natürlicher Personen geeignete technische und
                        organisatorische Maßnahmen, um ein dem Risiko
                        angemessenes Schutzniveau zu gewährleisten.
                    </p>
                    <p>
                        Zu den Maßnahmen gehören insbesondere die Sicherung der
                        Vertraulichkeit, Integrität und Verfügbarkeit von Daten
                        durch Kontrolle des physischen und elektronischen
                        Zugangs zu den Daten als auch des sie betreffenden
                        Zugriffs, der Eingabe, der Weitergabe, der Sicherung der
                        Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir
                        Verfahren eingerichtet, die eine Wahrnehmung von
                        Betroffenenrechten, die Löschung von Daten und
                        Reaktionen auf die Gefährdung der Daten gewährleisten.
                        Ferner berücksichtigen wir den Schutz personenbezogener
                        Daten bereits bei der Entwicklung bzw. Auswahl von
                        Hardware, Software sowie Verfahren entsprechend dem
                        Prinzip des Datenschutzes, durch Technikgestaltung und
                        durch datenschutzfreundliche Voreinstellungen.
                    </p>
                    <p>
                        TLS-Verschlüsselung (https): Um Ihre via unserem
                        Online-Angebot übermittelten Daten zu schützen, nutzen
                        wir eine TLS-Verschlüsselung. Sie erkennen derart
                        verschlüsselte Verbindungen an dem Präfix https:// in
                        der Adresszeile Ihres Browsers.
                    </p>
                    <h2 id="m25">Übermittlung von personenbezogenen Daten</h2>
                    <p>
                        Im Rahmen unserer Verarbeitung von personenbezogenen
                        Daten kommt es vor, dass die Daten an andere Stellen,
                        Unternehmen, rechtlich selbstständige
                        Organisationseinheiten oder Personen übermittelt oder
                        sie ihnen gegenüber offengelegt werden. Zu den
                        Empfängern dieser Daten können z.B. mit IT-Aufgaben
                        beauftragte Dienstleister oder Anbieter von Diensten und
                        Inhalten, die in eine Webseite eingebunden werden,
                        gehören. In solchen Fällen beachten wir die gesetzlichen
                        Vorgaben und schließen insbesondere entsprechende
                        Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten
                        dienen, mit den Empfängern Ihrer Daten ab.
                    </p>
                    <h2 id="m12">Löschung von Daten</h2>
                    <p>
                        Die von uns verarbeiteten Daten werden nach Maßgabe der
                        gesetzlichen Vorgaben gelöscht, sobald deren zur
                        Verarbeitung erlaubten Einwilligungen widerrufen werden
                        oder sonstige Erlaubnisse entfallen (z.B. wenn der Zweck
                        der Verarbeitung dieser Daten entfallen ist oder sie für
                        den Zweck nicht erforderlich sind). Sofern die Daten
                        nicht gelöscht werden, weil sie für andere und
                        gesetzlich zulässige Zwecke erforderlich sind, wird
                        deren Verarbeitung auf diese Zwecke beschränkt. D.h.,
                        die Daten werden gesperrt und nicht für andere Zwecke
                        verarbeitet. Das gilt z.B. für Daten, die aus handels-
                        oder steuerrechtlichen Gründen aufbewahrt werden müssen
                        oder deren Speicherung zur Geltendmachung, Ausübung oder
                        Verteidigung von Rechtsansprüchen oder zum Schutz der
                        Rechte einer anderen natürlichen oder juristischen
                        Person erforderlich ist.
                    </p>
                    <p>
                        Unsere Datenschutzhinweise können ferner weitere Angaben
                        zu der Aufbewahrung und Löschung von Daten beinhalten,
                        die für die jeweiligen Verarbeitungen vorrangig gelten.
                    </p>
                    <h2 id="m225">
                        Bereitstellung des Onlineangebotes und Webhosting
                    </h2>
                    <p>
                        Wir verarbeiten die Daten der Nutzer, um ihnen unsere
                        Online-Dienste zur Verfügung stellen zu können. Zu
                        diesem Zweck verarbeiten wir die IP-Adresse des Nutzers,
                        die notwendig ist, um die Inhalte und Funktionen unserer
                        Online-Dienste an den Browser oder das Endgerät der
                        Nutzer zu übermitteln.
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong>
                            Nutzungsdaten (z.B. besuchte Webseiten, Interesse an
                            Inhalten, Zugriffszeiten); Meta-, Kommunikations-
                            und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben,
                            Identifikationsnummern, Einwilligungsstatus).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Nutzer (z.B.
                            Webseitenbesucher, Nutzer von Onlinediensten).
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong>
                            Bereitstellung unseres Onlineangebotes und
                            Nutzerfreundlichkeit; Informationstechnische
                            Infrastruktur (Betrieb und Bereitstellung von
                            Informationssystemen und technischen Geräten
                            (Computer, Server etc.).); Sicherheitsmaßnahmen.
                        </li>
                        <li>
                            <strong>Rechtsgrundlagen:</strong> Berechtigte
                            Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Weitere Hinweise zu Verarbeitungsprozessen,
                            Verfahren und Diensten:
                        </strong>
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>
                                Bereitstellung Onlineangebot auf eigener/
                                dedizierter Serverhardware:
                            </strong>
                            Für die Bereitstellung unseres Onlineangebotes
                            nutzen wir von uns betriebene Serverhardware sowie
                            den damit verbundenen Speicherplatz, die
                            Rechenkapazität und die Software;
                            <strong>Rechtsgrundlagen:</strong> Berechtigte
                            Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                        </li>
                        <li>
                            <strong>
                                Erhebung von Zugriffsdaten und Logfiles:
                            </strong>
                            Der Zugriff auf unser Onlineangebot wird in Form von
                            so genannten &quot;Server-Logfiles&quot;
                            protokolliert. Zu den Serverlogfiles können die
                            Adresse und Name der abgerufenen Webseiten und
                            Dateien, Datum und Uhrzeit des Abrufs, übertragene
                            Datenmengen, Meldung über erfolgreichen Abruf,
                            Browsertyp nebst Version, das Betriebssystem des
                            Nutzers, Referrer URL (die zuvor besuchte Seite) und
                            im Regelfall IP-Adressen und der anfragende Provider
                            gehören. Die Serverlogfiles können zum einen zu
                            Zwecken der Sicherheit eingesetzt werden, z.B., um
                            eine Überlastung der Server zu vermeiden
                            (insbesondere im Fall von missbräuchlichen
                            Angriffen, sogenannten DDoS-Attacken) und zum
                            anderen, um die Auslastung der Server und ihre
                            Stabilität sicherzustellen;
                            <strong>Rechtsgrundlagen:</strong> Berechtigte
                            Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
                            <strong>Löschung von Daten:</strong>
                            Logfile-Informationen werden für die Dauer von
                            maximal 30 Tagen gespeichert und danach gelöscht
                            oder anonymisiert. Daten, deren weitere Aufbewahrung
                            zu Beweiszwecken erforderlich ist, sind bis zur
                            endgültigen Klärung des jeweiligen Vorfalls von der
                            Löschung ausgenommen.
                        </li>
                        <li>
                            <strong>STRATO: </strong>Leistungen auf dem Gebiet
                            der Bereitstellung von informationstechnischer
                            Infrastruktur und verbundenen Dienstleistungen (z.B.
                            Speicherplatz und/oder Rechenkapazitäten);
                            <strong>Dienstanbieter:</strong> STRATO AG,
                            Pascalstraße 10,10587 Berlin, Deutschland;
                            <strong>Rechtsgrundlagen:</strong> Berechtigte
                            Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
                            <strong>Website:</strong>
                            <a
                                href="https://www.strato.de"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://www.strato.de
                            </a>
                            ; <strong>Datenschutzerklärung:</strong>
                            <a
                                href="https://www.strato.de/datenschutz"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://www.strato.de/datenschutz
                            </a>
                            ; <strong>Auftragsverarbeitungsvertrag:</strong>
                            Wird vom Dienstanbieter bereitgestellt.
                        </li>
                    </ul>
                    <h2 id="m182">Kontakt- und Anfragenverwaltung</h2>
                    <p>
                        Bei der Kontaktaufnahme mit uns (z.B. per Post,
                        Kontaktformular, E-Mail, Telefon oder via soziale
                        Medien) sowie im Rahmen bestehender Nutzer- und
                        Geschäftsbeziehungen werden die Angaben der anfragenden
                        Personen verarbeitet soweit dies zur Beantwortung der
                        Kontaktanfragen und etwaiger angefragter Maßnahmen
                        erforderlich ist.
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong>
                            Kontaktdaten (z.B. E-Mail, Telefonnummern);
                            Inhaltsdaten (z.B. Eingaben in Onlineformularen);
                            Nutzungsdaten (z.B. besuchte Webseiten, Interesse an
                            Inhalten, Zugriffszeiten); Meta-, Kommunikations-
                            und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben,
                            Identifikationsnummern, Einwilligungsstatus).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong>
                            Kommunikationspartner.
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong>
                            Kontaktanfragen und Kommunikation; Verwaltung und
                            Beantwortung von Anfragen; Feedback (z.B. Sammeln
                            von Feedback via Online-Formular); Bereitstellung
                            unseres Onlineangebotes und Nutzerfreundlichkeit.
                        </li>
                        <li>
                            <strong>Rechtsgrundlagen:</strong> Berechtigte
                            Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
                            Vertragserfüllung und vorvertragliche Anfragen (Art.
                            6 Abs. 1 S. 1 lit. b) DSGVO).
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Weitere Hinweise zu Verarbeitungsprozessen,
                            Verfahren und Diensten:
                        </strong>
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Kontaktformular: </strong>Wenn Nutzer über
                            unser Kontaktformular, E-Mail oder andere
                            Kommunikationswege mit uns in Kontakt treten,
                            verarbeiten wir die uns in diesem Zusammenhang
                            mitgeteilten Daten zur Bearbeitung des mitgeteilten
                            Anliegens; <strong>Rechtsgrundlagen:</strong>
                            Vertragserfüllung und vorvertragliche Anfragen (Art.
                            6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen
                            (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                        </li>
                    </ul>
                    <h2 id="m136">
                        Präsenzen in sozialen Netzwerken (Social Media)
                    </h2>
                    <p>
                        Wir unterhalten Onlinepräsenzen innerhalb sozialer
                        Netzwerke und verarbeiten in diesem Rahmen Daten der
                        Nutzer, um mit den dort aktiven Nutzern zu kommunizieren
                        oder um Informationen über uns anzubieten.
                    </p>
                    <p>
                        Wir weisen darauf hin, dass dabei Daten der Nutzer
                        außerhalb des Raumes der Europäischen Union verarbeitet
                        werden können. Hierdurch können sich für die Nutzer
                        Risiken ergeben, weil so z.B. die Durchsetzung der
                        Rechte der Nutzer erschwert werden könnte.
                    </p>
                    <p>
                        Ferner werden die Daten der Nutzer innerhalb sozialer
                        Netzwerke im Regelfall für Marktforschungs- und
                        Werbezwecke verarbeitet. So können z.B. anhand des
                        Nutzungsverhaltens und sich daraus ergebender Interessen
                        der Nutzer Nutzungsprofile erstellt werden. Die
                        Nutzungsprofile können wiederum verwendet werden, um
                        z.B. Werbeanzeigen innerhalb und außerhalb der Netzwerke
                        zu schalten, die mutmaßlich den Interessen der Nutzer
                        entsprechen. Zu diesen Zwecken werden im Regelfall
                        Cookies auf den Rechnern der Nutzer gespeichert, in
                        denen das Nutzungsverhalten und die Interessen der
                        Nutzer gespeichert werden. Ferner können in den
                        Nutzungsprofilen auch Daten unabhängig der von den
                        Nutzern verwendeten Geräte gespeichert werden
                        (insbesondere, wenn die Nutzer Mitglieder der jeweiligen
                        Plattformen sind und bei diesen eingeloggt sind).
                    </p>
                    <p>
                        Für eine detaillierte Darstellung der jeweiligen
                        Verarbeitungsformen und der Widerspruchsmöglichkeiten
                        (Opt-Out) verweisen wir auf die Datenschutzerklärungen
                        und Angaben der Betreiber der jeweiligen Netzwerke.
                    </p>
                    <p>
                        Auch im Fall von Auskunftsanfragen und der
                        Geltendmachung von Betroffenenrechten weisen wir darauf
                        hin, dass diese am effektivsten bei den Anbietern
                        geltend gemacht werden können. Nur die Anbieter haben
                        jeweils Zugriff auf die Daten der Nutzer und können
                        direkt entsprechende Maßnahmen ergreifen und Auskünfte
                        geben. Sollten Sie dennoch Hilfe benötigen, dann können
                        Sie sich an uns wenden.
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong>
                            Kontaktdaten (z.B. E-Mail, Telefonnummern);
                            Inhaltsdaten (z.B. Eingaben in Onlineformularen);
                            Nutzungsdaten (z.B. besuchte Webseiten, Interesse an
                            Inhalten, Zugriffszeiten); Meta-, Kommunikations-
                            und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben,
                            Identifikationsnummern, Einwilligungsstatus).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Nutzer (z.B.
                            Webseitenbesucher, Nutzer von Onlinediensten).
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong>
                            Kontaktanfragen und Kommunikation; Feedback (z.B.
                            Sammeln von Feedback via Online-Formular);
                            Marketing.
                        </li>
                        <li>
                            <strong>Rechtsgrundlagen:</strong> Berechtigte
                            Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Weitere Hinweise zu Verarbeitungsprozessen,
                            Verfahren und Diensten:
                        </strong>
                    </p>
                    <ul className="m-elements">
                        <li>
                            <strong>Instagram: </strong>Soziales Netzwerk;
                            <strong>Dienstanbieter:</strong> Meta Platforms
                            Irland Limited, 4 Grand Canal Square, Grand Canal
                            Harbour, Dublin 2, Irland;
                            <strong>Rechtsgrundlagen:</strong> Berechtigte
                            Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
                            <strong>Website:</strong>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://www.instagram.com
                            </a>
                            ; <strong>Datenschutzerklärung:</strong>
                            <a
                                href="https://instagram.com/about/legal/privacy"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://instagram.com/about/legal/privacy
                            </a>
                            .
                        </li>
                        <li>
                            <strong>TikTok: </strong>Soziales Netzwerk /
                            Video-Plattform; <strong>Dienstanbieter:</strong>
                            TikTok Technology Limited, 10 Earlsfort Terrace,
                            Dublin, D02 T380, Irland;
                            <strong>Rechtsgrundlagen:</strong> Berechtigte
                            Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
                            <strong>Website:</strong>
                            <a
                                href="https://www.tiktok.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://www.tiktok.com
                            </a>
                            ; <strong>Datenschutzerklärung:</strong>
                            <a
                                href="https://www.tiktok.com/de/privacy-policy"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://www.tiktok.com/de/privacy-policy
                            </a>
                            .
                        </li>
                    </ul>
                    <h2 id="m15">
                        Änderung und Aktualisierung der Datenschutzerklärung
                    </h2>
                    <p>
                        Wir bitten Sie, sich regelmäßig über den Inhalt unserer
                        Datenschutzerklärung zu informieren. Wir passen die
                        Datenschutzerklärung an, sobald die Änderungen der von
                        uns durchgeführten Datenverarbeitungen dies erforderlich
                        machen. Wir informieren Sie, sobald durch die Änderungen
                        eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung)
                        oder eine sonstige individuelle Benachrichtigung
                        erforderlich wird.
                    </p>
                    <p>
                        Sofern wir in dieser Datenschutzerklärung Adressen und
                        Kontaktinformationen von Unternehmen und Organisationen
                        angeben, bitten wir zu beachten, dass die Adressen sich
                        über die Zeit ändern können und bitten die Angaben vor
                        Kontaktaufnahme zu prüfen.
                    </p>
                    <h2 id="m10">Rechte der betroffenen Personen</h2>
                    <p>
                        Ihnen stehen als Betroffene nach der DSGVO verschiedene
                        Rechte zu, die sich insbesondere aus Art. 15 bis 21
                        DSGVO ergeben:
                    </p>
                    <ul>
                        <li>
                            <strong>
                                Widerspruchsrecht: Sie haben das Recht, aus
                                Gründen, die sich aus Ihrer besonderen Situation
                                ergeben, jederzeit gegen die Verarbeitung der
                                Sie betreffenden personenbezogenen Daten, die
                                aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO
                                erfolgt, Widerspruch einzulegen; dies gilt auch
                                für ein auf diese Bestimmungen gestütztes
                                Profiling. Werden die Sie betreffenden
                                personenbezogenen Daten verarbeitet, um
                                Direktwerbung zu betreiben, haben Sie das Recht,
                                jederzeit Widerspruch gegen die Verarbeitung der
                                Sie betreffenden personenbezogenen Daten zum
                                Zwecke derartiger Werbung einzulegen; dies gilt
                                auch für das Profiling, soweit es mit solcher
                                Direktwerbung in Verbindung steht.
                            </strong>
                        </li>
                        <li>
                            <strong>Widerrufsrecht bei Einwilligungen:</strong>
                            Sie haben das Recht, erteilte Einwilligungen
                            jederzeit zu widerrufen.
                        </li>
                        <li>
                            <strong>Auskunftsrecht:</strong> Sie haben das
                            Recht, eine Bestätigung darüber zu verlangen, ob
                            betreffende Daten verarbeitet werden und auf
                            Auskunft über diese Daten sowie auf weitere
                            Informationen und Kopie der Daten entsprechend den
                            gesetzlichen Vorgaben.
                        </li>
                        <li>
                            <strong>Recht auf Berichtigung:</strong> Sie haben
                            entsprechend den gesetzlichen Vorgaben das Recht,
                            die Vervollständigung der Sie betreffenden Daten
                            oder die Berichtigung der Sie betreffenden
                            unrichtigen Daten zu verlangen.
                        </li>
                        <li>
                            <strong>
                                Recht auf Löschung und Einschränkung der
                                Verarbeitung:
                            </strong>
                            Sie haben nach Maßgabe der gesetzlichen Vorgaben das
                            Recht, zu verlangen, dass Sie betreffende Daten
                            unverzüglich gelöscht werden, bzw. alternativ nach
                            Maßgabe der gesetzlichen Vorgaben eine Einschränkung
                            der Verarbeitung der Daten zu verlangen.
                        </li>
                        <li>
                            <strong>Recht auf Datenübertragbarkeit:</strong> Sie
                            haben das Recht, Sie betreffende Daten, die Sie uns
                            bereitgestellt haben, nach Maßgabe der gesetzlichen
                            Vorgaben in einem strukturierten, gängigen und
                            maschinenlesbaren Format zu erhalten oder deren
                            Übermittlung an einen anderen Verantwortlichen zu
                            fordern.
                        </li>
                        <li>
                            <strong>Beschwerde bei Aufsichtsbehörde:</strong>
                            Sie haben unbeschadet eines anderweitigen
                            verwaltungsrechtlichen oder gerichtlichen
                            Rechtsbehelfs das Recht auf Beschwerde bei einer
                            Aufsichtsbehörde, insbesondere in dem Mitgliedstaat
                            ihres gewöhnlichen Aufenthaltsorts, ihres
                            Arbeitsplatzes oder des Orts des mutmaßlichen
                            Verstoßes, wenn Sie der Ansicht sind, dass die
                            Verarbeitung der Sie betreffenden personenbezogenen
                            Daten gegen die Vorgaben der DSGVO verstößt.
                        </li>
                    </ul>
                    <p className="seal">
                        <a
                            href="https://datenschutz-generator.de/"
                            title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                        >
                            Erstellt mit kostenlosem Datenschutz-Generator.de
                            von Dr. Thomas Schwenke
                        </a>
                    </p>
                </>
            ) : (
                <Link href={"/de/privacy"}>Show original version</Link>
            )}
        </Page>
    )
}
