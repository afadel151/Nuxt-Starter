<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const handleSubmit = async (email: string, password: string, name: string) => {
  try {
    await userStore.signup(email, password, name)
    router.push('/')
  } catch (error) {
    console.error('Signup failed:', error)
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-background p-4">
    <AuthForm type="signup" @submit="handleSubmit" />
  </div>
</template> 