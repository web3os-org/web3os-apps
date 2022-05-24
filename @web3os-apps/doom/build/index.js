import './_snowpack/pkg/js-dos.js'
import './_snowpack/pkg/js-dos/dist/js-dos.css.proxy.js'
import pkg from './package.json.proxy.js'

export const name = pkg.name
export const version = pkg.version
export const description = pkg.description

export let gameURL = 'https://cdn.dos.zone/custom/dos/doom.jsdos'

export async function run (term) {
  const { kernel } = term

  const wrapper = document.createElement('div')
  wrapper.style.height = '100%'

  const dosOptions = { hardware: window.hardware }
  const game = await Dos(wrapper, dosOptions).run(gameURL)

  const appWindow = kernel.appWindow({
    title: 'Doom',
    mount: wrapper,
    max: true,
    onclose: () => { game.exit() },
    onresize: (width, height) => {
      if (height === 0) game.pause()
    }
  })

  appWindow.window.body.style.color = 'black'
}
