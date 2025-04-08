import { ref, watch, computed } from 'vue'
import { useColorMode } from '@vueuse/core'
import type { ThemeConfig } from '~/types/theme'

export const useTheme = () => {
  const appConfig = useAppConfig()
  const colorMode = useColorMode()
  const currentTheme = ref<'light' | 'dark'>((appConfig.theme as ThemeConfig)?.defaultTheme ?? 'light')

  const setTheme = (theme: 'light' | 'dark') => {
    currentTheme.value = theme
    colorMode.value = theme
  }

  const toggleTheme = () => {
    setTheme(currentTheme.value === 'light' ? 'dark' : 'light')
  }

  watch(colorMode, (newMode) => {
    currentTheme.value = newMode as 'light' | 'dark'
  })

  return {
    currentTheme,
    setTheme,
    toggleTheme,
    themeColors: computed(() => (appConfig.theme as ThemeConfig).themes[currentTheme.value]),
  }
} 