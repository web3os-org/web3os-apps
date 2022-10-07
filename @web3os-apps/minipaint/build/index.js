export default async (term, context) => {
  const mount = document.createElement('iframe')
  mount.src = context || 'https://viliusle.github.io/miniPaint/'
  mount.allow = 'camera'
  mount.style.width = '100%'
  mount.style.height = '100%'

  const title = 'miniPaint'
  term.log(`Loading ${title} from ${mount.src}`)
  const app = term.kernel.windows.create({ title, mount, max: true })
  app.window.focus()
}
