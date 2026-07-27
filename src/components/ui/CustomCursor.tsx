"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type CursorVariant = "default" | "button" | "image" | "project" | "text";

interface CursorContextValue {
  variant: CursorVariant;
  label: string;
  setVariant: (variant: CursorVariant, label?: string) => void;
  resetVariant: () => void;
}

const CursorContext = createContext<CursorContextValue | null>(null);

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error("useCursor must be used within CursorProvider");
  return ctx;
}

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariantState] = useState<CursorVariant>("default");
  const [label, setLabel] = useState("");
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const setVariant = useCallback(
    (v: CursorVariant, l = "") => {
      setVariantState(v);
      setLabel(l);
    },
    []
  );

  const resetVariant = useCallback(() => {
    setVariantState("default");
    setLabel("");
  }, []);

  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touch);
    if (touch) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [visible]);

  const size =
    variant === "button"
      ? 64
      : variant === "image"
        ? 80
        : variant === "project"
          ? 120
          : variant === "text"
            ? 48
            : 12;

  return (
    <CursorContext.Provider value={{ variant, label, setVariant, resetVariant }}>
      {children}
      {!isTouch && (
        <div
          className="pointer-events-none fixed top-0 left-0 z-[10000] mix-blend-difference"
          style={{
            transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
            transition: "opacity 0.3s ease",
            opacity: visible ? 1 : 0,
          }}
          aria-hidden
        >
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white flex items-center justify-center"
            style={{
              width: size,
              height: variant === "image" ? size * 0.75 : size,
              borderRadius: variant === "image" ? "16%" : "50%",
              transition:
                "width 0.4s cubic-bezier(0.16,1,0.3,1), height 0.4s cubic-bezier(0.16,1,0.3,1), border-radius 0.4s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {variant === "project" && (
              <span className="text-[10px] font-medium tracking-wide text-black whitespace-nowrap px-2">
                {label || "View Case Study"}
              </span>
            )}
          </div>
        </div>
      )}
    </CursorContext.Provider>
  );
}
