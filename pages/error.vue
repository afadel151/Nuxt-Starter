<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode?: number
    message?: string
  }
}>()

const errorMessage = computed(() => {
  if (!props.error) return 'An unknown error occurred'
  
  switch (props.error.statusCode) {
    case 404:
      return 'Page not found'
    case 500:
      return 'Internal server error'
    default:
      return props.error.message || 'An error occurred'
  }
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">
        {{ error?.statusCode || 'Error' }}
      </h1>
      <p class="text-xl mb-8">{{ errorMessage }}</p>
      <button
        @click="handleError"
        class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
      >
        Go back home
      </button>
    </div>
  </div>
</template> 