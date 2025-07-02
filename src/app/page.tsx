'use client'
import { ThemeSwitcher } from '~/components/theme-switcher'
import { orpc } from '~/lib/orpc'
import Counter from './components/counter'

export default function Home() {
  useEffect(() => {
    orpc.hi().then((res) => {
      // eslint-disable-next-line no-console
      console.log(res)
    })
  }, [])

  return (
    <main className='flex h-full flex-col items-center justify-center gap-y-4'>
      <motion.div
        className='size-16 rounded-md border bg-blue-600'
        whileHover={{ scale: 1.1, rotate: '360deg' }}
      />
      <Counter />

      <ThemeSwitcher />
    </main>
  )
}
