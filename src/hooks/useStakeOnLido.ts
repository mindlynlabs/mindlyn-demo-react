import { parseEther } from 'viem'
import { useWriteContract } from 'wagmi'

const LIDO_ADDRESS = '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84'
const LIDO_ABI = [
  {
    name: 'submit',
    type: 'function',
    stateMutability: 'payable',
    inputs: [{ name: '_referral', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
  },
]

export function useStakeOnLido() {
  const { writeContractAsync } = useWriteContract()

  return (value: string) => {
    return writeContractAsync({
      address: LIDO_ADDRESS,
      abi: LIDO_ABI,
      functionName: 'submit',
      args: ['0x0000000000000000000000000000000000000000'],
      value: parseEther(value),
    })
  }
}
