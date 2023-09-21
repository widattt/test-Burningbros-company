/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': 'var(--primary-100)',
        'primary-90': 'var(--primary-90)',
        'primary-80': 'var(--primary-80)',
        'primary-70': 'var(--primary-70)',
        'primary-60': 'var(--primary-60)',
        'primary-50': 'var(--primary-50)',
        'primary-40': 'var(--primary-40)',
        'primary-30': 'var(--primary-30)',
        'primary-20': 'var(--primary-20)',
        'primary-10': 'var(--primary-10)',
        'neutral-0': 'var(--neutral-0)',
        'neutral-1': 'var(--neutral-1)',
        'neutral-2': 'var(--neutral-2)',
        'neutral-3': 'var(--neutral-3)',
        'neutral-4': 'var(--neutral-4)',
        'neutral-5': 'var(--neutral-5)',
        'neutral-6': 'var(--neutral-6)',
        'neutral-7': 'var(--neutral-7)',
        'neutral-8': 'var(--neutral-8)',
        'text-0': 'var(--text-0)',
        'text-1': 'var(--text-1)',
        'text-2': 'var(--text-2)',
        'text-3': 'var(--text-3)',
        'text-4': 'var(--text-4)',
        'text-5': 'var(--text-5)',
      },
      fontFamily: {
        'headline-1': 'var(--pretendard-headline-1)',
        'headline-2': 'var(--pretendard-headline-2)',
        'headline-3': 'var(--pretendard-headline-3)',
        'headline-4': 'var(--pretendard-headline-4)',
        'body-1': 'var(--pretendard-body-1)',
        'body-2': 'var(--pretendard-body-2)',
      },
    },
  },
  plugins: [],
}

