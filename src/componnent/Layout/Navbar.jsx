 
import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle, IoIosList } from "react-icons/io";
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { Link } from "react-router";
import { useGetcategorylistQuery } from "../../Services/api";
import { clearSession, useAuthSession } from "../../Services/auth";
import { useCart } from "../../Services/cart.jsx";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const sideref = useRef(null);
  const { data } = useGetcategorylistQuery();
  const session = useAuthSession();
  const isLoggedIn = Boolean(session?.accessToken);
  const displayName = session?.firstName || session?.username || "Account";
  const { cartCount } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (sideref.current && !sideref.current.contains(e.target)) {
        setisOpen(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [sideref]);

  return (
    <header>
      <nav className='py-5'>
        <div className='container flex justify-between items-center'>
          <button
            onClick={() => setisOpen(true)}
            className='text-primary text-2xl md:hidden'>
            <FaBars />
          </button>
          <Link to='/' className='inline-block w-28 md:w-auto'>
            <img src='/logo.png' alt='logo' className='w-full' />
          </Link>

          {/*dekstop searchbar*/}
          <div className='hidden md:flex items-center gap-2.5 bg-secondary p-4 rounded-2xl sm:w-full max-w-lg'>
            <IoSearchSharp className='text-brand text-2xl' />
            <input
              type='text'
              placeholder='Search essentials, groceries and more...'
              className='w-full outline-0'
            />
            <IoIosList className='text-brand text-2xl' />
          </div>
          <div className='flex items-center gap-10'>
            {isLoggedIn ? (
              <div className='hidden items-center gap-3 md:flex'>
                <Link
                  to='/profile'
                  className='flex items-center font-bold text-[10px] lg:text-base gap-2 text-gray-700'>
                  <LuUser className='text-brand text-2xl lg:text-xl' />
                  {displayName}
                </Link>
                <button
                  type='button'
                  onClick={clearSession}
                  className='rounded-full border border-gray-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 transition hover:border-brand hover:text-brand lg:text-[11px]'>
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to='/login'
                className='hidden md:flex md-w-full  items-center font-bold text-[10px] lg:text-base gap-5 lg:gap-1.5 relative lg:after:absolute lg:after:h-full lg:after:w-0.5 lg:after:bg-primary lg:after:top-0 lg:after:-right-5'>
                <LuUser className='text-brand text-2xl lg:text-xl' /> Sign Up /
                Sign In
              </Link>
            )}
            <Link to='/sopingcart' className='relative flex items-center font-bold text-base gap-1.5'>
              <IoCartOutline className='text-brand text-xl' />
              {cartCount ? (
                <span className='absolute -right-3 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-white'>
                  {cartCount}
                </span>
              ) : null}
              <span className='hidden md:block'>Cart</span>
            </Link>
          </div>
        </div>
        {/*Mobile searchbar*/}
        <div className='flex m-auto mt-5 md:hidden items-center gap-2.5 bg-secondary p-4 rounded-2xl w-full max-w-lg'>
          <IoSearchSharp className='text-brand text-2xl' />
          <input
            type='text'
            placeholder='Search essentials, groceries and more...'
            className='w-full outline-0'
          />
        </div>
      </nav>
      {/* Mobile Sidebar*/}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden fixed top-0 left-0 w-full h-full bg-primary/80 `}>{/*second div */}
        <div ref={sideref} className='w-3/5 sm:w-4/5 bg-theme h-full p-4 '>
          {" "}
          {/*conetnt div */}
          <div className='flex justify-between bg-black items-center text-theme font-semibold text-xl px-2.5 py-2.5 mb-4'>
            <h3>Main Menu</h3>
            <button onClick={() => setisOpen(false)}>
              <IoIosCloseCircle className=' text-3xl cursor-pointer' />
            </button>
          </div>
          <ul className=' text-primary pl-2 text-lg font-bold space-y-4 mb-5 pb-5 border-b border-primary/40'>
            <li>
              <Link to='/sopingcart' onClick={() => setisOpen(false)} className='flex items-center justify-between rounded-2xl bg-white px-4 py-3'>
                <span>Cart</span>
                <span className='rounded-full bg-brand px-2 py-1 text-xs text-white'>{cartCount}</span>
              </Link>
            </li>
            {data?.slice(0, 10)?.map((item) => (
              <li key={item}>
                <div className='flex justify-between items-center'>
                  <Link to={`/shop?category=${item}`}>{item}</Link>
                  
                </div>
                
              </li>
            ))}
          </ul>
          {isLoggedIn ? (
            <div className='space-y-3'>
              <Link
                to='/profile'
                onClick={() => setisOpen(false)}
                className='bg-brand/20 mt-5 flex items-center text-black rounded-3xl px-5 py-3 font-bold text-base gap-2'>
                <LuUser className='text-black font-bold text-2xl' />
                {displayName}
              </Link>
              <button
                type='button'
                onClick={() => {
                  clearSession();
                  setisOpen(false);
                }}
                className='w-full rounded-3xl border border-gray-300 px-5 py-3 text-left text-sm font-semibold uppercase tracking-[0.2em] text-gray-600'>
                Logout
              </button>
            </div>
          ) : (
            <Link
              to='/login'
              onClick={() => setisOpen(false)}
              className='bg-brand/20 mt-5 border-t-2 border-secondary/50 flex items-center text-black rounded-3xl px-5 py-2 font-bold text-base gap-1.5 relative after:absolute after:h-full after:w-0.5 after:bg-primary after:top-0 after:-right-5'>
              {" "}
              <LuUser className='text-black font-bold text-2xl' />
              Sign Up / Sign In
            </Link>
          )}
        </div>
      </div>
      {/*Desktop Product catagory*/}
      <div className='py-4 border-y-2 border-theme/98 hidden md:block relative z-51'>
        <div className='container flex items-center gap-4 text-sm text-nowrap capitalize'>
          {data?.slice(0,10)?.map((item, index) => (
            <div key={item} className='relative'>
              <Link
              to={`/shop?category=${item}`}
                className='bg-secondary inline-block py-2.5 px-3.5 rounded-full hover:bg-brand hover:text-secondary'>
                <div className='flex gap-1 items-center'>
                  <p className='font-medium text-sm'>{item}</p>
                </div>
              </Link>

            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
