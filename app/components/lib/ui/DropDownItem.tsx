import Link from "next/link";
import { NavItem } from "../definitions";
import { ImPencil2 } from "react-icons/im";
const DropDownItem = ({ NavItem }: {NavItem:NavItem}) => { 
    return (
        <div className="relative group">
            <p className="text-text text-xs px-4 ">{ NavItem.label}</p>
            <div className="hidden absolute p-4 top-  w-[300px] space-y-2 mt-2 rounded-md bg-white   left-0 group-hover:flex group-focus-within:flex flex-col transition-opacity duration-300 ">
                { 
                    NavItem.links.map((link, index) => (
                        <Link key={`link${index}`} href={ link.href} className="flex flex-col w-full hover:bg-gray-200 rounded-md transition-colors duration-300">
                            <p>{ link.logo} <span className="text-sm font-semibold text-navtext">{ link.title}</span></p>
                            <p className="text-xs font-light pl-5  w-full  ">{ link.details}</p>
                </Link>
                ))
                }
            </div>
        </div>
    );
}

export default DropDownItem