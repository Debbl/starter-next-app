import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import type { RouterClient } from '@orpc/server'
import type { router } from '~/app/api/[...rest]/router'

const link = new RPCLink({
  url: `${typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'}/api`,
  headers: async () => {
    if (typeof window !== 'undefined') {
      return {}
    }

    const { headers } = await import('next/headers')
    return Object.fromEntries(await headers())
  },
})

export const orpc: RouterClient<typeof router> = createORPCClient(link)
