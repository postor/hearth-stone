import { ITarget } from "./ITarget";
import { SlugIds } from "../database";

interface HeroData {
  health: number,
  name: string,
  image: string,
}

interface HeroPowerData {
  name: string,
}

interface HeroFullData {
  hero: {
    hero: HeroData,
    heroPower: HeroPowerData
  },
  cardSets: {
    [key: string]: {
      cards: { slug: string }[]
    }
  }
}

export class Hero implements ITarget {
  static fromId(id: SlugIds) {

  }

  
  constructor(public data: HeroFullData) {

  }
}