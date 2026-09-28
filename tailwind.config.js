/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Canvas & Surfaces: Driven by CSS Theme Variables
        canvas: "var(--bg-canvas)",
        surface: {
          DEFAULT: "var(--bg-surface)",
          elevated: "var(--bg-elevated)",
          muted: "var(--bg-muted)",
        },
        'border-subtle': "var(--border-subtle)",
        'border-glass': "var(--border-glass)",

        ice: {
          50: "#F5F9FD",
          100: "#EEF4FB",
          200: "#DEECF9",
          300: "#C9E0F5",
          400: "#A9CFEE",
          DEFAULT: "#EEF4FB",
        },

        // Text & Structure: High-Contrast Midnight Navy / Deep Slate in Light, Clean Slate in Dark
        navy: {
          50: "#F0F4FA",
          100: "#DFE7F5",
          200: "#B9CBEC",
          300: "#86A5DE",
          400: "#507BCB",
          500: "#204895",
          600: "#173775",
          700: "#122855",
          800: "#0E1D3E",
          900: "#0C1E36",
          950: "#091426",
          DEFAULT: "#0C1E36",
        },
        // Graphite mapped to Theme Typography Variables for zero dark-on-dark contrast failure
        graphite: {
          DEFAULT: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          light: "#94A3B8",
        },

        // Primary Accent Highlights: Vibrant Electric Cyan
        cyan: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4", // Primary Electric Cyan
          600: "#0891B2", // Deep Rich Cyan
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
          DEFAULT: "#06B6D4",
        },
        // Coral and Electric aliases mapped directly to Cyan
        coral: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
          DEFAULT: "#06B6D4",
        },
        electric: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
          DEFAULT: "#06B6D4",
        },

        // Dark mode palette (Cinematic dark theme visual tokens)
        darkbg: "#080D18",
        darksurface: "#172235",
        darkelevated: "#1D2A3D",
        darksecondary: "#111827",
      },
      borderRadius: {
        'sm': '12px',
        'md': '18px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '20px',
        '3xl': '28px',
        'pill': '999px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        // Floating Glass & Soft Shadows on Soft Blue
        'neu-soft': '-4px -4px 12px rgba(255, 255, 255, 0.95), 4px 6px 16px rgba(12, 38, 72, 0.05)',
        'neu-raised': '-6px -6px 18px rgba(255, 255, 255, 0.95), 6px 8px 20px rgba(12, 38, 72, 0.07)',
        'neu-floating': '0 16px 36px -6px rgba(12, 38, 72, 0.09), 0 6px 14px -2px rgba(12, 38, 72, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.95)',
        'neu-inset': 'inset 3px 3px 6px rgba(12, 38, 72, 0.05), inset -3px -3px 6px rgba(255, 255, 255, 0.9)',
        'clay': '0 8px 20px -4px rgba(12, 38, 72, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.85), inset 0 -2px 4px rgba(12, 38, 72, 0.03)',
        'clay-coral': '0 8px 20px -4px rgba(6, 182, 212, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.55), inset 0 -2px 4px rgba(8, 145, 178, 0.25)',
        'clay-cyan': '0 8px 20px -4px rgba(6, 182, 212, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.55), inset 0 -2px 4px rgba(8, 145, 178, 0.25)',
        'soft-glass': '0 12px 32px rgba(12, 38, 72, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
        'glass-hover': '0 20px 42px -6px rgba(6, 182, 212, 0.15), 0 8px 18px rgba(12, 38, 72, 0.06), inset 0 1px 1px rgba(255, 255, 255, 1)',
      },
      backdropBlur: {
        xs: '2px',
        glass: '24px',
      }
    },
  },
  plugins: [],
}
