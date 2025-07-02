import { RPCHandler } from '@orpc/server/fetch'
import { router } from './router'

const handler = new RPCHandler(router)

async function handleRequest(request: Request) {
  const { response } = await handler.handle(request, {
    prefix: '/api',
    context: {}, // Provide initial context if needed
  })
  // eslint-disable-next-line no-console
  console.log('🚀 ~ handleRequest ~ response:', response)

  return response ?? new Response('Not found', { status: 404 })
}

export const HEAD = handleRequest
export const GET = handleRequest
export const POST = handleRequest
export const PUT = handleRequest
export const PATCH = handleRequest
export const DELETE = handleRequest
