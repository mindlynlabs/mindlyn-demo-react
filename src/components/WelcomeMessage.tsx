export function WelcomeMessage() {
  return (
    <div className='welcome-container'>
      <h1 className='welcome-title'>Mindlyn Demo</h1>
      <p className='welcome-description'>
        Mindlyn is an AI chat platform that simplifies on-chain and off-chain actions in Web3 apps through natural
        conversations.
      </p>
      <p className='welcome-description'>
        In this demo, you can chat with an AI agent to learn about ETH staking and stake via{' '}
        <a href='https://lido.fi' target='_blank' rel='noopener noreferrer' className='welcome-link'>
          Lido
        </a>
      </p>
      <p className='welcome-actions'>
        Try actions like{' '}
        <span onClick={() => navigator.clipboard.writeText('Stake 1 ETH')} className='welcome-action-example'>
          {'"Stake 1 ETH"'}
        </span>
      </p>
    </div>
  )
}
