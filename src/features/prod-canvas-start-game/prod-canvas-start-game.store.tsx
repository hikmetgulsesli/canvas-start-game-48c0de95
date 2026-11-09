import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { GameState } from "./prod-canvas-start-game.types";
import { readPersistedHighScore } from "./prod-canvas-start-game.repo";
import { startGame as runStartGame } from "../surf-play-page/act_start_game";
import { INITIAL_GAME_STATE_FIXTURE } from "../../__fixtures__/prod-canvas-start-game.fixture";
import { installGameRuntime, syncGameRuntimeState } from "../../game/game-runtime";
import type { SetfarmTestBridge } from "../../test/bridge";

export interface GameStoreValue {
  state: GameState;
  startGame: () => void;
}

const GameStoreContext = createContext<GameStoreValue | null>(null);

/**
 * PERSIST_HIGH_SCORE_LOCAL rehydration (kind: initialization): the durable high
 * score is restored into STATE_GAME when the application initializes.
 */
function rehydratedInitialState(): GameState {
  const persisted = readPersistedHighScore();
  if (persisted === null) {
    return { ...INITIAL_GAME_STATE_FIXTURE };
  }
  return { ...INITIAL_GAME_STATE_FIXTURE, high_score: persisted };
}

export function GameStoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GameState>(rehydratedInitialState);
  const stateRef = useRef<GameState>(state);
  stateRef.current = state;

  const startGame = useCallback(() => {
    const next = runStartGame(stateRef.current);
    stateRef.current = next;
    setState(next);
  }, []);

  const bridgeRef = useRef<SetfarmTestBridge | null>(null);

  useEffect(() => {
    const bridge = installGameRuntime({
      getState: () => stateRef.current,
      invokeAction: () => startGame(),
    });
    bridgeRef.current = bridge;
    syncGameRuntimeState(bridge, stateRef.current);
    return () => {
      bridgeRef.current = null;
    };
  }, [startGame]);

  useEffect(() => {
    syncGameRuntimeState(bridgeRef.current, state);
  }, [state]);

  const value = useMemo<GameStoreValue>(() => ({ state, startGame }), [state, startGame]);

  return <GameStoreContext.Provider value={value}>{children}</GameStoreContext.Provider>;
}

export function useGameStore(): GameStoreValue {
  const context = useContext(GameStoreContext);
  if (!context) {
    throw new Error("SETFARM_GAME_STORE_MISSING");
  }
  return context;
}
