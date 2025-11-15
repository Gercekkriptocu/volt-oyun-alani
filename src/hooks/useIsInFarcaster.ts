import { sdk } from '@farcaster/miniapp-sdk'
import { useEffect, useState } from 'react'

export function useIsInFarcaster(): boolean {
  const [isInFarcaster, setIsInFarcaster] = useState<boolean>(false)

  useEffect(() => {
    const checkFarcasterContext = async (): Promise<void> => {
      try {
        if (typeof window === 'undefined') {
          setIsInFarcaster(false)
          return
        }
        const context = await sdk.context
        setIsInFarcaster(!!context)
      } catch (error) {
        console.log('Not in Farcaster context:', error)
        setIsInFarcaster(false)
      }
    }

    checkFarcasterContext()
  }, [])

  return isInFarcaster
}
