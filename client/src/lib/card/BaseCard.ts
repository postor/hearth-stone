export enum CardTypes {
  Spell,
  Minion,
}

export class BaseCard {
  public cost: number = 0
  public name: string = ''
}