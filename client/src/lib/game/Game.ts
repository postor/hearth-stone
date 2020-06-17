import { Player } from "../player/Player";

export class Game {
  public currentPlayer: Player | null = null
  constructor(public players: Player[]) {
    let [player1,player2] = players
    
  }
}