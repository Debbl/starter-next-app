import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Starter Next App
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
