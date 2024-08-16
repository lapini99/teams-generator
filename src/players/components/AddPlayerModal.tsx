//Modal from https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular 

import { useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";

export default function AddPlayerModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [pace, setPace] = useState(0);
    const [shot, setShot] = useState(0);
    const [pass, setPass] = useState(0);
    const [dri, setDri] = useState(0);
    const [def, setDef] = useState(0);
    const [phys, setPhys] = useState(0);

    const [players, setPlayers] = useState(() => {
        const storedPlayers = localStorage.getItem("players");
    })

    const handleChanges = () => {
        if (name && position && pace && shot && pass && dri && def && phys) {
            console.log("first")
            players.push({
                name: name,
                position: position,
                traits: {
                    speed: pace,
                    shooting: shot,
                    passing: pass,
                    dribbling: dri,
                    defense: def,
                    physical: phys
                }
            })
        }
    }

    return (
        <>
            <div onClick={() => setIsOpen(true)} className='flex flex-wrap items-center gap-2 p-4 cursor-pointer text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 hover:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                <IoPersonAddSharp />
                <input type="button" className='cursor-pointer' value="Add player" />
            </div>
            {isOpen && (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="elative w-auto my-6 mx-auto max-w-3xl">
                            <div className="flex-wrap gap-4 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Add player
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-8 flex-auto">
                                    <form action="" method="post">
                                        <div className="flex flex-wrap gap-4 w-96">
                                            <input
                                                type="text"
                                                id="default-search"
                                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Name"
                                                onChange={(e) => {setName(e.target.value)}}
                                                required
                                            />
                                            <input
                                                type="text"
                                                id="default-search"
                                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Position"
                                                onChange={(e) => {setPosition(e.target.value)}}
                                                required
                                            />
                                            <div className="flex w-full items-center flex-wrap gap-5 justify-center text-center">
                                                <div className="flex flex-col flex-wrap gap-2 items-center justify-center text-center">
                                                    <span>
                                                        <input
                                                            type="number"
                                                            id="default-number"
                                                            className="p-2 ps-10 text-sm w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="Pace"
                                                            min="10"
                                                            max="99"
                                                            onChange={(e) => {setPace(parseInt(e.target.value))}}
                                                            required
                                                        />
                                                    </span>
                                                    <span>
                                                        <input
                                                            type="number"
                                                            id="default-number"
                                                            className="p-2 ps-10 text-sm w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="Shot"
                                                            min="10"
                                                            max="99"
                                                            onChange={(e) => {setShot(parseInt(e.target.value))}}
                                                            required
                                                        />
                                                    </span>
                                                    <span>
                                                        <input
                                                            type="number"
                                                            id="default-number"
                                                            className="p-2 ps-10 text-sm w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="Pass"
                                                            min="10"
                                                            max="99"
                                                            onChange={(e) => {setPass(parseInt(e.target.value))}}
                                                            required
                                                        />
                                                    </span>
                                                </div>
                                                <div className="flex flex-col flex-wrap gap-2 items-center justify-center text-center">
                                                    <span>
                                                        <input
                                                            type="number"
                                                            id="default-number"
                                                            className="p-2 ps-10 text-sm w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="Dri"
                                                            min="10"
                                                            max="99"
                                                            onChange={(e) => {setDri(parseInt(e.target.value))}}
                                                            required
                                                        />
                                                    </span>
                                                    <span>
                                                        <input
                                                            type="number"
                                                            id="default-number"
                                                            className="p-2 ps-10 text-sm w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="Def"
                                                            min="10"
                                                            max="99"
                                                            onChange={(e) => {setDef(parseInt(e.target.value))}}
                                                            required
                                                        />
                                                    </span>
                                                    <span>
                                                        <input
                                                            type="number"
                                                            id="default-number"
                                                            className="p-2 ps-10 text-sm w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="Phys"
                                                            min="10"
                                                            max="99"
                                                            onChange={(e) => {setPhys(parseInt(e.target.value))}}
                                                            required
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-blue-700 hover:bg-blue-800 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleChanges}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    );
}
