import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface User {
  id: string
  email: string
  name: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
}

export const useAuth = () => {
  const router = useRouter()
  const state = ref<AuthState>({
    user: null,
    isAuthenticated: false,
    loading: false,
  })

  const login = async (email: string, password: string) => {
    state.value.loading = true
    try {
      // Implement your authentication logic here
      // This could be JWT, OAuth, or any other auth method
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) throw new Error('Login failed')

      const data = await response.json()
      state.value.user = data.user
      state.value.isAuthenticated = true
      router.push('/dashboard')
    } catch (error) {
      throw error
    } finally {
      state.value.loading = false
    }
  }

  const logout = async () => {
    state.value.loading = true
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      state.value.user = null
      state.value.isAuthenticated = false
      router.push('/login')
    } catch (error) {
      throw error
    } finally {
      state.value.loading = false
    }
  }

  const checkAuth = async () => {
    state.value.loading = true
    try {
      const response = await fetch('/api/auth/me')
      if (response.ok) {
        const data = await response.json()
        state.value.user = data.user
        state.value.isAuthenticated = true
      }
    } catch (error) {
      state.value.isAuthenticated = false
    } finally {
      state.value.loading = false
    }
  }

  return {
    state,
    login,
    logout,
    checkAuth,
  }
} 