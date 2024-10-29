import Logo from './Assets/Logo.svg'
import Image from 'next/image';
import Button from './lib/ui/Button';
export default function NavBar() { 
    return (
        <div className="h-1/6 w-4/5 flex justify-between gap-x-12 bg-red-500 text-text">
            <div className="flex-grow flex items-center ">
                <Image src={ Logo} alt="logo"/>
            </div>
            <div className="flex-grow flex justify-between items-center ">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>

            </div>
            <div className="flex-grow flex justify-end gap-x-4 items-center bg-blue-500">
                <p>Sign in </p>
                <Button /> 
            </div>
        </div>
    );
}