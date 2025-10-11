'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface BulletHeroProps {
  title: string;
  subtitle: string;
  description?: string;
}

interface Bullet {
  x: number;
  isVisible: boolean;
  hasImpacted: boolean;
}

const BulletHero: React.FC<BulletHeroProps> = ({ 
  title, 
  subtitle, 
  description
}) => {
  const [bullet, setBullet] = useState<Bullet>({ x: -50, isVisible: false, hasImpacted: false });
  const [targetHit, setTargetHit] = useState(false);
  const [showMuzzleFlash, setShowMuzzleFlash] = useState(false);
  const animationRef = useRef<number | null>(null);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const containerRef = useRef<HTMLElement>(null);

  // Clear all timeouts helper
  const clearAllTimeouts = useCallback(() => {
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];
  }, []);

  // Add timeout with tracking
  const addTimeout = useCallback((callback: () => void, delay: number) => {
    const timeout = setTimeout(() => {
      callback();
      timeoutRefs.current = timeoutRefs.current.filter(t => t !== timeout);
    }, delay);
    timeoutRefs.current.push(timeout);
    return timeout;
  }, []);

  const startSequence = useCallback(() => {
    // Clear any existing timeouts and animations
    clearAllTimeouts();
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    // Reset everything
    setBullet({ x: -50, isVisible: false, hasImpacted: false });
    setTargetHit(false);
    setShowMuzzleFlash(false);

    // Get container width for responsive target position
    const containerWidth = containerRef.current?.clientWidth || window.innerWidth;
    const targetX = containerWidth - 120;

    // Start muzzle flash
    addTimeout(() => {
      setShowMuzzleFlash(true);
      addTimeout(() => setShowMuzzleFlash(false), 80);
    }, 500);

    // Start bullet animation with requestAnimationFrame for smoothness
    addTimeout(() => {
      setBullet({ x: -50, isVisible: true, hasImpacted: false });
      
      let currentX = -50;
      const bulletSpeed = 8.4; // 40% faster than original 6px/frame
      
      const animateBullet = () => {
        currentX += bulletSpeed;
        
        if (currentX >= targetX && !bullet.hasImpacted) {
          // Bullet hits target
          setBullet({ x: targetX, isVisible: false, hasImpacted: true });
          setTargetHit(true);
          addTimeout(() => setTargetHit(false), 400);
          return;
        }
        
        if (currentX > containerWidth + 50) {
          // Bullet off screen, restart sequence
          addTimeout(() => startSequence(), 3000);
          return;
        }
        
        setBullet(prev => ({ ...prev, x: currentX }));
        animationRef.current = requestAnimationFrame(animateBullet);
      };

      animationRef.current = requestAnimationFrame(animateBullet);
    }, 600);
  }, [addTimeout, clearAllTimeouts, bullet.hasImpacted]);

  useEffect(() => {
    // Start initial sequence after mount
    addTimeout(() => startSequence(), 1000);

    // Repeat sequence every 7 seconds
    const repeatInterval = setInterval(() => {
      startSequence();
    }, 7000);

    return () => {
      clearInterval(repeatInterval);
      clearAllTimeouts();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [startSequence, addTimeout, clearAllTimeouts]);

  return (
    <section 
      ref={containerRef}
      className="relative flex justify-center items-center bg-tactical pt-28 sm:pt-32 lg:pt-36 min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
      </div>

      {/* Epic Background Effects */}
      <div className="top-10 right-10 absolute bg-gradient-to-bl from-patriot-red/20 to-transparent blur-3xl rounded-full w-96 h-96"></div>
      <div className="bottom-10 left-10 absolute bg-gradient-to-tr from-patriot-blue/20 to-transparent blur-3xl rounded-full w-80 h-80"></div>

      {/* Muzzle Flash */}
      {showMuzzleFlash && (
        <div className="top-1/2 left-8 z-20 absolute -translate-y-1/2 transform">
          <div 
            className="opacity-90 rounded-full w-16 h-8 glow-effect"
            style={{
              background: 'radial-gradient(ellipse, var(--accent-yellow) 0%, var(--accent-orange) 50%, var(--patriot-red) 100%)',
              filter: 'blur(1px)',
            }}
          />
          <div 
            className="absolute inset-0 opacity-60 rounded-full w-16 h-8"
            style={{
              background: 'radial-gradient(ellipse, #ffffff 0%, var(--accent-yellow) 40%, transparent 70%)',
            }}
          />
        </div>
      )}

      {/* Flying Bullet */}
      {bullet.isVisible && (
        <div
          className="top-1/2 z-20 absolute -translate-y-1/2 transform"
          style={{
            left: `${bullet.x}px`,
            transform: 'translateY(-50%)',
            willChange: 'transform', // Optimize for animations
          }}
        >
          {/* Bullet */}
          <div 
            className="shadow-lg rounded-full w-4 h-2 glow-effect"
            style={{
              background: 'linear-gradient(to right, var(--accent-gold), var(--accent-orange))',
            }}
          />
          
          {/* Bullet Trail */}
          <div 
            className="top-0 right-full absolute opacity-80 rounded-full w-24 h-full"
            style={{
              background: 'linear-gradient(to left, rgba(249, 115, 22, 0.8) 0%, rgba(252, 211, 77, 0.6) 30%, transparent 100%)',
              boxShadow: '0 0 10px rgba(255, 193, 7, 0.4)',
              filter: 'blur(0.5px)',
            }}
          />
        </div>
      )}

      {/* Target */}
      <div className="top-1/2 right-8 z-10 absolute -translate-y-1/2 transform">
        <div 
          className={`relative w-20 h-20 transition-all duration-200 ease-out ${targetHit ? 'scale-110' : 'scale-100'}`}
          style={{ willChange: 'transform' }}
        >
          {/* Target Rings */}
          <div className="absolute inset-0 bg-red-600 shadow-lg border-4 border-white rounded-full"></div>
          <div className="absolute inset-2 bg-white border-2 border-white rounded-full"></div>
          <div className="absolute inset-4 bg-red-600 border-2 border-red-600 rounded-full"></div>
          <div className="absolute inset-6 bg-white rounded-full"></div>
          <div className="absolute inset-7 bg-red-600 rounded-full"></div>
          
          {/* Bull's Eye */}
          <div className="absolute inset-8 bg-black rounded-full"></div>
          
          {/* Impact Effect */}
          {targetHit && (
            <>
              {/* Impact Flash */}
              <div 
                className="absolute inset-0 opacity-90 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #fbbf24 0%, #f97316 50%, transparent 100%)',
                  animation: 'ping 0.4s cubic-bezier(0, 0, 0.2, 1)',
                }}
              />
              
              {/* Bullet Hole */}
              <div 
                className="top-1/2 left-1/2 z-20 absolute bg-black rounded-full w-2 h-2 -translate-x-1/2 -translate-y-1/2 transform"
                style={{
                  boxShadow: 'inset 0 0 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.3)',
                }}
              />
              
              {/* Impact Sparks */}
              <div className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 transform">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-yellow-400 rounded-full w-1 h-1"
                    style={{
                      left: `${Math.cos(i * 60 * Math.PI / 180) * 18}px`,
                      top: `${Math.sin(i * 60 * Math.PI / 180) * 18}px`,
                      animation: `spark-${i} 0.3s ease-out`,
                      animationDelay: `${i * 30}ms`,
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>


      {/* Content */}
      <div className="z-10 relative mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 pr-32 max-w-4xl text-white text-center">
        <h1 className="mb-6 font-black text-white text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight">
          <span className="drop-shadow-text text-gradient">
            {title}
          </span>
        </h1>
        <h2 className="text-shadow drop-shadow-lg mb-8 font-bold text-yellow-400 text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-wide">
          {subtitle}
        </h2>
        {description && (
          <p className="text-shadow drop-shadow-md mx-auto max-w-3xl font-medium text-gray-300 text-lg lg:text-xl xl:text-2xl leading-relaxed tracking-normal">
            {description}
          </p>
        )}
      </div>

      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="tactical-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tactical-grid)" />
        </svg>
      </div>
    </section>
  );
};

export default BulletHero;