const BaseURL = 'https://open-api.openocean.finance/v1/cross'

export async function tokenList (chain = 1) {
  const result = await fetch(`${BaseURL}/tokenList?chainId=${chain}`)
  const { code, data } = await result.json()
  if (code !== 200) throw new Error(result)
  return data
}

export async function getBalance (chain = 1, account, inTokenAddress) {
  if (!account || !inTokenAddress) throw new Error('Account and inTokenAddress are required')
  const result = await fetch(`${BaseURL}/getBalance?chainId=${chain}&account=${account}&inTokenAddress=${inTokenAddress}`)
  const { code, data } = await result.json()
  if (code !== 200) throw new Error(result)
  return data
}
