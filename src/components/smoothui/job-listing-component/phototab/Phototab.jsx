"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from 'react-dom';
import {
  Content as TabsContent,
  List as TabsList,
  Root as TabsRoot,
  Trigger as TabsTrigger,
} from "@radix-ui/react-tabs";
import { AnimatePresence, motion as SmoothMotion, useReducedMotion } from "motion/react";

export default function Phototab({
  tabs,
  defaultTab,
  height = 400,
  className = "",
  tabListClassName = "",
  tabTriggerClassName = "",
  imageClassName = "",
  onLightboxClose,
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [bgStyle, setBgStyle] = useState(null);
  const triggersRef = useRef([]);
  const listRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (
      hoveredIndex !== null &&
      triggersRef.current[hoveredIndex] &&
      listRef.current
    ) {
      const trigger = triggersRef.current[hoveredIndex];
      if (!trigger) return;
      const listRect = listRef.current.getBoundingClientRect();
      const triggerRect = trigger.getBoundingClientRect();
      setBgStyle({
        left: triggerRect.left - listRect.left,
        top: triggerRect.top - listRect.top,
        width: triggerRect.width,
        height: triggerRect.height,
      });
    } else {
      setBgStyle(null);
    }
  }, [hoveredIndex]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setLightbox(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!tabs || !tabs.length) return null;

  return (
    <>
    <TabsRoot
      className={`group relative w-full overflow-hidden ${className}`}
      defaultValue={defaultTab || (tabs[0]?.name ?? "")}
      orientation="horizontal"
      style={{ height: `${height}px` }}
    >
      <TabsList
        aria-label="Phototab Tabs"
        className={`absolute right-0 bottom-2 left-0 mx-auto flex w-40 -translate-y-10 flex-row items-center justify-between rounded-full bg-primary/40 px-3 py-2 font-medium text-sm ring ring-border/70 backdrop-blur-sm transition hover:text-foreground md:translate-y-20 md:group-hover:translate-y-0 ${tabListClassName}`}
        ref={listRef}
        style={{ pointerEvents: "auto" }}
      >
        <AnimatePresence>
          {bgStyle && (
            <SmoothMotion.span
              animate={{
                opacity: 1,
                left: bgStyle.left,
                top: bgStyle.top,
                width: bgStyle.width,
                height: bgStyle.height,
              }}
              className="absolute z-0 rounded-full bg-primary transition-colors"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              layoutId="hoverBackground"
              style={{ position: "absolute" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 400, damping: 40, duration: 0.25 }
              }
            />
          )}
        </AnimatePresence>

        {tabs.map((tab, index) => (
          <TabsTrigger
            aria-label={tab.name}
            className={`relative z-10 cursor-pointer rounded-full p-2 data-[state='active']:bg-background ${tabTriggerClassName}`}
            key={tab.name}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            ref={(el) => (triggersRef.current[index] = el)}
            value={tab.name}
          >
            <span className="relative z-10 rounded-full focus:outline-none">
              {tab.image ? (
                <img src={tab.image} alt={tab.name} className="w-6 h-6 rounded-full object-cover" />
              ) : (
                tab.icon
              )}
              <span className="sr-only">{tab.name}</span>
            </span>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent className="h-full w-full" key={tab.name} value={tab.name}>
          <img
            alt={tab.name}
            className={`h-full w-full rounded-2xl bg-primary object-cover cursor-pointer ${imageClassName}`}
            height={height}
            loading="lazy"
            src={tab.image}
            width={400}
            onClick={() => setLightbox(tab)}
          />
        </TabsContent>
      ))}
    </TabsRoot>

      
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {lightbox && (
              <SmoothMotion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightbox(null)}
              >
                <div className="max-h-[96vh] max-w-[96vw]" onClick={(e) => e.stopPropagation()}>
                  <img
                    src={lightbox.image}
                    alt={lightbox.name}
                    className="max-h-[96vh] max-w-[96vw] object-contain rounded-lg cursor-pointer"
                    onClick={() => {
                      setLightbox(null);
                    }}
                  />
                  {lightbox.caption && (
                    <div className="mt-3 text-sm text-white/90 text-center">{lightbox.caption}</div>
                  )}
                </div>
              </SmoothMotion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
