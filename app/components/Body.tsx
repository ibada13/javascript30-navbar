import bodyimage from '@/app/components/Assets/Hero_Image.png'
import Image from 'next/image';
import Button from './lib/ui/Button';
const Body = () => {
    return (
        <div className="w-4/5 flex flex-row-reverse items-center gap-x-8  h-4/5 text-text   ">
            <div className="w-1/3 bg-red">
                <Image src={bodyimage} alt='someimg' />
            </div>
            <div className="w-4/6 gap-y-3  flex flex-col  items-start   justify-between">
            <p className='text-4xl font-bold text-title1'>some cool title 1 </p>
            <p className='text-4xl font-bold text-navtext'>some cool title 2 </p>
            <p className='text-xs font-thin '>Lorem ipsum dol possimus, aperiam, nisi quasi tenetur perspiciatis assumenda ducimus magni quibusdam incidunt.</p>
                <div className=' flex items-center'>
                    
            <Button />
            </div>
            <p>5.0 Rating based on revies from :</p>
            </div>
        </div>
    );
}

export default Body;