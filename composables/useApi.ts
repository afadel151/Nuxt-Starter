import { ref } from 'vue'
import axios from 'axios'

interface ApiResponse<T> {
  data: T
  error: string | null
  loading: boolean
}

export const useApi = <T>() => {
  const response = ref<ApiResponse<T>>({
    data: null as T,
    error: null,
    loading: false,
  })

  const fetch = async (url: string, options: RequestInit = {}) => {
    response.value.loading = true
    response.value.error = null
    try {
      const res = await axios.request({
        url,
        method: options.method,
        headers: options.headers ? Object.fromEntries(Object.entries(options.headers)) : undefined,
        data: options.body,
        signal: options.signal || undefined,
        withCredentials: options.credentials === 'include'
      })
      response.value.data = res.data
    } catch (error) {
      response.value.error = error instanceof Error ? error.message : 'An error occurred'
      throw error
    } finally {
      response.value.loading = false
    }

    return response.value
  }

  return {
    response,
    fetch,
  }
} 