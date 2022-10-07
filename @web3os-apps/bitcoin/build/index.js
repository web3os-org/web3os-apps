import arg from './_snowpack/pkg/arg.js'
import colors from './_snowpack/pkg/ansi-colors.js'
import { parse as cliParse } from './_snowpack/pkg/shell-quote.js'
import { MnemonicWallet } from './_snowpack/pkg/bitcoinjs-lib.js'

export const name = 'bitcoin'
export const version = '0.1.0'
export const description = 'Bitcoin Utility'
export const help = `
  ${colors.magenta.bold('Bitcoin Utility')}
  (WIP)

  Usage:
    bitcoin <command> [options]

  Commands:
    generate                        Generate a new wallet
    
  Options:
    --help                          Print this help message
    --network                       Network to connect to, {mainnet} or testnet
    --version                       Print the version information
`

export const spec = {
  '--help': Boolean,
  '--network': String,
  '--version': Boolean
}

export async function generateWallet (args) {
  return
}

export async function run (term, context = '') {
  const args = arg(spec, { argv: cliParse(context) })
  if (args['--version']) return term.log(version)
  if (args['--help']) return term.log(help)

  const cmd = args._?.[0]

  switch (cmd) {
    case 'generate':
      return term.log(await generateWallet())
    default:
      return term.log(help)
  }
}
