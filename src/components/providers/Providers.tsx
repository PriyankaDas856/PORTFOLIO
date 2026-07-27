"use client";

import { useState } from "react";
import { CursorProvider } from "@/components/ui/CustomCursor";
import { CursorHandler } from "@/components/ui/CursorHandler";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollProgress, BackToTop } from "@/components/ui/ScrollUtilities";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { Navbar } from "@/components/layout/Navbar";
import { CommandMenu } from "@/components/layout/CommandMenu";
import { AIAssistant } from "@/components/features/AIAssistant";
import { EasterEgg } from "@/components/features/EasterEgg";

export function Providers({ children }: { children: React.ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <CursorProvider>
      <ThemeProvider>
        <SmoothScroll>
          <LoadingScreen />
          <CursorHandler />
          <MouseGlow />
          <ScrollProgress />
          <BackToTop />
          <div className="noise" aria-hidden />
          <EasterEgg />

          <Navbar onOpenCommand={() => setCommandOpen(true)} />
          <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
          <AIAssistant />

          {children}
        </SmoothScroll>
      </ThemeProvider>
    </CursorProvider>
  );
}
