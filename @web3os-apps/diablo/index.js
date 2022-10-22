export default async (term, context) => {
  const mount = document.createElement('iframe')
  mount.src = context || 'https://d07riv.github.io/diabloweb'
  mount.style.width = '100%'
  mount.style.height = '100%'

  const title = 'Diablo'
  Terminal.log(`Loading ${title} from ${mount.src}`)
  const app = term.kernel.windows.create({ title, mount, max: true })
  app.window.focus()
}
