'use client';

import Image from 'next/image';
import { useRef, useEffect, useCallback, useState } from 'react';
import { products } from '@/data/products';

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.inStock).slice(0, 8);
  // Triple for seamless infinite loop
  const items = [...featured, ...featured, ...featured];

  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const lastTouch = useRef(0);
  const velocity = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Calculate the width of one set of items
  const getSetWidth = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 0;
    return el.scrollWidth / 3;
  }, []);

  // Keep scroll position in the middle set for infinite loop
  const wrapScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const setWidth = getSetWidth();
    if (setWidth === 0) return;

    if (el.scrollLeft >= setWidth * 2) {
      el.scrollLeft -= setWidth;
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += setWidth;
    }
  }, [getSetWidth]);

  // Auto-scroll animation
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Start in the middle set
    const setWidth = el.scrollWidth / 3;
    el.scrollLeft = setWidth;

    const speed = isMobile ? 1.2 : 0.6;

    const animate = () => {
      if (!isDragging.current) {
        el.scrollLeft += speed;
        wrapScroll();
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [wrapScroll, isMobile]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    lastTouch.current = e.touches[0].clientX;
    velocity.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.touches[0].clientX;
    const walk = startX.current - x;
    velocity.current = lastTouch.current - x;
    lastTouch.current = x;
    scrollRef.current.scrollLeft = scrollLeft.current + walk;
    wrapScroll();
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  // Mouse drag handlers (desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const walk = startX.current - e.clientX;
    scrollRef.current.scrollLeft = scrollLeft.current + walk;
    wrapScroll();
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-[10px] tracking-[0.3em] uppercase text-ink-muted mb-2">
          Lo más nuevo
        </h2>
        <h3 className="text-center text-2xl md:text-3xl font-extralight tracking-[0.15em] uppercase text-ink mb-10">
          Productos destacados
        </h3>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 px-6 overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {items.map((product, i) => (
          <div
            key={`${product.id}-${i}`}
            className="flex-shrink-0 w-44 md:w-56"
          >
            <div className="group pointer-events-none">
              <div className="relative aspect-square overflow-hidden mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 176px, 224px"
                  className="object-cover"
                  draggable={false}
                />
              </div>
              <p className="text-[11px] font-normal tracking-[0.15em] uppercase text-ink truncate">
                {product.name}
              </p>
              <p className="text-[12px] font-normal tracking-[0.05em] text-ink-secondary mt-0.5">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
