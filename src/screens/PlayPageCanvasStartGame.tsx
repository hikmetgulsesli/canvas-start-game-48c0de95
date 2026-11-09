// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play page - Canvas Start Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasStartGameActionId = "start-1";

export interface PlayPageCanvasStartGameProps {
  actions?: {
    "start-1"?: () => void;
  };

}

export type PlayPageCanvasStartGameActionCallbacks = NonNullable<PlayPageCanvasStartGameProps["actions"]>;

export function PlayPageCanvasStartGame({ actions }: PlayPageCanvasStartGameProps) {
  return (
    <>
      {/* Root Surface: SURF_PLAY_PAGE */}
        <div data-surface-id="SURF_PLAY_PAGE" className="flex-1 flex flex-col min-h-screen relative" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_GAME_STARTED_MESSAGE OBS_START_GAME_PLAY_ROUTE">
          
          {/* Top Bar Header (Non-actionable decorative chrome) */}
          <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
              <span className="text-sm font-semibold tracking-wider text-slate-200 uppercase">Canvas Start Game</span>
            </div>
      
            <div className="flex items-center gap-6">
              {/* Route indicator */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-slate-500">ROUTE</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-cyan-400">/play</span>
              </div>
      
              {/* High score status observable (OBS_START_GAME_HIGH_SCORE_VALUE) */}
              {/* Expected before: null value, after: "0" value. role="status", name="High score" */}
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-md">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">High Score:</span>
                <div className="text-sm font-mono font-bold text-cyan-400" data-setfarm-element-ref="E000002" role="status" aria-label="High score" data-observable-refs="OBS_START_GAME_HIGH_SCORE_VALUE"></div>
              </div>
            </div>
          </header>
      
          {/* Main Content Area */}
          <main className="flex-1 max-w-6xl w-full mx-auto p-8 flex flex-col gap-6">
            
            {/* Page Title & State Indicators */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
                  Play Arena
                </h1>
                <p className="text-sm text-slate-400 mt-1">
                  Initialize the viewport canvas session and monitor gameplay telemetry.
                </p>
              </div>
      
              {/* Game started message observable (OBS_START_GAME_GAME_STARTED_MESSAGE) */}
              {/* Required inside SURF_PLAY_PAGE with visible_text containing "Game started" after action */}
              <div id="game-status-notification" className="hidden text-xs font-semibold px-3 py-1 rounded bg-cyan-950/80 border border-cyan-800/80 text-cyan-300">
                Game started
              </div>
            </div>
      
            {/* Action Panel with the Start Button on SURF_PLAY_PAGE */}
            <div className="flex items-center justify-between bg-slate-900/40 border border-slate-800/80 rounded-xl p-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono text-xs">
                  SYS
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-200">Engine Initialization</div>
                  <div className="text-xs text-slate-400">Press start to engage the render pipeline and reset high score tracking.</div>
                </div>
              </div>
      
              {/* The ONLY physical actionable control declared in contract */}
              {/* Nearest [data-surface-id] is SURF_PLAY_PAGE */}
              <div>
                <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-colors cursor-pointer" data-setfarm-element-ref="E000003" data-observable-refs="OBS_START_GAME_START_BUTTON_AVAILABILITY" data-action-id="start-1" onClick={actions?.["start-1"]}>
                  Start
                </button>
              </div>
            </div>
      
            {/* Contained Surface: SURF_GAME_CANVAS inside SURF_PLAY_PAGE */}
            <div data-surface-id="SURF_GAME_CANVAS" className="flex-1 min-h-[460px] rounded-2xl border border-slate-800 bg-slate-950/80 shadow-2xl relative overflow-hidden flex flex-col justify-between p-6" data-setfarm-element-ref="E000004">
              
              {/* Canvas Grid Background Styling */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 pointer-events-none"></div>
      
              {/* Canvas Header Overlay (Non-actionable) */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="tracking-widest uppercase">CANVAS_SURFACE_BUFFER</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                  STANDBY
                </span>
              </div>
      
              {/* Canvas Center Viewport Stage (Non-actionable decorative visual) */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-2xl border border-cyan-500/20 bg-cyan-950/20 flex items-center justify-center mb-4 text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                  <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h2 className="text-lg font-bold text-slate-200">Canvas Surface Viewport</h2>
                <p className="text-xs text-slate-500 max-w-sm mt-1">
                  Rendering surface active. Session telemetry will stream directly onto this buffer once started.
                </p>
              </div>
      
              {/* Canvas Footer Diagnostics Overlay (Non-actionable) */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-500 pt-4 border-t border-slate-900">
                <span>TARGET: 1920x1080 (DESKTOP)</span>
                <span>FPS: 60</span>
              </div>
      
            </div>
      
          </main>
      
          {/* Footer (Non-actionable decorative chrome) */}
          <footer className="border-t border-slate-900 bg-slate-950 px-8 py-3 text-xs text-slate-600 flex justify-between items-center">
            <span>Canvas Engine V2</span>
            <span>Play Session Surface</span>
          </footer>
      
        </div>
    </>
  );
}
