export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore()
  const publicRoutes = ['/auth/login', '/auth/signup']

  // If the route is public, allow access
  if (publicRoutes.includes(to.path)) {
    // If user is already logged in, redirect to home
    if (userStore.isLoggedIn) {
      return navigateTo('/')
    }
    return
  }

  // If the route is protected and user is not logged in, redirect to login
  if (!userStore.isLoggedIn) {
    return navigateTo('/auth/login')
  }
}) 