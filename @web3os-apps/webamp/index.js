import Webamp from 'webamp'

export let player

export default async (term, context) => {
  if (!Webamp.browserIsSupported()) throw new Error('Browser does not support necessary features for webamp')

  const mount = document.createElement('div')
  mount.style.position = 'absolute'
  mount.style.top = 0
  mount.style.right = 0

  const playerOptions = {
    zIndex: Number.MAX_SAFE_INTEGER - 1,
    initialTracks: [
      {
        url: 'https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d82cfe0e37286dbbe0666072dc3190a83bc/mp3/llama-2.91.mp3',
        duration: 5.322286,
        metaData: {
          artist: 'DJ Mike Llama',
          title: "Llama Whippin' Intro"
        }
      }
    ]
  }

  player = new Webamp(playerOptions)
  document.body.appendChild(mount)
  player.renderWhenReady(mount)
}
