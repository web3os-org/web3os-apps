export default async (term, context) => {
  const mount = document.createElement('iframe')
  mount.src = context || 'https://ondras.github.io/rubik/'
  mount.style.width = '100%'
  mount.style.height = '100%'

  const title = "Rubik's Cube"
  Terminal.log(`Loading ${title} from ${mount.src}`)
  const app = Kernel.appWindow({ title, mount, max: true })
  app.window.focus()
}
