import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'auth_token')

  if (!token) {
    return
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret) as { userId: string }
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    })

    if (!user) {
      return
    }

    // Add user to event context
    event.context.auth = {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    }
  } catch (error) {
    // Token is invalid or expired
    deleteCookie(event, 'auth_token')
  }
}) 