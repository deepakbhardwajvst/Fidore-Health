"use client"
import { useState } from 'react';
import DropdownMenu from './DropdownMenuNavbar';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { KeyboardArrowUpOutlined } from '@mui/icons-material';
const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <nav className="flex justify-between items-center ">

            <div className=" flex space-x-4 justify-center items-center">
                <Image
                    src="/logo.png"
                    alt="Fidore Logo"
                    className="object-contain h-14 w-auto"

                    height={144}
                    width={144}
                    priority={true}
                />
                <a className="color2 nav-display-none text-lg font-bold underline">Home</a>
                <a className="color2 nav-display-none">Shop</a>
                <div className="color2 nav-display-none flex justify-center items-center cursor-pointer relative" onClick={toggleDropdown}>
                    <span>Plans </span>
                    {!isDropdownOpen ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowUpOutlined />}
                    {isDropdownOpen && <DropdownMenu />}
                </div>
                <a className="color2 nav-display-none whitespace-nowrap">Why us?</a>
                <a className="color2 nav-display-none whitespace-nowrap">How it works</a>
                <a className="color2 nav-display-none whitespace-nowrap">Contact us</a>
            </div>
            <div className="flex">
                <div className='border-rounded1'>
                    <a href="">
                        <WhatsAppIcon className=' text-black ' sx={{ fontSize: 24 }} />
                    </a>
                </div>
                <div className='border-rounded1'>
                    <a href="">
                        <PermIdentityIcon className=' text-black ' sx={{ fontSize: 24 }} />
                    </a>
                </div>
                <div className='border-rounded1'>
                    <a href="">
                        <ShoppingCartOutlinedIcon className=' text-black ' sx={{ fontSize: 24 }} />
                    </a>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
