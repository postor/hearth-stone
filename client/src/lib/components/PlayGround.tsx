import React, { FC } from 'react'
import { Player } from '../player/Player'

type Props = {
  players: Player[],
}

 const PlayGround: FC<Props> = ({ players = [] }) => {
  return (<div></div>)
}

export default PlayGround