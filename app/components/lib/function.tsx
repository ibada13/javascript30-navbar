import React from "react";
import { Link } from "./definitions"
import { BiDice6 } from "react-icons/bi";
export const genratelinks = (titles: string[]):Link[] => { 
    return titles.map((title, index) => ({
        logo :<BiDice6 className="text-iconColor inline" />,
        title, 
        href:"/",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae?"
    }))
} 