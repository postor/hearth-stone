import { ITarget, TargetGroups, TargetFilters } from "../target/ITarget";
import { TargetFilter } from "../target/filters";


export enum BuffType {
  magicDamanageEnhance,
}

export class BaseBuff {
  public type = BuffType.magicDamanageEnhance
  public area = TargetGroups.all
  public filters:TargetFilter[] = []
  constructor(public from: ITarget) { }
}

