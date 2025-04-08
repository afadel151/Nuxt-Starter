import { defineStore } from 'pinia'

interface SettingsState {
  language: string
  notifications: boolean
  sound: boolean
  animations: boolean
}

export const useSettingsStore = defineStore('settings', {
  state: (): SettingsState => ({
    language: 'en',
    notifications: true,
    sound: true,
    animations: true,
  }),

  getters: {
    currentLanguage: (state) => state.language,
    isNotificationsEnabled: (state) => state.notifications,
    isSoundEnabled: (state) => state.sound,
    areAnimationsEnabled: (state) => state.animations,
  },

  actions: {
    setLanguage(lang: string) {
      this.language = lang
      if (process.client) {
        localStorage.setItem('language', lang)
      }
    },

    toggleNotifications() {
      this.notifications = !this.notifications
      if (process.client) {
        localStorage.setItem('notifications', String(this.notifications))
      }
    },

    toggleSound() {
      this.sound = !this.sound
      if (process.client) {
        localStorage.setItem('sound', String(this.sound))
      }
    },

    toggleAnimations() {
      this.animations = !this.animations
      if (process.client) {
        localStorage.setItem('animations', String(this.animations))
      }
    },

    initializeSettings() {
      if (process.client) {
        this.language = localStorage.getItem('language') || 'en'
        this.notifications = localStorage.getItem('notifications') !== 'false'
        this.sound = localStorage.getItem('sound') !== 'false'
        this.animations = localStorage.getItem('animations') !== 'false'
      }
    },
  },
}) 