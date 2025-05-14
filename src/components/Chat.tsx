import { MindlynChat, ChatMessage, ChatAction, OnActionResult } from '@mindlyn/react'
import { ConnectButton, useConnectModal } from '@rainbow-me/rainbowkit'
import { ReactNode } from 'react'
import { useAccount } from 'wagmi'

import { WelcomeMessage } from '@/components/WelcomeMessage'
import { useStakeOnLido } from '@/hooks/useStakeOnLido'

type ActionPayloadData = {
  value?: string
}

type MessageMetaData = {
  txHash: string
}

export function Chat() {
  const handleStake = useStakeOnLido()
  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()

  const handleAction = async (action: ChatAction<ActionPayloadData>): Promise<OnActionResult<MessageMetaData>> => {
    if (!isConnected) {
      openConnectModal?.()
      return { status: 'PENDING' }
    }

    const type = action?.payload?.type

    if (type === 'stake') {
      const value = action?.payload?.data?.value
      if (!value) {
        return { status: 'CANCELLED' }
      }

      const txHash = await handleStake(value)
      return { meta: { txHash } }
    }

    return { status: 'CANCELLED' }
  }

  const handleRenderMessageExtra = (message: ChatMessage<ActionPayloadData, MessageMetaData>): ReactNode =>
    message?.meta?.txHash && (
      <a
        href={`https://etherscan.io/tx/${message?.meta?.txHash}`}
        target='_blank'
        rel='noopener noreferrer'
        className='text-muted-foreground hover:underline'
      >
        Transaction
      </a>
    )

  return (
    <MindlynChat
      config={{
        appId: 'f6a1418c-da1a-49f2-82d6-507e6249b7ec',
        header: {
          logo: (
            <a href='https://mindlyn.io' target='_blank' rel='noopener noreferrer'>
              <img src='/favicon.svg' width='32px' />
            </a>
          ),
          right: <ConnectButton accountStatus='avatar' />,
        },
        welcomeMessage: <WelcomeMessage />,
        onAction: handleAction,
        renderMessageExtra: handleRenderMessageExtra,
      }}
    />
  )
}
