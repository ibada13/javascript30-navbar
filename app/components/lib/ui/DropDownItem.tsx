import Link from "next/link";
import { NavItem } from "../definitions";

const DropDownItem = ({ NavItem }: {NavItem?:NavItem}) => { 
    return (
        <div className="relative group">
            <p className="text-text px-4 ">Products</p>
            <div className="hidden absolute p-4 top-  w-[200%] space-y-2 mt-2 rounded-md bg-white   left-0 group-hover:flex flex-col transition-opacity duration-200 delay-75">
                <Link href="" className="flex flex-col">
                    <p> <span className="text-xs font-semibold">title</span></p>
                    <p className="text-xs font-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae?</p>
                </Link>
            </div>
        </div>
    );
}

export default DropDownItem