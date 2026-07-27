"use client";

import { useEffect } from "react";
import { useCursor } from "@/components/ui/CustomCursor";

export function CursorHandler() {
  const { setVariant, resetVariant } = useCursor();

  useEffect(() => {
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorEl = target.closest("[data-cursor]") as HTMLElement | null;

      if (!cursorEl) {
        resetVariant();
        return;
      }

      const type = cursorEl.dataset.cursor;
      const label = cursorEl.dataset.cursorLabel ?? "";

      switch (type) {
        case "button":
          setVariant("button");
          break;
        case "image":
          setVariant("image");
          break;
        case "project":
          setVariant("project", label || "View Case Study");
          break;
        case "text":
          setVariant("text");
          break;
        default:
          resetVariant();
      }
    };

    document.addEventListener("mouseover", onMouseOver);
    return () => document.removeEventListener("mouseover", onMouseOver);
  }, [setVariant, resetVariant]);

  return null;
}
