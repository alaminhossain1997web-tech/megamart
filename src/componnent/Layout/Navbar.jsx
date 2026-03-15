import React, { Children, useEffect, useRef, useState } from 'react'
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { GiClick } from 'react-icons/gi'
import { IoIosCloseCircle, IoIosList } from 'react-icons/io'
import { IoCartOutline, IoSearchSharp } from 'react-icons/io5'
import { LuUser } from 'react-icons/lu'
import { Link } from 'react-router'

const Navbar = () => {
    const [dropDown, setdropDown] = useState("");
    const [isOpen, setisOpen] = useState(false);
    const sideref = useRef(null);
    const [openIndex, setOpenIndex] = useState(null);


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

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if (sideref.current && !sideref.current.contains(e.target)) {
                setisOpen(false);
            }
        });
    }, [sideref])

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <header>
            <nav className='py-5'>
                <div className="container flex justify-between items-center">
                    <button onClick={() => setisOpen(true)} className='text-primary text-2xl md:hidden'><FaBars /></button>
                    <Link to="/" className='inline-block w-28 md:w-auto'>
                        <img src="/logo.png" alt="logo" className='w-full' />
                    </Link>

                    {/*dekstop searchbar*/}
                    <div className='hidden md:flex items-center gap-2.5 bg-secondary p-4 rounded-2xl sm:w-full max-w-lg'>
                        <IoSearchSharp className='text-brand text-2xl' />
                        <input type="text" placeholder='Search essentials, groceries and more...' className='w-full outline-0' />
                        <IoIosList className='text-brand text-2xl' />
                    </div>
                    <div className='flex items-center gap-10'>
                        <Link to="/Login" className='hidden md:flex md-w-full  items-center font-bold text-[10px] lg:text-base gap-5 lg:gap-1.5 relative lg:after:absolute lg:after:h-full lg:after:w-0.5 lg:after:bg-primary lg:after:top-0 lg:after:-right-5'> <LuUser className='text-brand text-2xl lg:text-xl' /> Sign Up / Sign In</Link>
                        <Link className='flex items-center font-bold text-base gap-1.5'> <IoCartOutline className='text-brand text-xl' /><span className='hidden md:block'>Cart</span></Link>

                    </div>


                </div>
                {/*Mobile searchbar*/}
                <div className='flex m-auto mt-5 md:hidden items-center gap-2.5 bg-secondary p-4 rounded-2xl w-full max-w-lg'>
                    <IoSearchSharp className='text-brand text-2xl' />
                    <input type="text" placeholder='Search essentials, groceries and more...' className='w-full outline-0' />
                </div>
            </nav>
            {/* Mobile Sidebar*/}
            <div className={`${isOpen ? "block" : "hidden"} md:hidden fixed top-0 left-0 w-full h-full bg-primary/80 `}> {/**second div */}
                <div ref={sideref} className='w-3/5 sm:w-4/5 bg-theme h-full p-4 '> {/*conetnt div */}
                    <div className='flex justify-between bg-black items-center text-theme font-semibold text-xl px-2.5 py-2.5 mb-4'>
                        <h3>Main Menu</h3>
                        <button onClick={() => setisOpen(false)}><IoIosCloseCircle className=' text-3xl cursor-pointer' /></button>
                    </div>
                    <ul className=' text-primary pl-2 text-lg font-bold space-y-4 mb-5 pb-5 border-b border-primary/40'>
                        {

                            catagory.map((item) => (
                                <li key={item.title}>
                                    <div className='flex justify-between items-center'>
                                        <Link to={item.to}>{item.title}</Link>
                                        <button className='cursor-pointer' onClick={() => setdropDown(dropDown === item.title ? "" : item.title)}>
                                            <BiChevronDown className={`text-3xl transition-transform ${dropDown === item.title ? "rotate-180" : ""}`} />
                                        </button>

                                    </div>
                                    <ul className={`${dropDown === item.title ? "block" : "hidden"} font-semibold text-base pl-2 mt-2 space-y-2`} >
                                        {item.children.map((child) => (
                                            <li key={child.title}>
                                                <Link className='bg-brand inline-block py-2 text-theme px-3 rounded-xl  '>{child.title}</Link>
                                            </li>
                                        ))}

                                    </ul>
                                </li>
                            ))}

                    </ul>
                    <Link to="/Login" className='bg-brand/20 mt-5 border-t-2 border-secondary/50 flex items-center text-black rounded-3xl px-5 py-2 font-bold text-base gap-1.5 relative after:absolute after:h-full after:w-0.5 after:bg-primary after:top-0 after:-right-5'> <LuUser className='text-black font-bold text-2xl' />Sign Up / Sign In</Link>
                </div>
            </div>
            {/*Desktop Product catagory*/}
            <div className='py-4 border-y-2 border-theme/98 hidden md:block relative z-51'>
                <div className="container flex items-center gap-5">
                    {catagory.map((item, index) => (
                        <div key={item.title} className='relative'>

                            <button
                                onClick={() => handleClick(index)}
                                className='bg-secondary inline-block py-2.5 px-3.5 rounded-full hover:bg-brand hover:text-secondary'
                            >
                                <div className='flex gap-1 items-center'>
                                    <p className='font-medium text-base'>{item.title}</p>

                                    {openIndex === index ? (
                                        <BiChevronDown className='text-2xl' />
                                    ) : (
                                        <BiChevronRight className='text-2xl text-brand' />
                                    )}
                                </div>
                            </button>

                            <ul
                                className={`absolute top-full left-0 w-48 p-4 rounded-2xl space-y-2 bg-theme shadow text-base text-primary font-medium transition-all duration-200 
          ${openIndex === index ? "visible opacity-100" : "invisible opacity-0"}`}
                            >
                                {item.children.map((child) => (
                                    <li key={child.title}>
                                        <Link
                                            to={child.to}
                                            className='p-2 hover:bg-brand hover:text-theme rounded-xl block'
                                        >
                                            {child.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
            </div>

        </header>
    )
}

export default Navbar
