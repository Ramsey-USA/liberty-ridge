'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

interface BulletHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  backgroundGradient?: string;
}

interface Bullet {
  x: number;
  isVisible: boolean;
  hasImpacted: boolean;
}

const BulletHero: React.FC<BulletHeroProps> = ({ 
  title, 
  subtitle, 
  description,
  backgroundGradient = "from-tactical-dark via-patriot-navy to-tactical-dark"
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
    const initialTimeout = addTimeout(() => startSequence(), 1000);

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
      className={`relative h-96 flex items-center justify-center bg-gradient-to-r ${backgroundGradient} overflow-hidden pt-20 sm:pt-22 lg:pt-24`}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      {/* Muzzle Flash */}
      {showMuzzleFlash && (
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20">
          <div 
            className="w-16 h-8 bg-gradient-radial rounded-full opacity-90"
            style={{
              boxShadow: '0 0 40px rgba(255, 193, 7, 0.9), 0 0 80px rgba(255, 193, 7, 0.5)',
              background: 'radial-gradient(ellipse, #fbbf24 0%, #f97316 50%, #dc2626 100%)',
              filter: 'blur(1px)',
            }}
          />
          <div 
            className="absolute inset-0 w-16 h-8 bg-gradient-radial rounded-full opacity-60"
            style={{
              background: 'radial-gradient(ellipse, #ffffff 0%, #fbbf24 40%, transparent 70%)',
            }}
          />
        </div>
      )}

      {/* Flying Bullet */}
      {bullet.isVisible && (
        <div
          className="absolute top-1/2 transform -translate-y-1/2 z-20"
          style={{
            left: `${bullet.x}px`,
            transform: 'translateY(-50%)',
            willChange: 'transform', // Optimize for animations
          }}
        >
          {/* Bullet */}
          <div 
            className="w-4 h-2 rounded-full shadow-lg"
            style={{
              background: 'linear-gradient(to right, #facc15, #f97316)',
              boxShadow: '0 0 15px rgba(255, 193, 7, 0.9), 0 0 30px rgba(255, 193, 7, 0.5)',
            }}
          />
          
          {/* Bullet Trail */}
          <div 
            className="absolute right-full top-0 w-24 h-full rounded-full opacity-80"
            style={{
              background: 'linear-gradient(to left, rgba(249, 115, 22, 0.8) 0%, rgba(252, 211, 77, 0.6) 30%, transparent 100%)',
              boxShadow: '0 0 10px rgba(255, 193, 7, 0.4)',
              filter: 'blur(0.5px)',
            }}
          />
        </div>
      )}

      {/* Target */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
        <div 
          className={`relative w-20 h-20 transition-all duration-200 ease-out ${targetHit ? 'scale-110' : 'scale-100'}`}
          style={{ willChange: 'transform' }}
        >
          {/* Target Rings */}
          <div className="absolute inset-0 rounded-full border-4 border-white bg-red-600 shadow-lg"></div>
          <div className="absolute inset-2 rounded-full border-2 border-white bg-white"></div>
          <div className="absolute inset-4 rounded-full border-2 border-red-600 bg-red-600"></div>
          <div className="absolute inset-6 rounded-full bg-white"></div>
          <div className="absolute inset-7 rounded-full bg-red-600"></div>
          
          {/* Bull's Eye */}
          <div className="absolute inset-8 rounded-full bg-black"></div>
          
          {/* Impact Effect */}
          {targetHit && (
            <>
              {/* Impact Flash */}
              <div 
                className="absolute inset-0 rounded-full opacity-90"
                style={{
                  background: 'radial-gradient(circle, #fbbf24 0%, #f97316 50%, transparent 100%)',
                  animation: 'ping 0.4s cubic-bezier(0, 0, 0.2, 1)',
                }}
              />
              
              {/* Bullet Hole */}
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full z-20"
                style={{
                  boxShadow: 'inset 0 0 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.3)',
                }}
              />
              
              {/* Impact Sparks */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full"
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

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-patriot-blue/20 via-transparent to-patriot-red/20"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 pr-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          {title}
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold mb-6 text-gray-200">
          {subtitle}
        </h2>
        {description && (
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="h-full w-full">
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