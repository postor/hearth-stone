import { TargetGroups, ITarget } from "./ITarget";
import { Player } from "../player/Player";

export type TargetFilter = (player: Player, area: TargetGroups) => ITarget[]

