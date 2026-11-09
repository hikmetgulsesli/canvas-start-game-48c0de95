export type GameStatus = "ready" | "playing";

/**
 * STATE_GAME application state.
 * Contract: initial value { high_score: null, message: "", status: "ready" }.
 */
export interface GameState {
  high_score: number | null;
  message: string;
  status: GameStatus;
}

export const GAME_STATE_REF = "STATE_GAME";

export const START_GAME_ACTION_REF = "ACT_START_GAME";
export const START_GAME_ACTION_LOCAL_ID = "start-1";
export const START_GAME_CONTROL_SLOT_REF = "CSLOT_START_GAME_START_BUTTON";

/** PERSIST_HIGH_SCORE_LOCAL / AUTH_DATA_BROWSER_ORIGIN key binding. */
export const HIGH_SCORE_PERSISTENCE_KEY = "setfarm.canvas_start_game.high_score_local.v1";

export const START_GAME_MESSAGE = "Game started";
export const START_GAME_STATUS: GameStatus = "playing";
export const START_GAME_HIGH_SCORE = 0;

export const INITIAL_GAME_STATE: GameState = {
  high_score: null,
  message: "",
  status: "ready",
};
