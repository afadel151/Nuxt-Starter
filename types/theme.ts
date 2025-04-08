export interface Theme {
  primary: string
  secondary: string
  background: string
  text: string
}

export interface ThemeConfig {
  defaultTheme: 'light' | 'dark'
  themes: {
    light: Theme
    dark: Theme
  }
} 