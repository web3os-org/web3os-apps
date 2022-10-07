import { Chess } from './_snowpack/pkg/chessjs.js'
import $ from './_snowpack/pkg/jquery.js'
import './_snowpack/pkg/@chrisoakman/chessboardjs/dist/chessboard-1.0.0.min.js'
import pkg from './package.json.proxy.js'

export const name = pkg.name
export const version = pkg.version
export const description = pkg.description

window.jQuery = $

export function start (elementId, options = {}) {
  const board = null
  const game = new Chess()

  function onDragStart (source, piece, position, orientation) {
    // do not pick up pieces if the game is over
    if (game.game_over()) return false

    // only pick up pieces for White
    if (piece.search(/^b/) !== -1) return false
  }

  function makeRandomMove () {
    const possibleMoves = game.moves()

    // game over
    if (possibleMoves.length === 0) return

    const randomIdx = Math.floor(Math.random() * possibleMoves.length)
    game.move(possibleMoves[randomIdx])
    board.position(game.fen())
  }

  function onDrop (source, target) {
    // see if the move is legal
    const move = game.move({
      from: source,
      to: target,
      promotion: 'q' // NOTE: always promote to a queen for example simplicity
    })

    // illegal move
    if (move === null) return 'snapback'

    // make random legal move for black
    window.setTimeout(makeRandomMove, 250)
  }

  // update the board position after the piece snap
  // for castling, en passant, pawn promotion
  function onSnapEnd () {
    board.position(game.fen())
  }

  const config = {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd
  }

  board = Chessboard(elementId, config)
}

export async function run (term) {
  const { kernel } = term

  const wrapper = document.createElement('div')
  wrapper.id = `chess_${Math.random().toString(36).slice(2)}`
  wrapper.style.height = '100%'

  kernel.windows.create({
    title: 'Chess',
    mount: wrapper,
    width: '50%',
    height: '50%',
    x: 'center',
    y: 'center'
  })

  start(wrapper.id)
}
