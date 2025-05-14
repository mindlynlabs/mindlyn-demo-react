import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

import { Chat } from '@/components/Chat'
import { queryClient } from '@/lib/queryClient'
import { config } from '@/lib/wallet'

export function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: 'oklch(0.205 0 0)',
            accentColorForeground: 'oklch(0.985 0 0)',
            borderRadius: 'large',
            fontStack: 'system',
            overlayBlur: 'small',
          })}
        >
          <Chat />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
