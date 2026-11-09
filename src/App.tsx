import { GameStoreProvider, useGameStore } from "./features/prod-canvas-start-game/prod-canvas-start-game.store";
import { PlayPageCanvasStartGame } from "./screens/PlayPageCanvasStartGame";

function PlayPage() {
  const { state, startGame } = useGameStore();

  return (
    <PlayPageCanvasStartGame
      actions={{ "start-1": () => startGame() }}
      gameStatus={state.status}
      highScore={state.high_score}
    />
  );
}

export default function App() {
  return (
    <GameStoreProvider>
      <div data-setfarm-root="baseline" data-testid="setfarm-app-root" className="min-h-screen bg-slate-950 text-slate-100">
        <PlayPage />
      </div>
    </GameStoreProvider>
  );
}
