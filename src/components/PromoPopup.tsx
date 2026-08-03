"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useNavigate } from "@tanstack/react-router";
import { X, Lock, Rocket, ShieldCheck, Clock } from "lucide-react";

export function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const navigate = useNavigate();
  const dismissTimerRef = useRef<number | null>(null);

  const handleClose = useCallback(() => {
    if (dismissTimerRef.current !== null) {
      window.clearTimeout(dismissTimerRef.current);
      dismissTimerRef.current = null;
    }
    setIsVisible(false);
    document.body.style.overflow = "";
    // Wait for exit animation before removing from DOM
    setTimeout(() => setIsRendered(false), 300);
  }, []);

  const handleShow = useCallback(() => {
    if (!sessionStorage.getItem("hasSeenPromo")) {
      sessionStorage.setItem("hasSeenPromo", "true");
      setIsRendered(true);
      // Small delay for CSS transition to trigger after mount
      setTimeout(() => {
        setIsVisible(true);
        document.body.style.overflow = "hidden";
        
        // Auto-dismiss after 4 seconds of being visible
        dismissTimerRef.current = window.setTimeout(() => {
          handleClose();
        }, 4000);
      }, 50);
    }
  }, [handleClose]);

  useEffect(() => {
    if (sessionStorage.getItem("hasSeenPromo")) return;

    // Trigger shortly after page load to prevent jarring instant pop-in (1.5s delay)
    const initialTimer = window.setTimeout(() => {
      handleShow();
    }, 1500);

    return () => {
      window.clearTimeout(initialTimer);
      if (dismissTimerRef.current !== null) {
        window.clearTimeout(dismissTimerRef.current);
      }
      document.body.style.overflow = ""; // ensure cleanup
    };
  }, [handleShow]);

  // Handle ESC key
  useEffect(() => {
    if (!isVisible) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, handleClose]);

  if (!isRendered) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div 
        role="dialog" 
        aria-modal="true" 
        aria-label="Promo Offer"
        className={`relative w-[90%] max-w-[420px] max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-background p-6 shadow-xl transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute right-2 top-2 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-black/5 text-foreground hover:bg-black/10 transition-colors"
          aria-label="Close Promo"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-col items-center pt-2">
          <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
            Limited Time Offer
          </span>
          
          <h2 className="text-center text-2xl font-bold text-foreground leading-tight">
            আপনার ওয়েবসাইট, এখন সম্পূর্ণ ফ্রি!
          </h2>
          
          <p className="mt-3 text-center text-sm text-muted-foreground leading-relaxed">
            NVMe SSD Hosting নিন, সাথে পেয়ে যান Free Website/Landing Page Build
          </p>

          <div className="mt-5 rounded-xl bg-secondary/50 p-4 w-full text-center border border-border/50">
            <span className="text-sm text-muted-foreground">শুরু মাত্র</span>
            <div className="mt-1 flex items-baseline justify-center gap-1">
              <span className="text-xl font-bold text-foreground">BDT 1,299</span>
              <span className="text-sm font-medium text-muted-foreground">/বছর</span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-medium text-foreground/80">
            <div className="flex items-center gap-1">
              <Lock className="h-3.5 w-3.5 text-accent" />
              <span>Free SSL</span>
            </div>
            <div className="flex items-center gap-1">
              <Rocket className="h-3.5 w-3.5 text-accent" />
              <span>10x Faster</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              <span>DDoS Protection</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-accent" />
              <span>24/7 Support</span>
            </div>
          </div>

          <button
            onClick={() => {
              handleClose();
              navigate({ to: "/offer" });
            }}
            className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-accent text-base font-bold text-accent-foreground transition-transform hover:scale-[1.02] shadow-sm"
          >
            অফারটি দেখুন &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
