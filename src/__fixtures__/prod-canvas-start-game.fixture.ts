import { GameState } from "../features/prod-canvas-start-game/prod-canvas-start-game.types";

/**
 * Deterministic fixtures for the SURF_PLAY_PAGE / ACT_START_GAME story.
 * These mirror the bound ProductSpecV2 semantics; they never introduce values
 * that the application does not produce itself.
 */
export const INITIAL_GAME_STATE_FIXTURE: GameState = {
  high_score: null,
  message: "",
  status: "ready",
};

export const START_GAME_STATE_FIXTURE: GameState = {
  high_score: 0,
  message: "Game started",
  status: "playing",
};

export const START_GAME_BUTTON_LABEL = "Start";
export const HIGH_SCORE_ACCESSIBLE_NAME = "High score";
