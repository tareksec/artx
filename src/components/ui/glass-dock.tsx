'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

export interface DockItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
  href?: string;
  isActive?: boolean;
  ariaLabel?: string;
}

export interface GlassDockProps extends React.HTMLAttributes<HTMLDivElement> {
  items: DockItem[];
  dockClassName?: string;
  showTooltip?: boolean;
}

export const GlassDock = React.forwardRef<HTMLDivElement, GlassDockProps>(
  (
    {
      items,
      className,
      dockClassName,
      showTooltip = true,
      ...props
    },
    ref
  ) => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
    const [direction, setDirection] = React.useState(0);
    const [tooltipX, setTooltipX] = React.useState<number | null>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const itemRefs = React.useRef<(HTMLElement | null)[]>([]);

    const updateTooltipPosition = (index: number) => {
      const itemEl = itemRefs.current[index];
      if (itemEl && containerRef.current) {
        const itemRect = itemEl.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const xOffset = itemRect.left - containerRect.left + itemRect.width / 2;
        setTooltipX(xOffset);
      }
    };

    const handleMouseEnter = (index: number) => {
      if (hoveredIndex !== null && index !== hoveredIndex) {
        setDirection(index > hoveredIndex ? 1 : -1);
      }
      setHoveredIndex(index);
      updateTooltipPosition(index);
    };

    const handleMouseLeave = () => {
      setHoveredIndex(null);
      setDirection(0);
      setTooltipX(null);
    };

    return (
      <div
        ref={ref}
        className={cn('relative w-max pointer-events-auto', className)}
        {...props}
      >
        <div
          ref={containerRef}
          className={cn(
            'glass-dock relative flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full',
            'border border-border/70 bg-background/85 dark:bg-card/85',
            'backdrop-blur-2xl shadow-[0_12px_40px_-8px_rgba(26,26,26,0.18)] dark:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.6)]',
            dockClassName
          )}
          onMouseLeave={handleMouseLeave}
        >
          {/* Animated Floating Tooltip */}
          <AnimatePresence>
            {showTooltip && hoveredIndex !== null && tooltipX !== null && items[hoveredIndex] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 10 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: -50,
                  x: tooltipX,
                }}
                exit={{ opacity: 0, scale: 0.88, y: 10 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="absolute top-0 left-0 pointer-events-none z-30 -translate-x-1/2"
              >
                <div
                  className={cn(
                    'px-3.5 py-1.5 rounded-full shadow-xl flex items-center justify-center',
                    'bg-foreground text-background border border-border/30 backdrop-blur-md',
                    'min-w-[70px]'
                  )}
                >
                  <div className="relative h-4 flex items-center justify-center overflow-hidden w-full">
                    <AnimatePresence mode="popLayout" custom={direction}>
                      <motion.span
                        key={items[hoveredIndex].title}
                        custom={direction}
                        initial={{
                          x: direction > 0 ? 24 : -24,
                          opacity: 0,
                          filter: 'blur(4px)',
                        }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          filter: 'blur(0px)',
                        }}
                        exit={{
                          x: direction > 0 ? -24 : 24,
                          opacity: 0,
                          filter: 'blur(4px)',
                        }}
                        transition={{
                          duration: 0.22,
                          ease: [0.25, 1, 0.5, 1],
                        }}
                        className="text-[12px] font-semibold tracking-wide whitespace-nowrap"
                      >
                        {items[hoveredIndex].title}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dock Items */}
          {items.map((el, index) => {
            const Icon = el.icon;
            const isHovered = hoveredIndex === index;
            const isActive = el.isActive;

            const content = (
              <motion.div
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                className={cn(
                  'relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full transition-colors',
                  isActive
                    ? 'bg-accent/15 text-accent font-semibold'
                    : isHovered
                    ? 'bg-secondary/80 text-foreground'
                    : 'text-foreground/70 hover:text-foreground'
                )}
              >
                <Icon
                  className={cn(
                    'h-[20px] w-[20px] sm:h-[22px] sm:w-[22px] transition-transform duration-200',
                    isHovered ? 'scale-105' : 'scale-100',
                    isActive ? 'text-accent' : 'currentColor'
                  )}
                />

                {/* Glowing active indicator dot */}
                {isActive && (
                  <motion.span
                    layoutId="activeDockDot"
                    className="absolute bottom-1 h-1 w-1 rounded-full bg-accent shadow-[0_0_8px_rgba(255,69,0,0.8)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                  />
                )}
              </motion.div>
            );

            return (
              <div
                key={el.title}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onTouchStart={() => handleMouseEnter(index)}
                className="relative flex items-center justify-center"
              >
                {el.href ? (
                  <Link
                    to={el.href}
                    onClick={el.onClick}
                    aria-label={el.ariaLabel || el.title}
                    className="outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full block"
                  >
                    {content}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={el.onClick}
                    aria-label={el.ariaLabel || el.title}
                    className="outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full block cursor-pointer"
                  >
                    {content}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

GlassDock.displayName = 'GlassDock';
export default GlassDock;
