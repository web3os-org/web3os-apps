import 'js-dos'
import 'js-dos/dist/js-dos.css'
import pkg from './package.json'

export const title = 'Wolfenstein 3D'
export const name = pkg.name
export const version = pkg.version
export const description = pkg.description

export let gameURL = 'https://cdn.dos.zone/original/2X/a/ac888d1660aa253f0ed53bd6c962c894125aaa19.jsdos'

export async function run (term) {
  const { kernel } = term

  const wrapper = document.createElement('div')
  wrapper.style.height = '100%'

  const dosOptions = { hardware: window.hardware }
  const game = await Dos(wrapper, dosOptions).run(gameURL)

  const app = kernel.windows.create({
    title,
    mount: wrapper,
    max: true,
    onclose: () => { game.exit() },
    onresize: (width, height) => {
      if (height === 0) game.pause()
    }
  })

  app.window.body.style.color = 'black'
}
