import React, { Children, useState } from 'react'
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { IoIosCloseCircle } from 'react-icons/io'
import { IoCartOutline, IoSearchSharp } from 'react-icons/io5'
import { LuUser } from 'react-icons/lu'
import { Link } from 'react-router'

const Navbar = () => {
    const [dropDown, setdropDown] = useState("");
    const [isOpen,setisOpen] = useState(false);
    console.log(setisOpen);
    
    const catagory = [
        {
            title: "Phone",
            children: [
                {
                    title: "IPhone",
                    to: ""
                },
                {
                    title: "Samsung",
                    to: ""
                },
                {
                    title: "Vivo",
                    to: ""
                },
                {
                    title: "Nokia",
                    to: ""
                },
                {
                    title: "Redmi",
                    to: ""
                }
            ]
        },
        {
            title: "Laptop",
            children: [
                {
                    title: "HP",
                    to: ""
                },
                {
                    title: "Samsung",
                    to: ""
                },
                {
                    title: "Lenovo",
                    to: ""
                },
                {
                    title: "Dell",
                    to: ""
                },
                {
                    title: "Mac",
                    to: ""
                }
            ]
        },
        {
            title: "TWS",
            children: [
                {
                    title: "Airpod",
                    to: ""
                },
                {
                    title: "Samsung",
                    to: ""
                },
                {
                    title: "Oneplus",
                    to: ""
                },
                {
                    title: "CMF",
                    to: ""
                },
                {
                    title: "Redmi",
                    to: ""
                }
            ]
        },
        {
            title: "Smart Watch",
            children: [
                {
                    title: "Apple watch",
                    to: ""
                },
                {
                    title: "Samsung",
                    to: ""
                },
                {
                    title: "Redmi",
                    to: ""
                },
                {
                    title: "Nokia",
                    to: ""
                },
                {
                    title: "Oneplus",
                    to: ""
                }
            ]
        },
    ]
    return (
        <header>
            <nav className='py-5'>
                <div className="container flex justify-between items-center">
                    <button onClick={()=>setisOpen(true)} className='text-primary text-2xl md:hidden'><FaBars /></button>
                    <Link to="/" className='inline-block w-28 md:w-auto'>
                        <img src="/logo.png" alt="logo" className='w-full' />
                    </Link>

                    {/*dekstop searchbar*/}
                    <div className='hidden md:flex items-center gap-2.5 bg-secondary p-4 rounded-2xl sm:w-full max-w-lg'>
                        <IoSearchSharp className='text-brand text-2xl' />
                        <input type="text" placeholder='Search essentials, groceries and more...' className='w-full outline-0' />
                    </div>
                    <div className='flex items-center gap-10'>
                        <Link className='hidden md:flex md-w-full  items-center font-bold text-[10px] lg:text-base gap-5 lg:gap-1.5 relative lg:after:absolute lg:after:h-full lg:after:w-0.5 lg:after:bg-primary lg:after:top-0 lg:after:-right-5'> <LuUser className='text-brand text-2xl lg:text-xl' /> Sign Up / Sign In</Link>
                        <Link className='flex items-center font-bold text-base gap-1.5'> <IoCartOutline className='text-brand text-xl' /><span className='hidden md:block'>Cart</span></Link>

                    </div>


                </div>
                {/*Mobile searchbar*/}
                <div className='flex m-auto mt-5 md:hidden items-center gap-2.5 bg-secondary p-4 rounded-2xl w-full max-w-lg'>
                    <IoSearchSharp className='text-brand text-2xl' />
                    <input type="text" placeholder='Search essentials, groceries and more...' className='w-full outline-0' />
                </div>
            </nav>
            {/*Desktop Product catagory*/}
            <div className='py-4 border-y-2 border-theme/98 hidden md:block'>
                <div className="container flex items-center gap-5">
                    {
                        catagory.map((item) => (
                            <div key={item.title} className='relative group'>
                                <Link className='bg-secondary inline-block py-2.5 px-3.5 rounded-full relative group hover:bg-brand hover:text-secondary'>
                                    <div className='group flex gap-1 items-center '>
                                        <p className='font-medium text-base'>{item.title}</p>
                                        <BiChevronRight className='block group-hover:hidden font-medium  text-brand text-2xl' />
                                        <BiChevronDown className='hidden group-hover:block font-medium  text-2xl group-hover:text-secondary:' />

                                    </div>
                                </Link>
                                <ul className='absolute top-full left-0  invisible opacity-0 group-hover:visible group-hover:opacity-100 w-48 p-4 rounded-2xl space-y-2 bg-theme shadow text-base text-primary font-medium'>
                                    {
                                        item.children.map((child) => (
                                            <li key={child.title}>
                                                <Link to={child.to} className=' p-2 hover:bg-brand hover:text-theme rounded-xl block'>{child.title}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                        ))
                    }

                </div>
                {/* Mobile Sidebar*/}
                <div className={`${isOpen ? "block" : "hidden"} md:hidden fixed top-0 left-0 w-full h-screen bg-primary/80 `}>
                    <div className='w-3/5 sm:w-4/5 bg-theme h-full p-4'>
                    <div className='flex justify-between bg-black items-center text-theme font-bold text-md px-2 py-5 rounded-3xl text-xl'>
                        <h3>Main Menu</h3>
                        <button onClick={()=>setisOpen(false)}><IoIosCloseCircle className=' text-3xl cursor-pointer'/></button>
                    </div>
                        <ul className=' text-primary pl-2 text-lg font-bold space-y-4 mb-5 pb-5 border-b border-primary/40'>
                            {

                                catagory.map((item) => (
                                    <li key={item.title}>
                                        <div className='flex justify-between items-center'>
                                            <Link to={item.to}>{item.title}</Link>
                                            <button className='cursor-pointer' onClick={() => setdropDown(dropDown === item.title ? "" : item.title)}>
                                                <BiChevronDown className={`text-3xl transition-transform ${dropDown === item.title ? "rotate-180" : "" }`} />
                                            </button>

                                        </div>
                                        <ul className={`${dropDown === item.title ? "block" : "hidden"} font-semibold text-base pl-2 mt-2 space-y-2`} >
                                            {item.children.map((child) => (
                                                <li key={child.title} className=''>
                                                    <Link className='bg-brand inline-block py-2 text-theme px-3 rounded-xl '>{child.title}</Link>
                                                </li>
                                            ))}

                                        </ul>
                                    </li>
                                ))}
                            
                        </ul>
                        <Link className='bg-brand/20 inline-block mt-5 border-t-2 border-secondary/50 md:flex items-center text-black rounded-3xl px-5 py-2 font-bold text-base gap-1.5 relative after:absolute after:h-full after:w-0.5 after:bg-primary after:top-0 after:-right-5'> <LuUser className='text-black font-bold text-2xl' />Sign Up / Sign In</Link>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Navbar
