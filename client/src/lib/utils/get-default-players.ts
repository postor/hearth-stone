import { Player } from "../player/Player"

export function getDefaultPlayers() {
  return [getDefaultPlayer(), getDefaultPlayer()]
}

function getDefaultPlayer() {
  let player = new Player()
  return player
}