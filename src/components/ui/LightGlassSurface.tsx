import React from 'react';

interface LightGlassSurfaceProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'nav' | 'hero' | 'modal';
  onClick?: () => void;
}

export const LightGlassSurface: React.FC<LightGlassSurfaceProps> = ({
  children,
  className = '',
  variant = 'default',
  onClick,
}) => {
  const variantClasses = {
    default: 'liquid-glass rounded-3xl p-6 sm:p-7',
    nav: 'liquid-glass-nav rounded-pill px-6 py-3',
    hero: 'liquid-glass-hero rounded-3xl p-8',
    modal: 'liquid-glass-modal rounded-3xl p-8',
  };

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden transition-all duration-300 ${variantClasses[variant]} ${className}`}
    >
      {/* Specular top-left reflection highlight */}
      <div 
        className="pointer-events-none absolute -top-12 -left-12 w-32 h-32 rounded-full bg-white/40 blur-xl dark:bg-white/5" 
        aria-hidden="true" 
      />
      {children}
    </div>
  );
};

export default LightGlassSurface;
