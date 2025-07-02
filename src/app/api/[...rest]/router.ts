import { os } from '@orpc/server'

export const hi = os.handler(async () => {
  return new Response('hi', { status: 400 })
})

export const router = {
  hi,
}
