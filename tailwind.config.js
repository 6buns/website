module.exports = {
  content: ["./src/**/*.svelte"],
  theme: {
    extend: {
      fontFamily: {
        serif: "'DM Serif Display', serif",
        sans: "'Ubuntu', sans-serif",
        mono: "'Ubuntu Mono', monospace",
      },
      fontSize: {
        xxxs: ["8px", "16px"],
        xxs: ["10px", "18px"],
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
      },
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          inverted: "var(--color-text-inverted)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "button-accent": "var(--color-button-accent)",
          "button-accent-hover": "var(--color-button-accent-hover)",
          "button-muted": "var(--color-button-muted)",
        },
      },
      backgroundImage: {
        "linear-red":
          "linear-gradient(135deg, #ef444480 10%, transparent 0, transparent 50%, #ef444480 0, #ef444480 60%, transparent 0, transparent)",
        "linear-stone":
          "linear-gradient(135deg, #78716c80 10%, transparent 0, transparent 50%, #78716c80 0, #78716c80 60%, transparent 0, transparent)",
        "linear-blue":
          "linear-gradient(135deg, #3b82f680 10%, transparent 0, transparent 50%, #3b82f680 0, #3b82f680 60%, transparent 0, transparent)",
        "linear-yellow":
          "linear-gradient(135deg, #eab30880 10%, transparent 0, transparent 50%, #eab30880 0, #eab30880 60%, transparent 0, transparent)",
      },
      backgroundSize: {
        "stripes-size": "7.07px 7.07px",
      },
      keyframes: {
        directRight: {
          '0%, 100%': { transform: 'translateX(25%)' },
          '50%': { transform: 'translateX(0)' },
        }
      },
      typography: {
        DEFAULT: {
          css: {
            'pre code': {
              'font-weight': '600',
              'font-size': 'medium',
            }
          }
        }
      }
    },
  },
  plugins: [require("@tailwindcss/forms"), require('@tailwindcss/typography'),],
};
