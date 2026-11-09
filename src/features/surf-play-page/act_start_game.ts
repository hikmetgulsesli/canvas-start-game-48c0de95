import {
  GameState,
  START_GAME_HIGH_SCORE,
  START_GAME_MESSAGE,
  START_GAME_STATUS,
} from "../prod-canvas-start-game/prod-canvas-start-game.types";
import { writePersistedHighScore } from "../prod-canvas-start-game/prod-canvas-start-game.repo";

/**
 * ACT_START_GAME state deltas:
 *  - STATE_GAME /status  = "playing"
 *  - STATE_GAME /message = "Game started"
 *  - STATE_GAME /high_score = 0
 * Navigation: stay. No inputs.
 */
export function applyStartGame(_current: GameState): GameState {
  return {
    status: START_GAME_STATUS,
    message: START_GAME_MESSAGE,
    high_score: START_GAME_HIGH_SCORE,
  };
}

/** PERSIST_HIGH_SCORE_LOCAL write effect of ACT_START_GAME. */
export function persistStartGameHighScore(state: GameState): void {
  if (typeof state.high_score === "number" && Number.isFinite(state.high_score)) {
    writePersistedHighScore(state.high_score);
  }
}

export function startGame(_current: GameState): GameState {
  const next = applyStartGame(_current);
  persistStartGameHighScore(next);
  return next;
}
