"use client";

import { useEffect, useState } from "react";
import { getHighScore, saveHighScore } from "@/lib/scores";

type Challenge = {
  sender: string;
  subject: string;
  message: string;
  label: "PHISHING" | "LEGITIMATE";
  explanation: string;
  difficulty: string;
};

const challenges: Challenge[] = [
  {
    sender: "pakketdienst@example.invalid",
    subject: "Je pakket wordt teruggestuurd!",
    message:
      "We konden je pakket niet bezorgen. Betaal binnen 30 minuten de ontbrekende bezorgkosten om te voorkomen dat je pakket wordt teruggestuurd.",
    label: "PHISHING",
    explanation:
      "Let op de tijdsdruk, de dreiging en het onverwachte betaalverzoek. Controleer de bezorgstatus via de officiële website of app van de pakketdienst.",
    difficulty: "Makkelijk",
  },
  {
    sender: "updates@example.invalid",
    subject: "Je wekelijkse rekeningoverzicht",
    message:
      "Je wekelijkse overzicht is beschikbaar. Je kunt je recente rekeningactiviteiten bekijken door zelf de officiële app of website te openen.",
    label: "LEGITIMATE",
    explanation:
      "Dit bericht vraagt niet om gevoelige informatie en verwijst je naar de officiële app of website. Toch kun je op basis van alleen de tekst niet zeker weten of het echt is.",
    difficulty: "Gemiddeld",
  },
  {
    sender: "helpdesk@example.invalid",
    subject: "Actie vereist: bevestig je wachtwoord",
    message:
      "Onze helpdesk heeft je huidige wachtwoord nodig voor een veiligheidscontrole. Stuur het zo snel mogelijk als antwoord op dit bericht.",
    label: "PHISHING",
    explanation:
      "Een betrouwbare helpdesk hoort nooit om je wachtwoord te vragen. Deel je wachtwoord niet via e-mail of chat. Neem bij twijfel zelf contact op met de officiële helpdesk.",
    difficulty: "Makkelijk",
  },
  {
    sender: "meldingen@example.invalid",
    subject: "Nieuwe aanmelding gedetecteerd",
    message:
      "Er is aangemeld bij je account. Herken je deze activiteit niet? Open dan zelf de officiële app of website en controleer je beveiligingsinstellingen.",
    label: "LEGITIMATE",
    explanation:
      "Dit bericht geeft je de mogelijkheid om zelfstandig je account te controleren. Toch bewijst de tekst niet dat het bericht echt is. Controleer verdachte meldingen altijd via het officiële kanaal.",
    difficulty: "Moeilijk",
  },
];

type Screen = "home" | "game" | "results";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<"PHISHING" | "LEGITIMATE" | null>(null);
  const [highScore, setHighScore] = useState(0);
  const [newHighScore, setNewHighScore] = useState(false);

  useEffect(() => {
    saveHighScore(getHighScore());
  }, []);

  const currentChallenge = challenges[questionIndex];

  function startGame() {
    setQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setNewHighScore(false);
    setScreen("game");
  }

  function answerQuestion(answer: "PHISHING" | "LEGITIMATE") {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);

    if (answer === currentChallenge.label) {
      setScore((previousScore) => previousScore + 100);
    }
  }

  function nextQuestion() {
    const finalScore =
      score +
      (selectedAnswer === currentChallenge.label ? 0 : 0);

    if (questionIndex < challenges.length - 1) {
      setQuestionIndex((previousIndex) => previousIndex + 1);
      setSelectedAnswer(null);
      return;
    }

    const completedScore =
      finalScore +
      (selectedAnswer === currentChallenge.label ? 0 : 0);

    const actualScore = score;

    if (actualScore > highScore) {
      saveHighScore(actualScore);
      setHighScore(actualScore);
      setNewHighScore(true);
    } else {
      setNewHighScore(false);
    }

    setScreen("results");
  }

  const progress = ((questionIndex + 1) / challenges.length) * 100;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <button
            onClick={() => setScreen("home")}
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            Phish <span className="text-blue-600">or</span> Legit?
          </button>

          <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
            Cyberveiligheid oefenen
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
        {screen === "home" && (
          <>
            <section className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1.5 text-sm font-semibold text-blue-700">
                  Leer phishing herkennen
                </span>

                <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                  Phish of legit?
                  <br />
                  <span className="text-blue-600">
                    Jij beslist.
                  </span>
                </h1>

                <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
                  Kun jij een echt bericht van een phishingbericht
                  onderscheiden? Test je kennis met korte, herkenbare
                  voorbeelden.
                </p>

                <button
                  onClick={startGame}
                  className="mt-7 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Start de quiz →
                </button>

                <p className="mt-4 text-sm text-slate-500">
                  Gratis • Geen account nodig • 4 vragen
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                    🛡️
                  </div>
                  <div>
                    <h2 className="font-bold text-slate-900">
                      Jouw digitale veiligheid
                    </h2>
                    <p className="text-sm text-slate-500">
                      Leer door te oefenen
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🔎</span>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Herken verdachte signalen
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Let op vreemde verzoeken en tijdsdruk.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📩</span>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Bekijk voorbeeldberichten
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Oefen met verschillende situaties.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">⭐</span>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Verbeter je score
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Verdien punten met goede antwoorden.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <span className="text-sm text-slate-600">
                    Jouw persoonlijke record
                  </span>
                  <span className="font-bold text-blue-700">
                    {highScore} XP
                  </span>
                </div>
              </div>
            </section>

            <section className="mt-16">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-slate-900">
                  Zo werkt het
                </h2>
                <p className="mt-2 text-slate-600">
                  In drie eenvoudige stappen leer je veiliger online te zijn.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                {[
                  {
                    number: "1",
                    title: "Lees het bericht",
                    description:
                      "Bekijk de afzender, het onderwerp en de inhoud.",
                  },
                  {
                    number: "2",
                    title: "Kies je antwoord",
                    description:
                      "Beslis of het bericht phishing of betrouwbaar lijkt.",
                  },
                  {
                    number: "3",
                    title: "Leer van de uitleg",
                    description:
                      "Ontdek de signalen en verbeter je kennis.",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                      {step.number}
                    </div>
                    <h3 className="mt-4 font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {screen === "game" && currentChallenge && (
          <section className="mx-auto max-w-2xl">
            <button
              onClick={() => setScreen("home")}
              className="mb-6 text-sm font-medium text-slate-500 hover:text-slate-900"
            >
              ← Terug naar de startpagina
            </button>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-blue-700">
                  Vraag {questionIndex + 1} van {challenges.length}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                  {currentChallenge.difficulty}
                </span>
              </div>

              <div
                className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100"
                role="progressbar"
                aria-valuenow={questionIndex + 1}
                aria-valuemin={1}
                aria-valuemax={challenges.length}
                aria-label="Voortgang van de quiz"
              >
                <div
                  className="h-full rounded-full bg-blue-600 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <h1 className="mt-7 text-2xl font-bold text-slate-900">
                Is dit bericht phishing of betrouwbaar?
              </h1>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                <div className="border-b border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Afzender
                  </p>
                  <p className="mt-1 break-all text-sm text-slate-800">
                    {currentChallenge.sender}
                  </p>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Onderwerp
                  </p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {currentChallenge.subject}
                  </p>
                </div>

                <div className="p-5">
                  <p className="whitespace-pre-line leading-7 text-slate-700">
                    {currentChallenge.message}
                  </p>
                </div>
              </div>

              {selectedAnswer === null ? (
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <button
                    onClick={() => answerQuestion("PHISHING")}
                    className="rounded-xl border-2 border-red-200 bg-white px-5 py-4 text-left transition hover:border-red-400 hover:bg-red-50"
                  >
                    <span className="block font-bold text-red-700">
                      ⚠️ Phishing
                    </span>
                    <span className="mt-1 block text-sm text-slate-500">
                      Dit bericht is verdacht.
                    </span>
                  </button>

                  <button
                    onClick={() => answerQuestion("LEGITIMATE")}
                    className="rounded-xl border-2 border-green-200 bg-white px-5 py-4 text-left transition hover:border-green-400 hover:bg-green-50"
                  >
                    <span className="block font-bold text-green-700">
                      ✓ Betrouwbaar
                    </span>
                    <span className="mt-1 block text-sm text-slate-500">
                      Dit bericht lijkt legitiem.
                    </span>
                  </button>
                </div>
              ) : (
                <div
                  className={`mt-6 rounded-2xl border p-5 ${
                    selectedAnswer === currentChallenge.label
                      ? "border-green-200 bg-green-50"
                      : "border-amber-200 bg-amber-50"
                  }`}
                  aria-live="polite"
                >
                  <h2 className="font-bold text-slate-900">
                    {selectedAnswer === currentChallenge.label
                      ? "Goed gedaan! 🎉"
                      : "Niet helemaal juist"}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {currentChallenge.explanation}
                  </p>

                  <button
                    onClick={nextQuestion}
                    className="mt-5 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    {questionIndex < challenges.length - 1
                      ? "Volgende vraag →"
                      : "Bekijk mijn resultaat →"}
                  </button>
                </div>
              )}

              <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                <span>Score: {score} XP</span>
                <span>100 XP per goed antwoord</span>
              </div>
            </div>
          </section>
        )}

        {screen === "results" && (
          <section className="mx-auto max-w-xl text-center">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                🏆
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-blue-700">
                Quiz afgerond
              </p>

              <h1 className="mt-3 text-3xl font-bold text-slate-900">
                Goed bezig!
              </h1>

              <p className="mt-3 leading-7 text-slate-600">
                Je hebt de quiz voltooid. Blijf oefenen om verdachte berichten
                steeds beter te herkennen.
              </p>

              <div className="mt-8 rounded-2xl bg-blue-50 p-6">
                <p className="text-sm font-medium text-blue-800">
                  Jouw score
                </p>
                <p className="mt-2 text-4xl font-bold text-blue-700">
                  {score} XP
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Persoonlijk record: {highScore} XP
                </p>
              </div>

              {newHighScore && (
                <p className="mt-5 font-semibold text-green-700">
                  🎉 Nieuw persoonlijk record!
                </p>
              )}

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  onClick={startGame}
                  className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Opnieuw spelen
                </button>

                <button
                  onClick={() => setScreen("home")}
                  className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Startpagina
                </button>
              </div>
            </div>
          </section>
        )}
      </div>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Phish or Legit? — Leer phishing herkennen.</p>
          <p>Blijf alert. Denk na voordat je klikt.</p>
        </div>
      </footer>
    </main>
  );
}