import { HIGH_SCORE_PERSISTENCE_KEY } from "./prod-canvas-start-game.types";

function browserStorage(): Storage | null {
  try {
    if (typeof window === "undefined" || !window.localStorage) {
      return null;
    }
    return window.localStorage;
  } catch {
    return null;
  }
}

/**
 * Rehydration (kind: initialization) reader for PERSIST_HIGH_SCORE_LOCAL.
 * Returns null when nothing durable is stored yet.
 */
export function readPersistedHighScore(): number | null {
  const store = browserStorage();
  if (!store) {
    return null;
  }
  try {
    const raw = store.getItem(HIGH_SCORE_PERSISTENCE_KEY);
    if (raw === null) {
      return null;
    }
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed === "number" && Number.isFinite(parsed)) {
      return parsed;
    }
    if (typeof parsed === "string" && parsed.trim() !== "" && Number.isFinite(Number(parsed))) {
      return Number(parsed);
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Write of PERSIST_HIGH_SCORE_LOCAL (operation: write, statePaths: STATE_GAME /high_score).
 */
export function writePersistedHighScore(value: number): void {
  const store = browserStorage();
  if (!store) {
    return;
  }
  try {
    store.setItem(HIGH_SCORE_PERSISTENCE_KEY, JSON.stringify(value));
  } catch {
    /* persistence is best effort; the in-memory state stays authoritative */
  }
}
