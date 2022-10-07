import arg from './_snowpack/pkg/arg.js'
import colors from './_snowpack/pkg/ansi-colors.js'
import { parse as cliParse } from './_snowpack/pkg/shell-quote.js'
import { Avalanche } from './_snowpack/pkg/avalanche.js'

export const name = 'avax'
export const version = '0.1.0'
export const description = 'Avalanche Utility'
export const help = `
  ${colors.magenta.bold('Avalanche Utility')}
  (coming soon)

  Usage:
    avax <command> [options]

  Commands:
    
  Options:
    --help                          Print this help message
    --version                       Print the version information
`

export const spec = {
  '--help': Boolean,
  '--version': Boolean
}

export async function run (term, context = '') {
  const args = arg(spec, { argv: cliParse(context) })
  if (args['--version']) return term.log(version)
  if (args['--help']) return term.log(help)

  const cmd = args._?.[0]

  switch (cmd) {
    default:
      return term.log(help)
  }
}
