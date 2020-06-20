export enum TargetTypes {
  Minion,
  Hero,
  Group,
}

export enum TargetGroups {
  all = 0b1111,
  all_my = 0b1100,
  all_enemy = 0b0011,
  my_hero = 0b1000,
  my_minions = 0b0100,
  enemy_hero = 0b0001,
  enemy_minions = 0b0010,
}


export interface ITarget {
  hp: () => number
  attark: () => number
}