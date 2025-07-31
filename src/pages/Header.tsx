import { Link } from 'react-router'

export default function Header() {
    return(
        <div className=" h-15 px-10 font-medium flex justify-between items-center">
            
            <div className='flex items-center gap-5'>
            <div className="bg-[url('https://howtodrawforkids.com/wp-content/uploads/2023/06/how-to-draw-an-old-car.jpg')] bg-center bg-no-repeat bg-contain h-16 w-16">
                </div>
                <p className='font-script text-3xl text-amber-300'>VinSpec</p>
            </div>

            <div className='flex gap-5'>
                <Link to='/'>Home</Link>
                <Link to='/quote'>Get a quote</Link>
                <Link to='/contacts'>Contacts</Link>
                <Link to='/about'>About us</Link>
                <Link to='/quote'>Q&A</Link>
            </div>

            <div className='flex gap-5'>
                <p>BG</p>
                <p>My Profile</p>
            </div>
        </div>
    )
}