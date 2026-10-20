const HIGH_SCORE_KEY = "phish-or-legit-high-score";

export function getHighScore(): number {
  if (typeof window === "undefined") {
    return 0;
  }

  try {
    const savedScore = localStorage.getItem(HIGH_SCORE_KEY);

    if (savedScore === null) {
      return 0;
    }

    const score = Number(savedScore);

    return Number.isFinite(score) && score >= 0 ? score : 0;
  } catch {
    return 0;
  }
}

export function saveHighScore(score: number): void {
  if (typeof window === "undefined" || !Number.isFinite(score) || score < 0) {
    return;
  }

  try {
    const currentHighScore = getHighScore();

    if (score > currentHighScore) {
      localStorage.setItem(HIGH_SCORE_KEY, String(score));
    }
  } catch {
    // De quiz blijft werken als lokale opslag niet beschikbaar is.
  }
}
