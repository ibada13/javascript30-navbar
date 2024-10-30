import { NavItem,Link } from "./definitions";
import { BiDice6 } from "react-icons/bi";
import { genratelinks } from "./function";

const definedlinks : Link[] = []
export const Navitems: NavItem[] = [
    {
        label: "Products",
        links:genratelinks(["Products1" , "Producrs2" , "Products3"])
    },
    {
        label: "Other Links",
        links :genratelinks(["Other Links1","Other Links2","Other Links3"])
        
    },
    {
        label: "Resoures",
        links :genratelinks(["Resoures1","Resoures2","Resoures3"])
        
    },
    {
        label: "Challenges",
        links :genratelinks(["Challenges1","Challenges2","Challenges3"])
        
    }
]