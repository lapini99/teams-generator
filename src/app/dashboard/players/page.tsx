import { PlayersGrid } from '@/players/components/PlayerGrid'
import React from 'react'
import db from "@/database/players.json"
import { Player } from '@/players/interfaces/player'

const players: Player[] = db.map((player: Player) => ({
  name: player.name,
  position: player.position,
  traits: player.traits
}));


export default function Players() {
  return (
    <>
    <PlayersGrid players={players} />
    </>
  )
}
