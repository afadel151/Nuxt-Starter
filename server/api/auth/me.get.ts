export default defineEventHandler((event) => {
  const user = event.context.auth?.user

  if (!user) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized',
    })
  }

  return {
    user,
  }
}) 