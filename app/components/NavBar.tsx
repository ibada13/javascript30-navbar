import Logo from './Assets/Logo.svg'
import Image from 'next/image';
import Button from './lib/ui/Button';
import DropDownItem from './lib/ui/DropDownItem';
import { Navitems } from './lib/data';
export default function NavBar() { 
    return (
        <div className="h-1/6 w-4/5 flex justify-between gap-x-12 text-text">
            <div className=" flex items-center ">
                <Image src={ Logo} alt="logo"/>
            </div>
            <div className="flex-grow flex justify-between items-center ">
                {Navitems.map((NavItem, index) => (
                    <DropDownItem NavItem={NavItem} key={`navitem${index}`} />
                    
                ))}

            </div>
            <div className=" flex justify-end gap-x-4 items-center text-xs">
                <p>Sign in </p>
                <Button /> 
            </div>
        </div>
    );
}