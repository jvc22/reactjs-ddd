import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['test', 'dev', 'production']),
  VITE_API_URL: z.string(),
  VITE_ENABLE_API_DELAY: z
    .string()
    .optional()
    .default('false')
    .transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
