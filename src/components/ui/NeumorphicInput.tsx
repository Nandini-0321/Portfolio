import React from 'react';

interface NeumorphicInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const NeumorphicInput: React.FC<NeumorphicInputProps> = ({
  label,
  error,
  icon,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || props.name;

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-xs font-bold text-graphite-secondary dark:text-slate-300 uppercase tracking-wider">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-4 text-graphite-muted dark:text-slate-400 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          className={`w-full bg-surface dark:bg-[#111827] text-graphite dark:text-white placeholder-graphite-muted/60 dark:placeholder-slate-500 text-sm font-medium rounded-2xl py-3 px-4 border border-black/5 dark:border-slate-700/60 transition-all duration-200 outline-none shadow-neu-inset focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/60 dark:focus:border-cyan-400 ${
            icon ? 'pl-11' : ''
          } ${error ? 'border-red-400 ring-2 ring-red-400/20' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  );
};

interface NeumorphicTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const NeumorphicTextarea: React.FC<NeumorphicTextareaProps> = ({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  const textareaId = id || props.name;

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label htmlFor={textareaId} className="text-xs font-bold text-graphite-secondary dark:text-slate-300 uppercase tracking-wider">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`w-full bg-surface dark:bg-[#111827] text-graphite dark:text-white placeholder-graphite-muted/60 dark:placeholder-slate-500 text-sm font-medium rounded-2xl p-4 border border-black/5 dark:border-slate-700/60 transition-all duration-200 outline-none shadow-neu-inset focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/60 dark:focus:border-cyan-400 resize-none min-h-[120px] ${
          error ? 'border-red-400 ring-2 ring-red-400/20' : ''
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  );
};
