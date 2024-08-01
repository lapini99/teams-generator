import Image from "next/image"
import {IoBrowsersOutline, IoCalculator, IoLogoReact} from "react-icons/io5";
import { BiFootball } from "react-icons/bi";
import { SideBarMenuItem } from "./SideBarMenuItem";
import { GiBabyfootPlayers } from "react-icons/gi";

const menuItems = [
    {
        path: "/dashboard/main",
        icon: <IoBrowsersOutline size={25} />,
        title: "Dashboard",
        subTitle: ""
    },
    {
        path: "/dashboard/generator",
        icon: <BiFootball size={25} />,
        title: "Team generator",
        subTitle: ""
    },
    {
        path: "/dashboard/players",
        icon: <GiBabyfootPlayers size={25} />,
        title: "Players",
        subTitle: ""
    },
]

export const Sidebar = () => {
    return (
        <div id="menu"
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className="mr-2"/>
                    <span>Dash</span>
                <span className="text-blue-500">8</span>.</h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="nav" className="w-full px-6">
                {
                    menuItems.map( item => (
                        <SideBarMenuItem
                            key={item.path}
                            {...item}
                        />
                    ))
                }
            </div>
        </div>
    )
}