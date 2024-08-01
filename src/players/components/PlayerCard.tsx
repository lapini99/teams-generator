import Link from "next/link"
import { Player } from "../interfaces/player";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";
import placeHolderImage from "../../images/players/lapini.png";
import { useEffect, useState } from "react";

interface Props {
    player: Player;
}

export const PlayerCard = ({ player }: Props) => {
    const [rating, setRating] = useState(0);
    const { name, position, traits } = player;

    const Rating = () => {
        let value = 0;

        switch (position.toLowerCase()) {
            case "defender":
                value = traits.speed * 0.20 +
                    traits.shooting * 0.10 +
                    traits.passing * 0.15 +
                    traits.defense * 0.30 +
                    traits.dribbling * 0.10 +
                    traits.physical * 0.15;
                break;
            case "midfielder":
                value = traits.speed * 0.15 +
                    traits.shooting * 0.15 +
                    traits.passing * 0.25 +
                    traits.defense * 0.10 +
                    traits.dribbling * 0.20 +
                    traits.physical * 0.15;
                break;
            case "forward":
                value = traits.speed * 0.25 +
                    traits.shooting * 0.30 +
                    traits.passing * 0.15 +
                    traits.defense * 0.05 +
                    traits.dribbling * 0.20 +
                    traits.physical * 0.05;
                break;
            }
            setRating(parseFloat(value.toFixed()));
    }
        useEffect(() => {
            Rating();
        })

        return (
            <div className="mx-auto right-0 mt-2 w-60">
                <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                    <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                        <Image
                            key={player.name}
                            src={placeHolderImage}
                            width={100}
                            height={100}
                            alt={player.name}
                            priority={false}
                        />
                        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                        <div className="pt-2 text-lg font-semibold text-gray-50 capitalize">Position: {position}</div>
                        <div className="pt-2 text-lg font-semibold text-gray-50 capitalize">Rating: {rating}</div>
                        {/* <div className="mt-5">
                            <Link
                            href={`/player/${id}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            More info
                        </Link>
                        </div> */}
                    </div>
                    <div className="flex border-b flex-wrap gap-5 items-center justify-center text-center">
                        <div className="flex flex-col items-center justify-center text-center">
                            <span>
                                {traits.speed} PAC
                            </span>
                            <span>
                                {traits.shooting} SHO
                            </span>
                            <span>
                                {traits.passing} PAS
                            </span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <span>
                                {traits.dribbling} DRI
                            </span>
                            <span>
                                {traits.defense} DEF
                            </span>
                            <span>
                                {traits.physical} PHY
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }