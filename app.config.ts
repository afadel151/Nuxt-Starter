import { type ThemeConfig } from './types/theme'

export default defineAppConfig({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        primary: '#3b82f6',
        secondary: '#6b7280',
        background: '#ffffff',
        text: '#111827',
      },
      dark: {
        primary: '#60a5fa',
        secondary: '#9ca3af',
        background: '#111827',
        text: '#f3f4f6',
      },
    },
  } as ThemeConfig,
}) 