import { defineStore } from 'pinia'
import type { ThemeConfig } from '~/types/theme'

interface ThemeState {
  currentTheme: 'light' | 'dark'
  systemPreference: 'light' | 'dark'
}

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    currentTheme: 'light',
    systemPreference: 'light',
  }),

  getters: {
    isDark: (state) => state.currentTheme === 'dark',
    themeColors: (state) => {
      const appConfig = useAppConfig()
      return (appConfig.theme as ThemeConfig).themes[state.currentTheme]
    },
  },

  actions: {
    setTheme(theme: 'light' | 'dark') {
      this.currentTheme = theme
      if (process.client) {
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(theme)
      }
    },

    toggleTheme() {
      this.setTheme(this.currentTheme === 'light' ? 'dark' : 'light')
    },

    setSystemPreference(preference: 'light' | 'dark') {
      this.systemPreference = preference
    },

    initializeTheme() {
      if (process.client) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        this.setSystemPreference(prefersDark ? 'dark' : 'light')
        this.setTheme(this.systemPreference)
      }
    },
  },
}) 