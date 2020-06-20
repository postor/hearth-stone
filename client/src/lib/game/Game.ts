import { Player } from "../player/Player";

export class Game {
  currentPlayer: Player | null = null
  logs: string[] = []
  constructor(public players: Player[]) {
    let [player1, player2] = players

  }
}