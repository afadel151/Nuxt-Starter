import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createError } from 'h3'

const prisma = new PrismaClient()
const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: 'Missing required fields',
    })
  }

  // Find user
  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    throw createError({
      statusCode: 401,
      message: 'Invalid credentials',
    })
  }

  // Verify password
  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) {
    throw createError({
      statusCode: 401,
      message: 'Invalid credentials',
    })
  }

  // Generate JWT token
  const token = jwt.sign(
    { userId: user.id },
    config.jwtSecret,
    { expiresIn: '7d' }
  )

  // Set cookie
  setCookie(event, 'auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  // Remove password from response
  const { password: _, ...userWithoutPassword } = user

  return {
    user: userWithoutPassword,
  }
}) 