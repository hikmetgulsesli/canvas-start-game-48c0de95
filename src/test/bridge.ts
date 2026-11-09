import {
  GAME_STATE_REF,
  GameState,
} from "../features/prod-canvas-start-game/prod-canvas-start-game.types";

/**
 * Browser capture bridge exposed for the Setfarm runtime evidence adapter.
 * globalName: __SETFARM_TEST_BRIDGE__, actionInvocation.method: invokeAction.
 */
export interface SetfarmTestBridge {
  states: Record<string, GameState>;
  invokeAction: (actionId: string, payload?: Record<string, unknown>) => void;
}

export const SETFARM_TEST_BRIDGE_GLOBAL = "__SETFARM_TEST_BRIDGE__";
export const SETFARM_SCENARIO_MODE_GLOBAL = "__SETFARM_SCENARIO_MODE__";
export const SETFARM_SCENARIO_MODE_VALUE = "manual";

declare global {
  interface Window {
    __SETFARM_TEST_BRIDGE__?: SetfarmTestBridge;
    __SETFARM_SCENARIO_MODE__?: string;
  }
}

export function installSetfarmTestBridge(bridge: SetfarmTestBridge): SetfarmTestBridge {
  if (typeof window === "undefined") {
    return bridge;
  }
  window.__SETFARM_TEST_BRIDGE__ = bridge;
  window.__SETFARM_SCENARIO_MODE__ = SETFARM_SCENARIO_MODE_VALUE;
  return bridge;
}

export function syncSetfarmTestBridgeState(bridge: SetfarmTestBridge, state: GameState): void {
  bridge.states[GAME_STATE_REF] = state;
}
