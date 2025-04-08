import { defineStore } from 'pinia'
import type { User } from '~/types/user'

interface UserState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
    isAuthenticated: false,
    loading: false,
  }),

  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
    currentUser: (state) => state.user,
    isLoading: (state) => state.loading,
  },

  actions: {
    async signup(email: string, password: string, name: string) {
      this.loading = true
      try {
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, name }),
        })

        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.message)
        }

        const data = await response.json()
        this.user = data.user
        this.isAuthenticated = true
      } catch (error) {
        throw error
      } finally {
        this.loading = false
      }
    },

    async login(email: string, password: string) {
      this.loading = true
      try {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        })

        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.message)
        }

        const data = await response.json()
        this.user = data.user
        this.isAuthenticated = true
      } catch (error) {
        throw error
      } finally {
        this.loading = false
      }
    },

    async logout() {
      this.loading = true
      try {
        await fetch('/api/auth/logout', { method: 'POST' })
        this.user = null
        this.isAuthenticated = false
      } catch (error) {
        throw error
      } finally {
        this.loading = false
      }
    },

    async checkAuth() {
      this.loading = true
      try {
        const response = await fetch('/api/auth/me')
        if (response.ok) {
          const data = await response.json()
          this.user = data.user
          this.isAuthenticated = true
        } else {
          this.isAuthenticated = false
        }
      } catch (error) {
        this.isAuthenticated = false
      } finally {
        this.loading = false
      }
    },
  },
}) 