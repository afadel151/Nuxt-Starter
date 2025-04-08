<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const handleSubmit = async (email: string, password: string) => {
  try {
    await userStore.login(email, password)
    router.push('/')
  } catch (error) {
    console.error('Login failed:', error)
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-background p-4">
    <AuthForm type="login" @submit="handleSubmit" />
  </div>
</template> 