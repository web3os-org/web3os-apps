export default async (term, context) => {
  const mount = document.createElement('iframe')
  mount.src = context || 'https://viliusle.github.io/miniPaint/'
  mount.allow = 'camera'
  mount.style.width = '100%'
  mount.style.height = '100%'

  const title = 'miniPaint'
  Terminal.log(`Loading ${title} from ${mount.src}`)
  const app = Kernel.appWindow({ title, mount, max: true })
  app.window.focus()
}
