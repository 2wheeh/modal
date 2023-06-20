import type { WalletConnectModalAuthOptions } from '@walletconnect/auth-html'
import { WalletConnectModalAuth } from '@walletconnect/auth-html'

let walletConnectModalAuthClient: WalletConnectModalAuth | undefined = undefined

export function setWalletConnectModalAuthClient(options: WalletConnectModalAuthOptions) {
  walletConnectModalAuthClient = new WalletConnectModalAuth(options)
}

export type WalletConnectModalAuthInstance = InstanceType<typeof WalletConnectModalAuth>

export async function getWalletConnectModalAuthClient(): Promise<WalletConnectModalAuth> {
  return new Promise(resolve => {
    if (walletConnectModalAuthClient) {
      resolve(walletConnectModalAuthClient)
    } else {
      const interval = setInterval(() => {
        if (walletConnectModalAuthClient) {
          clearInterval(interval)
          resolve(walletConnectModalAuthClient)
        }
      }, 200)
    }
  })
}
