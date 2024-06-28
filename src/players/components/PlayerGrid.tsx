import { Player } from "../interfaces/player";
import {PlayerCard} from "./PlayerCard";

interface Props {
    players: Player[];
}

export const PlayersGrid = ({players}: Props) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {players.map(player => (
                <PlayerCard key={player.name} player={player}>
            ))}
        </div>
    )
}