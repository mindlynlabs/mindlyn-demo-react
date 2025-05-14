import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { http } from 'wagmi'
import { mainnet } from 'wagmi/chains'

import { WALLETCONNECT_PROJECT_ID } from './constants'

export const config = getDefaultConfig({
  appName: 'Mindlyn Demo',
  projectId: WALLETCONNECT_PROJECT_ID,
  chains: [mainnet],
  transports: { [mainnet.id]: http() },
})
