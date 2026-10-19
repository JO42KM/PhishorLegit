"use client";

import { useState } from "react";

const challenges = [
  {
    sender: "security@example.invalid",
    subject: "Urgent: Your account will be suspended!",
    message:
      "We detected unusual activity on your account. Verify your identity immediately to prevent permanent suspension.",
    label: "PHISHING",
    explanation:
      "Red flags: urgent threats, pressure to act immediately, and a request to verify your identity. Never use links in unexpected security messages. Visit the official website independently.",
    difficulty: "EASY",
  },
  {
    sender: "updates@example.invalid",
    subject: "Your weekly account summary",
    message:
      "Your weekly summary is ready. You can review your recent activity by opening the official application directly.",
    label: "LEGITIMATE",
    explanation:
      "This example has fewer obvious warning signs and does not demand sensitive information. However, sender addresses can be spoofed, so inspect the actual message and verify important requests independently.",
    difficulty: "MEDIUM",
  },
  {
    sender: "helpdesk@example.invalid",
    subject: "Action required: Password verification",
    message:
      "Our support team needs your current password to complete a security check. Reply to this message as soon as possible.",
    label: "PHISHING",
    explanation:
      "Legitimate support teams should not ask you to disclose your password. Never send passwords by email or message. Use your organization's official support channel instead.",
    difficulty: "EASY",
  },
  {
    sender: "notifications@example.invalid",
    subject: "A new sign-in was detected",
    message:
      "A sign-in was detected on your account. If you do not recognize this activity, open the official app or website directly and review your security settings.",
    label: "LEGITIMATE",
    explanation:
      "This message provides a sensible way to investigate without demanding your password through a message link. Still, the sender alone cannot prove authenticity. Check your account independently.",
    difficulty: "HARD",
  },
];

const features = [
  {
    number: "01",
    title: "Spot the red flags",
    description:
      "Learn to recognize suspicious links, fake senders, urgent threats, and social engineering.",
    icon: "⌕",
  },
  {
    number: "02",
    title: "Train your instincts",
    description:
      "Practice with fictional emails and messages in realistic, interactive scenarios.",
    icon: "◎",
  },
  {
    number: "03",
    title: "Build safer habits",
    description:
      "Learn practical ways to protect your accounts, devices, and personal information.",
    icon: "◇",
  },
];

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  const currentChallenge = challenges[questionIndex];
  const answered = selectedAnswer !== null;

  function startGame() {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setGameFinished(false);
    setGameStarted(true);

    setTimeout(() => {
      document
        .getElementById("investigation")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  function answerQuestion(answer: string) {
    if (answered) return;

    setSelectedAnswer(answer);

    if (answer === currentChallenge.label) {
      setScore((previous) => previous + 100);
    }
  }

  function nextQuestion() {
    if (questionIndex + 1 >= challenges.length) {
      setGameFinished(true);
      setSelectedAnswer(null);
      return;
    }

    setQuestionIndex((previous) => previous + 1);
    setSelectedAnswer(null);
  }

  function returnHome() {
    setGameStarted(false);
    setGameFinished(false);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-48 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute top-[30rem] -right-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(148,163,184,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <header className="relative z-10 border-b border-white/[0.08] bg-[#080b12]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <button
            onClick={returnHome}
            className="flex items-center gap-3 text-left"
            aria-label="Phish or Legit home"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-2xl text-emerald-300">
              ⛨
            </span>
            <span>
              <span className="block text-base font-bold tracking-tight">
                PHISH<span className="text-emerald-400">/</span>LEGIT
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.24em] text-slate-500">
                Cyber safety lab
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a className="transition hover:text-white" href="#how-it-works">
              How it works
            </a>
            <a className="transition hover:text-white" href="#investigation">
              Challenges
            </a>
            <a className="transition hover:text-white" href="#safety">
              Safety tips
            </a>
          </div>

          <button
            onClick={startGame}
            className="rounded-lg bg-emerald-400 px-4 py-2.5 text-sm font-bold text-[#07110e] transition hover:bg-emerald-300"
          >
            Start game <span aria-hidden="true">↗</span>
          </button>
        </nav>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-28">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3.5 py-2 text-xs font-medium text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            YOUR MISSION: STAY ONE STEP AHEAD
          </div>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Think before
            <br />
            you <span className="text-emerald-400">click.</span>
            <br />
            Outsmart the scam.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            The internet is full of clever traps. Sharpen your instincts,
            investigate suspicious messages, and learn how to protect yourself
            in a world of digital deception.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={startGame}
              className="group rounded-xl bg-emerald-400 px-6 py-4 font-bold text-[#07110e] shadow-[0_0_40px_rgba(52,211,153,0.12)] transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Start investigation
              <span className="ml-3 transition group-hover:translate-x-1">
                →
              </span>
            </button>
            <a
              href="#how-it-works"
              className="rounded-xl border border-white/10 px-6 py-4 font-medium text-slate-300 transition hover:border-white/25 hover:bg-white/[0.03]"
            >
              Explore the lab
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Free to play
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> No account required
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Learn by doing
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-5 rounded-[2rem] bg-emerald-400/[0.04] blur-2xl" />

          <div className="relative rounded-2xl border border-white/10 bg-[#0d121c]/95 p-5 shadow-2xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                  Investigation room
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Incoming message
                </p>
              </div>
              <span className="rounded-md border border-amber-400/20 bg-amber-400/[0.08] px-3 py-1.5 text-[10px] font-bold tracking-wider text-amber-300">
                UNDER REVIEW
              </span>
            </div>

            <div className="mt-6 rounded-xl border border-white/[0.08] bg-[#090d15] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-400/10 text-lg text-rose-300">
                  ✉
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">
                    Account Security
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    support@example.invalid
                  </p>
                </div>
                <span className="ml-auto shrink-0 text-xs text-slate-600">
                  Just now
                </span>
              </div>

              <div className="mt-6">
                <p className="text-xs text-slate-500">SUBJECT</p>
                <p className="mt-2 font-semibold text-slate-200">
                  ⚠️ Immediate action required!
                </p>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                We noticed unusual activity on your account. Your access will
                be restricted unless you confirm your identity immediately.
              </p>

              <div className="mt-5 rounded-lg border border-rose-400/15 bg-rose-400/[0.05] p-3.5">
                <div className="flex gap-3">
                  <span className="text-lg text-rose-300">⚠</span>
                  <div>
                    <p className="text-xs font-semibold text-rose-300">
                      Potential warning signs
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Urgent language · Threat of account loss · Pressure to
                      act
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-5">
                <span className="text-xs text-slate-500">
                  Can you spot the scam?
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Your turn
                </span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
                <p className="text-xl font-bold text-emerald-300">01</p>
                <p className="mt-1 text-[10px] text-slate-500">Investigate</p>
              </div>
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
                <p className="text-xl font-bold text-cyan-300">02</p>
                <p className="mt-1 text-[10px] text-slate-500">Analyze clues</p>
              </div>
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
                <p className="text-xl font-bold text-violet-300">03</p>
                <p className="mt-1 text-[10px] text-slate-500">Earn XP</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 top-20 hidden rounded-xl border border-emerald-400/20 bg-[#101a1c] px-4 py-3 shadow-xl sm:block lg:-right-7">
            <p className="text-[10px] uppercase tracking-wider text-slate-500">
              Threat detected
            </p>
            <p className="mt-1 text-sm font-bold text-emerald-300">
              Analysis required ↗
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/[0.07] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
          <div className="px-4 py-7 sm:px-8">
            <p className="text-3xl font-semibold tracking-tight">04</p>
            <p className="mt-2 text-sm text-slate-500">
              Challenges in the demo
            </p>
          </div>
          <div className="px-4 py-7 sm:px-8">
            <p className="text-3xl font-semibold tracking-tight">100 XP</p>
            <p className="mt-2 text-sm text-slate-500">
              Earn for every correct answer
            </p>
          </div>
          <div className="px-4 py-7 sm:px-8">
            <p className="text-3xl font-semibold tracking-tight">01</p>
            <p className="mt-2 text-sm text-slate-500">
              Mission: browse more safely
            </p>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
            YOUR TRAINING PROGRAM
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Three steps to a
            <span className="text-slate-500"> safer internet.</span>
          </h2>
          <p className="mt-5 leading-7 text-slate-400">
            No boring lectures. Just hands-on challenges that help you make
            smarter decisions whenever a suspicious message lands in your inbox.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/[0.025]"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl text-emerald-300">
                  {feature.icon}
                </span>
                <span className="text-xs tracking-[0.2em] text-slate-600">
                  {feature.number}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="investigation"
        className="relative z-10 scroll-mt-8 border-y border-white/[0.07] bg-[#0b1018] px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              LIVE TRAINING SIMULATION
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              {gameStarted ? "Investigation in progress" : "Ready to investigate?"}
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
              {gameStarted
                ? "Inspect the fictional message and decide whether it is phishing or legitimate."
                : "Put your instincts to the test. Examine each message, find the clues, and earn your detective rank."}
            </p>
          </div>

          {!gameStarted ? (
            <div className="mt-10 rounded-2xl border border-white/10 bg-[#101620] p-8 text-center sm:p-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.08] text-3xl text-emerald-300">
                ⌕
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                Your first case awaits
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400">
                Four fictional messages. Two possible answers. Every round
                teaches you something useful about online safety.
              </p>
              <button
                onClick={startGame}
                className="mt-7 rounded-xl bg-emerald-400 px-6 py-3.5 font-bold text-[#07110e] transition hover:bg-emerald-300"
              >
                Begin investigation →
              </button>
            </div>
          ) : gameFinished ? (
            <div className="mt-10 rounded-2xl border border-emerald-400/20 bg-[#101a1c] p-8 text-center sm:p-12">
              <div className="text-5xl">
                {score === challenges.length * 100 ? "🏆" : "🛡️"}
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                INVESTIGATION COMPLETE
              </p>
              <h3 className="mt-3 text-3xl font-bold">
                {score === challenges.length * 100
                  ? "Master Detective!"
                  : score >= 200
                    ? "Cyber Sleuth!"
                    : "Rookie Investigator"}
              </h3>
              <p className="mt-4 text-slate-400">
                You earned{" "}
                <span className="font-bold text-emerald-300">{score} XP</span>{" "}
                out of {challenges.length * 100} possible points.
              </p>
              <p className="mt-2 text-sm text-slate-500">
                {score / 100} of {challenges.length} correct answers.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  onClick={startGame}
                  className="rounded-xl bg-emerald-400 px-6 py-3 font-bold text-[#07110e] transition hover:bg-emerald-300"
                >
                  Play again
                </button>
                <button
                  onClick={returnHome}
                  className="rounded-xl border border-white/10 px-6 py-3 font-medium text-slate-300 transition hover:bg-white/[0.05]"
                >
                  Back to home
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-white/10 bg-[#101620] p-5 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  CASE {String(questionIndex + 1).padStart(2, "0")} /{" "}
                  {String(challenges.length).padStart(2, "0")}
                </span>
                <span className="rounded-md border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-semibold text-cyan-300">
                  {currentChallenge.difficulty}
                </span>
                <span className="text-sm font-semibold text-emerald-300">
                  {score} XP
                </span>
              </div>

              <div
                className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.07]"
                role="progressbar"
                aria-label="Investigation progress"
                aria-valuenow={questionIndex + 1}
                aria-valuemin={1}
                aria-valuemax={challenges.length}
              >
                <div
                  className="h-full rounded-full bg-emerald-400 transition-all duration-300"
                  style={{
                    width: `${((questionIndex + 1) / challenges.length) * 100}%`,
                  }}
                />
              </div>

              <div className="mt-7 rounded-xl border border-white/[0.08] bg-[#090d15] p-5 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400/10 text-xl text-cyan-300">
                    ✉
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">SENDER</p>
                    <p className="mt-1 break-all text-sm font-medium">
                      {currentChallenge.sender}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-b border-white/[0.07] pb-5">
                  <p className="text-xs text-slate-500">SUBJECT</p>
                  <h3 className="mt-2 text-lg font-semibold">
                    {currentChallenge.subject}
                  </h3>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  {currentChallenge.message}
                </p>

                <div className="mt-6 rounded-lg border border-amber-400/15 bg-amber-400/[0.04] p-3 text-xs leading-5 text-amber-200/80">
                  Training simulation: this is fictional content created for
                  cybersecurity education.
                </div>
              </div>

              <p className="mt-7 text-center text-sm font-medium text-slate-300">
                What is your verdict?
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button
                  onClick={() => answerQuestion("PHISHING")}
                  disabled={answered}
                  className={`rounded-xl border px-5 py-4 text-left transition disabled:cursor-default ${
                    answered && currentChallenge.label === "PHISHING"
                      ? "border-rose-400/50 bg-rose-400/10"
                      : "border-white/10 bg-white/[0.02] hover:border-rose-400/40 hover:bg-rose-400/[0.04]"
                  }`}
                >
                  <span className="text-lg">🚨</span>
                  <span className="ml-3 font-semibold">Phishing</span>
                  <span className="mt-1 block text-xs text-slate-500">
                    A suspicious or deceptive message
                  </span>
                </button>

                <button
                  onClick={() => answerQuestion("LEGITIMATE")}
                  disabled={answered}
                  className={`rounded-xl border px-5 py-4 text-left transition disabled:cursor-default ${
                    answered && currentChallenge.label === "LEGITIMATE"
                      ? "border-emerald-400/50 bg-emerald-400/10"
                      : "border-white/10 bg-white/[0.02] hover:border-emerald-400/40 hover:bg-emerald-400/[0.04]"
                  }`}
                >
                  <span className="text-lg">✓</span>
                  <span className="ml-3 font-semibold">Legitimate</span>
                  <span className="mt-1 block text-xs text-slate-500">
                    A message that appears trustworthy
                  </span>
                </button>
              </div>

              {answered && (
                <div
                  aria-live="polite"
                  className={`mt-5 rounded-xl border p-5 ${
                    selectedAnswer === currentChallenge.label
                      ? "border-emerald-400/20 bg-emerald-400/[0.05]"
                      : "border-rose-400/20 bg-rose-400/[0.05]"
                  }`}
                >
                  <p
                    className={`font-semibold ${
                      selectedAnswer === currentChallenge.label
                        ? "text-emerald-300"
                        : "text-rose-300"
                    }`}
                  >
                    {selectedAnswer === currentChallenge.label
                      ? "Correct! +100 XP"
                      : "Not quite! No points this round."}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {currentChallenge.explanation}
                  </p>
                  <button
                    onClick={nextQuestion}
                    className="mt-5 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-bold text-[#07110e] transition hover:bg-emerald-300"
                  >
                    {questionIndex + 1 === challenges.length
                      ? "View results →"
                      : "Next case →"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section
        id="safety"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <div className="rounded-3xl border border-emerald-400/15 bg-gradient-to-br from-emerald-400/[0.07] via-[#0c1219] to-cyan-400/[0.04] p-8 sm:p-12 lg:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
            YOUR DIGITAL SHIELD
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Stay curious.
            <br />
            Stay skeptical. Stay safe.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div>
              <span className="text-xl">🔗</span>
              <h3 className="mt-3 font-semibold">Check before clicking</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Inspect unexpected links. When in doubt, visit the official
                website yourself.
              </p>
            </div>
            <div>
              <span className="text-xl">🔑</span>
              <h3 className="mt-3 font-semibold">Protect your accounts</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Use unique passwords and enable multifactor authentication.
              </p>
            </div>
            <div>
              <span className="text-xl">🧠</span>
              <h3 className="mt-3 font-semibold">Question the pressure</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Unexpected urgency, secrecy, and demands for sensitive
                information deserve extra scrutiny.
              </p>
            </div>
          </div>
          <button
            onClick={startGame}
            className="mt-10 rounded-xl bg-emerald-400 px-6 py-3.5 font-bold text-[#07110e] transition hover:bg-emerald-300"
          >
            Test your skills →
          </button>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.07] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            <span className="font-bold text-slate-300">PHISH/LEGIT</span>{" "}
            · Learn to spot the trap.
          </p>
          <p>
            Educational simulation only. No real accounts or credentials
            required.
          </p>
        </div>
      </footer>
    </main>
  );
}