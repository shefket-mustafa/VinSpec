import { Link } from 'react-router'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';

export default function Header() {

    const [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurger = () => {
        setBurgerOpen(prev => !prev);
    };

    return(
        <div className="sticky top-0 z-50 bg-white h-15 px-10 font-medium flex justify-between items-center">
            
            <div className='flex items-center gap-5'>
                {/* Logo */}
            <div className="bg-[url('https://howtodrawforkids.com/wp-content/uploads/2023/06/how-to-draw-an-old-car.jpg')] bg-center bg-no-repeat bg-contain h-13 md:h-16 w-16">
                </div>
                <p className='font-script text-3xl text-amber-300'>VinSpec</p>
            </div>

            {/* md+ menu */}
            <div className='hidden md:flex gap-5 text-lg'>
                <Link to='/'>Test2</Link>
                <Link to='/services'>Test2</Link>
                <Link to='/contacts'>Test2</Link>
                <Link to='/about'>Test2 Test2</Link>
                <Link to='/qa'>Q&A</Link>
            </div>

            {/* Burger Icon */}
            <IoMenu onClick={toggleBurger} className='md:hidden text-lg'/>

            {burgerOpen && (
                <div className='
                md:hidden absolute top-14 w-full text-sm gap-3
                left-0 flex flex-col p-3 py-5 px-3 bg-white/97 backdrop:-blur-sm shadow-md border-gray-200 rounded-md'>
                <Link onClick={toggleBurger} to='/'>My Profile</Link>
                <Link onClick={toggleBurger} to='/'>Home</Link>
                <Link onClick={toggleBurger} to='/services'>Services</Link>
                <Link onClick={toggleBurger} to='/contacts'>Contacts</Link>
                <Link onClick={toggleBurger} to='/about'>About us</Link>
                <Link onClick={toggleBurger} to='/qa'>Q&A</Link>
                </div>
            )}

            <div className='hidden md:flex gap-5'>
                <p>BG</p>
                <Link to='/'>My Profile</Link>
            </div>
        </div>
    )
}