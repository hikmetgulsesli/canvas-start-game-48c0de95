import { flushSync } from "react-dom";
import {
  GAME_STATE_REF,
  GameState,
  START_GAME_ACTION_LOCAL_ID,
  START_GAME_ACTION_REF,
  START_GAME_CONTROL_SLOT_REF,
} from "../features/prod-canvas-start-game/prod-canvas-start-game.types";
import {
  installSetfarmTestBridge,
  SetfarmTestBridge,
  syncSetfarmTestBridgeState,
} from "../test/bridge";

export interface GameRuntimeOptions {
  getState: () => GameState;
  invokeAction: (actionId: string) => void;
}

const START_GAME_ACTION_ALIASES: ReadonlySet<string> = new Set([
  START_GAME_ACTION_REF,
  START_GAME_ACTION_LOCAL_ID,
  `${START_GAME_ACTION_REF}:${START_GAME_CONTROL_SLOT_REF}`,
  `flow:${START_GAME_ACTION_REF}:${START_GAME_CONTROL_SLOT_REF}`,
]);

function resolveActionKey(actionId: unknown): string {
  if (typeof actionId === "string") {
    return actionId;
  }
  if (actionId && typeof actionId === "object") {
    const candidate = actionId as Record<string, unknown>;
    for (const field of ["actionRef", "actionId", "action", "id", "controlSlotRef", "generatedLocalId"]) {
      const value = candidate[field];
      if (typeof value === "string" && value.length > 0) {
        return value;
      }
    }
  }
  return "";
}

/**
 * Installs the browser capture bridge and the scenario mode flag, and wires the
 * bound action invocation entry point to the real application action.
 */
export function installGameRuntime(options: GameRuntimeOptions): SetfarmTestBridge {
  const bridge: SetfarmTestBridge = {
    states: { [GAME_STATE_REF]: options.getState() },
    invokeAction: (actionId: string) => {
      const key = resolveActionKey(actionId);
      if (!START_GAME_ACTION_ALIASES.has(key)) {
        throw new Error(`SETFARM_ACTION_UNKNOWN:${key}`);
      }
      flushSync(() => {
        options.invokeAction(key);
      });
    },
  };
  return installSetfarmTestBridge(bridge);
}

export function syncGameRuntimeState(bridge: SetfarmTestBridge | null, state: GameState): void {
  if (!bridge) {
    return;
  }
  syncSetfarmTestBridgeState(bridge, state);
}
