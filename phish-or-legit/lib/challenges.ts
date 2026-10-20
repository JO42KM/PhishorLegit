export type ChallengeCategory =
  | "Pakketbezorging"
  | "Bankzaken"
  | "Accountbeveiliging"
  | "Werk en school"
  | "Prijzen en aanbiedingen"
  | "Sms en WhatsApp"
  | "Webwinkels"
  | "AI en moderne fraude";

export type ChallengeType = "EMAIL" | "SMS" | "CHAT";

export type ChallengeDifficulty = "MAKKELIJK" | "GEMIDDELD" | "MOEILIJK";

export type ChallengeLabel = "PHISHING" | "LEGITIMATE";

export type Challenge = {
  id: string;
  category: ChallengeCategory;
  type: ChallengeType;
  difficulty: ChallengeDifficulty;
  sender: string;
  subject: string;
  message: string;
  label: ChallengeLabel;
  redFlags: string[];
  explanation: string;
  advice: string;
  points: number;
};

// Alle berichten hieronder zijn fictieve trainingsscenario's.
// Gebruik .invalid als domein voor voorbeeldadressen.
// De scenario's zijn geïnspireerd op veelvoorkomende fraudepatronen,
// maar zijn geen echte berichten van genoemde organisaties.

export const challenges: Challenge[] = [
  // --------------------------------------------------
  // 1. PAKKETBEZORGING
  // --------------------------------------------------
  {
    id: "delivery-01",
    category: "Pakketbezorging",
    type: "EMAIL",
    difficulty: "MAKKELIJK",
    sender: "Bezorgservice <bezorging@pakket-info.invalid>",
    subject: "Je pakket wacht op bevestiging",
    message:
      "Beste klant,\n\nWe konden je pakket niet bezorgen vanwege ontbrekende adresgegevens.\n\nBevestig binnen 12 uur je gegevens om te voorkomen dat je pakket wordt teruggestuurd. Er kunnen administratiekosten van toepassing zijn.\n\nMet vriendelijke groet,\nDe bezorgservice",
    label: "PHISHING",
    redFlags: [
      "Er wordt tijdsdruk gebruikt.",
      "De afzender is niet duidelijk aan een echte bezorgdienst te koppelen.",
      "Er wordt gedreigd met extra kosten.",
      "De aanhef is algemeen en bevat geen concrete pakketgegevens.",
    ],
    explanation:
      "Dit bericht combineert tijdsdruk met een dreiging van extra kosten. De afzender is niet aantoonbaar officieel. Zulke kenmerken komen vaak voor bij phishing rond pakketbezorging.",
    advice:
      "Controleer je pakket via de officiële app of website van de bezorgdienst. Gebruik daarvoor zelf het bekende adres, niet een link uit een onverwacht bericht.",
    points: 100,
  },
  {
    id: "delivery-02",
    category: "Pakketbezorging",
    type: "SMS",
    difficulty: "GEMIDDELD",
    sender: "Pakketmelding",
    subject: "",
    message:
      "Je pakket kan vandaag niet worden bezorgd. Werk je bezorgvoorkeuren bij via onze website of app als je een andere bezorgdatum wilt kiezen.",
    label: "LEGITIMATE",
    redFlags: [],
    explanation:
      "Dit fictieve voorbeeld bevat geen dringende dreiging, onverwacht betaalverzoek of verzoek om wachtwoorden. Het bericht vraagt je niet om via een onbekende link gevoelige gegevens in te voeren. In het echte leven bewijst de tekst alleen niet dat een bericht authentiek is.",
    advice:
      "Als je daadwerkelijk een pakket verwacht, controleer de status dan zelfstandig via de officiële app of website. Beoordeel een bericht niet uitsluitend op zijn formulering.",
    points: 150,
  },
  {
    id: "delivery-03",
    category: "Pakketbezorging",
    type: "EMAIL",
    difficulty: "MOEILIJK",
    sender: "Klantenservice <service@zending-status.invalid>",
    subject: "Bevestiging van je bezorgvoorkeur",
    message:
      "Goedemiddag,\n\nJe hebt aangegeven dat je je pakket op een ander moment wilt ontvangen. Je voorkeur is nog niet verwerkt.\n\nOpen de bijgevoegde pagina om je keuze te bevestigen. Je hoeft geen betaling te doen.\n\nDank voor je medewerking.",
    label: "PHISHING",
    redFlags: [
      "De afzender is niet onafhankelijk als officieel te verifiëren.",
      "De ontvanger wordt naar een pagina gestuurd via een onverwacht bericht.",
      "De geruststelling over betaling bewijst niet dat het bericht veilig is.",
    ],
    explanation:
      "Het bericht klinkt rustig en professioneel. Dat maakt het niet automatisch veilig. De afzender is niet verifieerbaar en de ontvanger wordt naar een pagina gestuurd om iets te bevestigen.",
    advice:
      "Open de officiële bezorgapp zelf en controleer of er echt een wijziging klaarstaat. Een vertrouwde schrijfstijl is geen bewijs van echtheid.",
    points: 200,
  },

  // --------------------------------------------------
  // 2. BANKZAKEN
  // --------------------------------------------------
  {
    id: "bank-01",
    category: "Bankzaken",
    type: "SMS",
    difficulty: "MAKKELIJK",
    sender: "Bankwaarschuwing",
    subject: "",
    message:
      "Er is een verdachte betaling ontdekt. Bevestig direct je bankgegevens om blokkering van je rekening te voorkomen.",
    label: "PHISHING",
    redFlags: [
      "Er wordt gedreigd met blokkering van de rekening.",
      "De ontvanger moet direct handelen.",
      "Er wordt gevraagd om bankgegevens te bevestigen.",
      "De afzender is niet onafhankelijk geverifieerd.",
    ],
    explanation:
      "Criminelen gebruiken soms angst voor rekeningblokkering om mensen overhaast te laten handelen. Een berichtnaam of sms-afzender bewijst niet dat een bericht echt van je bank komt.",
    advice:
      "Open zelf de officiële bankapp. Zie je daar niets over de melding, neem dan via het officiële telefoonnummer contact op met je bank.",
    points: 100,
  },
  {
    id: "bank-02",
    category: "Bankzaken",
    type: "EMAIL",
    difficulty: "GEMIDDELD",
    sender: "Bankmeldingen <meldingen@rekening-alert.invalid>",
    subject: "Je maandelijkse rekeningoverzicht staat klaar",
    message:
      "Beste klant,\n\nJe nieuwe rekeningoverzicht is beschikbaar.\n\nJe kunt je transacties bekijken door de bankapp te openen zoals je dat normaal doet.\n\nMet vriendelijke groet,\nHet serviceteam",
    label: "LEGITIMATE",
    redFlags: [],
    explanation:
      "Het voorbeeld vraagt niet om wachtwoorden, codes of betalingen en verwijst naar de gebruikelijke bankapp. Dat zijn positieve signalen, maar een professionele tekst garandeert geen echtheid.",
    advice:
      "Open bij financiële berichten zelf de bankapp. Controleer de afzender en neem bij twijfel rechtstreeks contact op met je bank.",
    points: 150,
  },
  {
    id: "bank-03",
    category: "Bankzaken",
    type: "EMAIL",
    difficulty: "MOEILIJK",
    sender: "Fraudepreventie <veiligheid@bank-controle.invalid>",
    subject: "Controle van een ongebruikelijke overschrijving",
    message:
      "Geachte klant,\n\nOnze systemen hebben een ongebruikelijke overschrijving gedetecteerd. Om verdere verwerking te voorkomen, vragen wij je de transactie te beoordelen.\n\nNeem contact op met onze fraudeafdeling via het telefoonnummer dat op de officiële website van je bank staat.\n\nMet vriendelijke groet,\nFraudepreventie",
    label: "LEGITIMATE",
    redFlags: [],
    explanation:
      "Dit fictieve voorbeeld verwijst naar een onafhankelijk te vinden telefoonnummer en vraagt niet om een wachtwoord, beveiligingscode of betaling. Toch kan de tekst alleen niet bewijzen dat een echt bericht van de bank afkomstig is.",
    advice:
      "Zoek het nummer zelf op via de officiële website of gebruik de bankapp. Geef nooit je pincode of eenmalige verificatiecode door aan iemand die contact met je opneemt.",
    points: 200,
  },

  // --------------------------------------------------
  // 3. ACCOUNTBEVEILIGING
  // --------------------------------------------------
  {
    id: "account-01",
    category: "Accountbeveiliging",
    type: "EMAIL",
    difficulty: "MAKKELIJK",
    sender: "Accountteam <support@login-help.invalid>",
    subject: "Je account wordt vandaag verwijderd",
    message:
      "We hebben vastgesteld dat je account niet meer actief is. Log binnen 30 minuten in om permanente verwijdering te voorkomen.\n\nAls je niet op tijd reageert, verlies je toegang tot al je bestanden.",
    label: "PHISHING",
    redFlags: [
      "Een zeer korte deadline.",
      "Dreiging met permanent verlies van gegevens.",
      "De afzender is niet aantoonbaar officieel.",
      "De ontvanger wordt onder druk gezet om snel in te loggen.",
    ],
    explanation:
      "De combinatie van een korte deadline en dreigend gegevensverlies is verdacht. Zulke druk kan ervoor zorgen dat iemand een inlogpagina niet goed controleert.",
    advice:
      "Ga zelf naar de officiële website of app van de dienst. Controleer daar de accountstatus en wijzig je wachtwoord alleen via het officiële kanaal als dat nodig is.",
    points: 100,
  },
  {
    id: "account-02",
    category: "Accountbeveiliging",
    type: "EMAIL",
    difficulty: "GEMIDDELD",
    sender: "Beveiligingsmelding <security@account-notice.invalid>",
    subject: "Nieuwe aanmelding bij je account",
    message:
      "Hallo,\n\nEr is een nieuwe aanmelding bij je account geregistreerd.\n\nHerken je deze activiteit niet? Open dan zelf de officiële app of website en bekijk je recente beveiligingsactiviteit.\n\nJe hoeft niet op dit bericht te antwoorden.",
    label: "LEGITIMATE",
    redFlags: [],
    explanation:
      "Het bericht vraagt niet om geheime gegevens en adviseert om de accountactiviteit zelfstandig te controleren. Dat is veiliger dan via een onverwachte link inloggen. De afzender blijft wel onafhankelijk te controleren.",
    advice:
      "Controleer je recente aanmeldingen via de officiële dienst. Zie je onbekende activiteit, wijzig dan je wachtwoord via de officiële website en schakel waar mogelijk multifactorauthenticatie in.",
    points: 150,
  },
  {
    id: "account-03",
    category: "Accountbeveiliging",
    type: "CHAT",
    difficulty: "MOEILIJK",
    sender: "IT-helpdesk",
    subject: "",
    message:
      "Hoi! We zien dat je account niet goed synchroniseert. Ik kan het direct oplossen. Stuur me even de verificatiecode die je zo per sms ontvangt, dan koppel ik je account opnieuw.",
    label: "PHISHING",
    redFlags: [
      "Er wordt om een verificatiecode gevraagd.",
      "De afzender wil een beveiligingsstap namens jou uitvoeren.",
      "Het verzoek komt onverwacht via chat.",
      "De situatie wordt voorgesteld als een snelle, eenvoudige oplossing.",
    ],
    explanation:
      "Een verificatiecode kan toegang tot je account geven. Een oplichter kan zich voordoen als medewerker van de IT-helpdesk om die code te bemachtigen.",
    advice:
      "Deel nooit eenmalige verificatiecodes met iemand die erom vraagt. Neem zelf contact op met de IT-afdeling via het bekende interne kanaal.",
    points: 200,
  },

  // --------------------------------------------------
  // 4. WERK EN SCHOOL
  // --------------------------------------------------
  {
    id: "work-01",
    category: "Werk en school",
    type: "EMAIL",
    difficulty: "MAKKELIJK",
    sender: "Directie <directie@spoedbetaling.invalid>",
    subject: "Dringend: vertrouwelijke betaling",
    message:
      "Ik zit momenteel in een vergadering en kan niet bellen. Maak vandaag nog een betaling over naar de rekening in de bijlage. Houd dit voorlopig vertrouwelijk; ik leg het later uit.",
    label: "PHISHING",
    redFlags: [
      "Een onverwacht verzoek om geld over te maken.",
      "De afzender wil niet telefonisch bereikbaar zijn.",
      "Er wordt gevraagd om geheimhouding.",
      "Er is tijdsdruk.",
    ],
    explanation:
      "Dit lijkt op CEO-fraude: een crimineel doet zich voor als een leidinggevende en probeert een medewerker tot een betaling te bewegen. De combinatie van haast en geheimhouding is bijzonder verdacht.",
    advice:
      "Voer de betaling niet uit voordat je het verzoek via een onafhankelijk bekend kanaal hebt gecontroleerd. Bel de leidinggevende op het bekende nummer.",
    points: 100,
  },
  {
    id: "work-02",
    category: "Werk en school",
    type: "EMAIL",
    difficulty: "GEMIDDELD",
    sender: "HR-team <hr@personeelszaken.invalid>",
    subject: "Herinnering: bekijk de bijgewerkte personeelsregeling",
    message:
      "Beste collega,\n\nDe personeelsregeling is bijgewerkt. Je kunt het document bekijken via het gebruikelijke interne medewerkersportaal.\n\nAls je vragen hebt, neem dan contact op met HR via de interne adreslijst.\n\nGroeten,\nHR",
    label: "LEGITIMATE",
    redFlags: [],
    explanation:
      "Het voorbeeld verwijst naar een gebruikelijk intern portaal en vraagt niet om inloggegevens via een onverwachte externe pagina. In een echte werkomgeving moet je nog steeds controleren of het bericht en de wijziging bekend zijn.",
    advice:
      "Open het interne portaal via je gebruikelijke bladwijzer of bedrijfsomgeving. Volg geen onverwachte inlogverzoeken zonder controle.",
    points: 150,
  },
  {
    id: "work-03",
    category: "Werk en school",
    type: "CHAT",
    difficulty: "MOEILIJK",
    sender: "Collega via chat",
    subject: "",
    message:
      "Kun je even helpen? Ik ben buitengesloten van mijn account en moet een deadline halen. Kun je jouw account gebruiken om dit document te openen en daarna de beveiligingsmelding goedkeuren? Ik stuur je zo de aanvraag.",
    label: "PHISHING",
    redFlags: [
      "Er wordt gevraagd om je eigen account voor iemand anders te gebruiken.",
      "De afzender gebruikt een deadline als drukmiddel.",
      "Je wordt gevraagd een beveiligingsmelding goed te keuren.",
      "Het verzoek kan toegang geven tot bedrijfsgegevens.",
    ],
    explanation:
      "Een verzoek van een bekende collega is niet automatisch veilig. Een gehackt account kan worden gebruikt om collega's te benaderen. Het goedkeuren van een onbekende aanmelding kan ongeautoriseerde toegang mogelijk maken.",
    advice:
      "Keur geen onverwachte beveiligingsaanvraag goed en deel je account niet. Verifieer het verzoek via een ander bekend communicatiekanaal en volg het IT-beleid.",
    points: 200,
  },

  // --------------------------------------------------
  // 5. PRIJZEN EN AANBIEDINGEN
  // --------------------------------------------------
  {
    id: "prize-01",
    category: "Prijzen en aanbiedingen",
    type: "EMAIL",
    difficulty: "MAKKELIJK",
    sender: "Winactie <winnaar@prijs-service.invalid>",
    subject: "Gefeliciteerd! Je hebt een prijs gewonnen",
    message:
      "Goed nieuws! Je bent geselecteerd als winnaar van een nieuwe smartphone.\n\nBetaal alleen de verzendkosten om je prijs te ontvangen. Je hebt 20 minuten om je prijs te claimen.",
    label: "PHISHING",
    redFlags: [
      "Je hebt geen context over deelname aan een actie.",
      "Er wordt om betaling gevraagd om een prijs te ontvangen.",
      "Er is een zeer korte deadline.",
      "De afzender is niet verifieerbaar.",
    ],
    explanation:
      "Onverwachte prijzen waarvoor je eerst moet betalen, zijn een bekend fraudepatroon. De combinatie van een onbekende winactie en tijdsdruk maakt het bericht extra verdacht.",
    advice:
      "Betaal niet en verstrek geen gegevens. Controleer eventuele acties via de officiële website van de organisatie die de actie zou organiseren.",
    points: 100,
  },
  {
    id: "prize-02",
    category: "Prijzen en aanbiedingen",
    type: "EMAIL",
    difficulty: "GEMIDDELD",
    sender: "Klantenprogramma <nieuws@voordeelclub.invalid>",
    subject: "Je maandelijkse ledenvoordelen",
    message:
      "Hallo,\n\nDeze maand zijn er nieuwe aanbiedingen beschikbaar voor leden.\n\nJe kunt ze bekijken door zelf naar de bekende website van het programma te gaan en in te loggen zoals je gewend bent.\n\nVeel plezier met de aanbiedingen!",
    label: "LEGITIMATE",
    redFlags: [],
    explanation:
      "Dit voorbeeld belooft geen onverwachte grote prijs, zet de ontvanger niet onder druk en vraagt niet om betaling of geheime gegevens via een berichtlink. Dat zijn relatief gunstige signalen, maar de afzender moet in de praktijk nog steeds worden geverifieerd.",
    advice:
      "Controleer aanbiedingen via de officiële website of app. Wees extra voorzichtig als een onverwachte aanbieding om betaalgegevens of een verificatiecode vraagt.",
    points: 150,
  },

  // --------------------------------------------------
  // 6. SMS EN WHATSAPP
  // --------------------------------------------------
  {
    id: "chat-01",
    category: "Sms en WhatsApp",
    type: "CHAT",
    difficulty: "MAKKELIJK",
    sender: "Onbekend nummer",
    subject: "",
    message:
      "Hoi mam, ik heb een nieuw nummer. Mijn oude telefoon doet het niet meer. Kun je me even helpen met een betaling? Ik kan nu niet bellen, maar ik stuur je de gegevens zo.",
    label: "PHISHING",
    redFlags: [
      "De afzender beweert een nieuw nummer te hebben.",
      "Er wordt om geld gevraagd.",
      "De afzender kan niet bellen.",
      "De identiteit wordt niet onafhankelijk bevestigd.",
    ],
    explanation:
      "Dit lijkt op de bekende vriend-in-nood- of familiefraude. Een crimineel doet zich voor als een familielid en probeert vertrouwen en bezorgdheid te gebruiken om geld te krijgen.",
    advice:
      "Bel het oude, bekende nummer of stel een controlevraag die een vreemde niet eenvoudig kan beantwoorden. Maak geen geld over voordat je de identiteit hebt bevestigd.",
    points: 100,
  },
  {
    id: "chat-02",
    category: "Sms en WhatsApp",
    type: "SMS",
    difficulty: "GEMIDDELD",
    sender: "Onbekende afzender",
    subject: "",
    message:
      "Er staat nog een betaling open voor een dienst die je onlangs hebt gebruikt. Controleer je eigen administratie en neem bij vragen rechtstreeks contact op met de betreffende aanbieder.",
    label: "LEGITIMATE",
    redFlags: [],
    explanation:
      "Dit fictieve bericht vraagt niet om directe betaling en bevat geen link naar een betaalpagina. Het advies om je eigen administratie te controleren is verstandig. Toch is niet vastgesteld welke aanbieder de afzender bedoelt.",
    advice:
      "Controleer of je werkelijk een openstaande betaling hebt. Gebruik je eigen administratie en de officiële contactgegevens van de aanbieder, niet gegevens uit een onverwacht bericht.",
    points: 150,
  },
  {
    id: "chat-03",
    category: "Sms en WhatsApp",
    type: "CHAT",
    difficulty: "MOEILIJK",
    sender: "Bekende collega via WhatsApp",
    subject: "",
    message:
      "Ik heb net een belangrijk document gedeeld. Om het te openen moet je opnieuw inloggen en een verificatiecode invullen. Kun je dat even doen? Ik heb de link zelf ook gekregen.",
    label: "PHISHING",
    redFlags: [
      "Er wordt onverwacht om een nieuwe aanmelding gevraagd.",
      "Er is sprake van een verificatiecode.",
      "De afzender kan zelf ook slachtoffer zijn van een gehackt account.",
      "Het doel en de herkomst van het document zijn niet bevestigd.",
    ],
    explanation:
      "Een bekend contact kan onbedoeld een schadelijke link doorsturen nadat diens account is overgenomen. Een onverwacht verzoek om in te loggen of een verificatiecode in te voeren verdient extra controle.",
    advice:
      "Vraag de collega via een ander kanaal of het document echt is. Open de dienst zelfstandig en voer nooit een code in op een pagina waarvan je de echtheid niet hebt vastgesteld.",
    points: 200,
  },

  // --------------------------------------------------
  // 7. WEBWINKELS
  // --------------------------------------------------
  {
    id: "shop-01",
    category: "Webwinkels",
    type: "EMAIL",
    difficulty: "MAKKELIJK",
    sender: "Bestelservice <bestelling@winkel-controle.invalid>",
    subject: "Je bestelling is geannuleerd",
    message:
      "Je bestelling is geannuleerd vanwege een probleem met je betaalgegevens.\n\nHerstel je betaling direct om de bestelling te behouden. Als je niet reageert, vervalt je bestelling definitief.",
    label: "PHISHING",
    redFlags: [
      "Er wordt gedreigd met definitieve annulering.",
      "Er wordt onverwacht om een betalingshandeling gevraagd.",
      "De afzender is niet onafhankelijk geverifieerd.",
      "Er wordt druk uitgeoefend om direct te reageren.",
    ],
    explanation:
      "Fraudeurs gebruiken soms nepberichten over bestellingen om mensen naar nagemaakte betaalpagina's te lokken. Het is belangrijk om te controleren of de bestelling echt bestaat.",
    advice:
      "Open de officiële webshop zelf en bekijk je bestelstatus. Vul betaalgegevens niet in via een onverwachte link in een bericht.",
    points: 100,
  },
  {
    id: "shop-02",
    category: "Webwinkels",
    type: "EMAIL",
    difficulty: "MOEILIJK",
    sender: "Bestelbevestiging <orders@webshop-bericht.invalid>",
    subject: "Je bestelling is ontvangen",
    message:
      "Bedankt voor je bestelling.\n\nJe bestelling is geregistreerd. Je kunt de status bekijken door in te loggen op de website waar je de bestelling hebt geplaatst.\n\nBewaar deze e-mail voor je eigen administratie.",
    label: "LEGITIMATE",
    redFlags: [],
    explanation:
      "Dit voorbeeld bevat geen dringende dreiging en vraagt niet om opnieuw betaalgegevens te verstrekken. Een echte bestelbevestiging hoort wel overeen te komen met een bestelling die je daadwerkelijk hebt geplaatst.",
    advice:
      "Controleer of je de bestelling herkent. Als je niets hebt besteld, open dan niet zomaar bijlagen of links, maar controleer je account en neem via de officiële website contact op met de webshop.",
    points: 200,
  },

  // --------------------------------------------------
  // 8. AI EN MODERNE FRAUDE
  // --------------------------------------------------
  {
    id: "ai-01",
    category: "AI en moderne fraude",
    type: "CHAT",
    difficulty: "MOEILIJK",
    sender: "Een bekend contact via chat",
    subject: "",
    message:
      "Hoi, ik weet dat je vandaag een drukke dag hebt. Ik heb snel hulp nodig bij een betaling. Ik kan nu niet praten, maar vertrouw me alsjeblieft. Ik stuur je zo de betaalgegevens.",
    label: "PHISHING",
    redFlags: [
      "Er wordt om geld gevraagd zonder onafhankelijke verificatie.",
      "Er wordt persoonlijke context gebruikt om vertrouwen te wekken.",
      "De afzender vermijdt direct contact.",
      "De ontvanger wordt emotioneel onder druk gezet.",
    ],
    explanation:
      "Oplichters kunnen persoonlijke informatie uit sociale media gebruiken om berichten geloofwaardiger te maken. AI kan helpen om zulke berichten overtuigend te formuleren. Persoonlijke details bewijzen niet dat de afzender echt is.",
    advice:
      "Verifieer financiële verzoeken via een ander, bekend kanaal. Bel de persoon zelf en controleer de identiteit voordat je geld overmaakt.",
    points: 200,
  },
  {
    id: "ai-02",
    category: "AI en moderne fraude",
    type: "EMAIL",
    difficulty: "MOEILIJK",
    sender: "IT-beveiliging <security-team@toegang-controle.invalid>",
    subject: "Beveiligingscontrole na een nieuwe aanmelding",
    message:
      "Beste collega,\n\nWe hebben een nieuwe aanmelding geregistreerd. Als je deze zelf hebt uitgevoerd, hoef je niets te doen.\n\nHerken je de activiteit niet? Meld dit dan via het bekende interne beveiligingsportaal of neem rechtstreeks contact op met IT.\n\nMet vriendelijke groet,\nHet beveiligingsteam",
    label: "LEGITIMATE",
    redFlags: [],
    explanation:
      "Dit fictieve voorbeeld gebruikt rustige taal en verwijst naar bekende interne kanalen. Het vraagt niet om een wachtwoord of code via e-mail. Toch kunnen ook professioneel geschreven berichten worden vervalst.",
    advice:
      "Controleer de aanmelding via het interne portaal dat je al kent. Verifieer de afzender via een onafhankelijke route als je twijfelt.",
    points: 200,
  },
];