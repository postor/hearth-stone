import { Player } from "../player/Player";
import { ITarget } from "../target/ITarget";

export interface BaseEffect {
  work(player: Player, target: ITarget): void
}

export class AddHealth {
  work(player: Player, target: ITarget) {

  }
}