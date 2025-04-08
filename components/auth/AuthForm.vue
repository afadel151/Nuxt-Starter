<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const props = defineProps<{
  type: 'login' | 'signup'
}>()

const emit = defineEmits<{
  submit: [email: string, password: string, name?: string]
}>()

const email = ref('')
const password = ref('')
const name = ref('')
const error = ref('')
const loading = ref(false)

const handleSubmit = async () => {
  try {
    loading.value = true
    error.value = ''
    if (props.type === 'signup' && !name.value) {
      throw new Error('Name is required')
    }
    emit('submit', email.value, password.value, name.value)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An error occurred'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <Card class="w-full max-w-md mx-auto">
    <CardHeader>
      <CardTitle>{{ type === 'login' ? 'Login' : 'Sign Up' }}</CardTitle>
      <CardDescription>
        {{ type === 'login' ? 'Enter your credentials to login' : 'Create a new account' }}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div v-if="type === 'signup'" class="space-y-2">
          <Label for="name">Name</Label>
          <Input
            id="name"
            v-model="name"
            type="text"
            placeholder="John Doe"
            required
          />
        </div>
        <div class="space-y-2">
          <Label for="email">Email</Label>
          <Input
            id="email"
            v-model="email"
            type="email"
            placeholder="john@example.com"
            required
          />
        </div>
        <div class="space-y-2">
          <Label for="password">Password</Label>
          <Input
            id="password"
            v-model="password"
            type="password"
            required
          />
        </div>
        <div v-if="error" class="text-red-500 text-sm">
          {{ error }}
        </div>
        <Button type="submit" class="w-full" :disabled="loading">
          {{ loading ? 'Loading...' : type === 'login' ? 'Login' : 'Sign Up' }}
        </Button>
      </form>
    </CardContent>
    <CardFooter class="flex justify-center">
      <NuxtLink
        :to="type === 'login' ? '/auth/signup' : '/auth/login'"
        class="text-sm text-primary hover:underline"
      >
        {{ type === 'login' ? 'Create an account' : 'Already have an account?' }}
      </NuxtLink>
    </CardFooter>
  </Card>
</template> 