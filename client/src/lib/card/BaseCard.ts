import { TargetGroups, TargetFilters, ITarget } from "../target/ITarget"
import { Player } from "../player/Player"
import { TargetFilter } from "../target/filters"

export enum CardTypes {
  Spell,
  Minion,
  Secret,
}

export class BaseCard {
  cost = 0
  name = ''
  image = ''
  needTarget = false
  targetGrup = TargetGroups.all
  targetFilters: TargetFilter[] = []
  isEnhancement = false
  type = CardTypes.Minion
  constructor(public player: Player, public card: BaseCard, public from: ITarget | null) { }
  async onUse(target: ITarget | null) { }
}
export class MinionCard extends BaseCard {
  type = CardTypes.Minion
}
export class SpellCard extends BaseCard {
  type = CardTypes.Spell
}
export class SecretCard extends BaseCard {
  type = CardTypes.Secret
}

export class ArcaneMissiles extends SpellCard {
  async onUse() {

  }
}