<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()

// Check authentication status on app startup
onMounted(async () => {
  await userStore.checkAuth()
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
