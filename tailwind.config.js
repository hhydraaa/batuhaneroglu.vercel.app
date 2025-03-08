/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // zinc colors compatible with light and dark mode
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'inherit',
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            code: {
              color: theme('colors.zinc.800'),
              backgroundColor: theme('colors.zinc.100'),
              borderRadius: theme('borderRadius.md'),
              padding: `${theme('spacing[0.5]')} ${theme('spacing[1]')}`,
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              color: theme('colors.zinc.200'),
              backgroundColor: theme('colors.zinc.800'),
            },
            blockquote: {
              color: 'inherit',
              borderLeftColor: theme('colors.zinc.300'),
            },
          },
        },
        invert: {
          css: {
            color: 'inherit',
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            code: {
              color: theme('colors.zinc.200'),
              backgroundColor: theme('colors.zinc.800'),
            },
            pre: {
              color: theme('colors.zinc.200'),
              backgroundColor: theme('colors.zinc.800'),
            },
            blockquote: {
              color: 'inherit',
              borderLeftColor: theme('colors.zinc.700'),
            },
          },
        },
      }),
      backgroundColor: {
        light: '#ffffff',
        dark: '#0a0a0a',
      },
      textColor: {
        light: {
          primary: '#171717',
          secondary: '#737373',
          muted: '#a1a1aa',
        },
        dark: {
          primary: '#ffffff',
          secondary: '#a3a3a3',
          muted: '#d4d4d4',
        },
      },
      borderColor: {
        light: '#e5e5e5',
        dark: '#262626',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 