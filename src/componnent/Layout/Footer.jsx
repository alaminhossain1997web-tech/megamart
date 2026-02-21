import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoCallOutline } from 'react-icons/io5'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className='bg-brand py-20'>
      <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-auto w-full'>
          <div className='mt-5 mb-5 sm:ml-5 md:mt-0 md:mb-0'>
            <Link to="/"><img src="/footerLogo.png" alt="logo" /></Link>
            <div  className='mt-7 text-theme text-lg font-bold'>
              <h2>Contact Us</h2>
             <div className='my-5'>
              <Link  className='flex gap-2.5'>
               <FaWhatsapp className=' text-xl' />
               <div className='font-normal text-base '>
                <p>Whats App</p>
               <p>+1 202-918-2132</p>
               </div>
              </Link>
             </div> 
             <div className='my-5'>
              <Link  className='flex gap-2.5'>
               <IoCallOutline className=' text-xl' />
               <div className='font-normal text-base '>
                <p>Call Us</p>
               <p>+1 202-918-2132</p>
               </div>
              </Link>
             </div>
             <h3 className='text-lg font-bold text-theme '>Download App</h3>
            <div className='flex gap-5 mt-5'>
             <Link>
             <img src="/appStore.png" alt="appStore" className='rounded-xl'/>
             </Link>
             <Link>
             <img src="/playStore.png" alt="playStore" className='rounded-xl'/>
             </Link>
            </div>

            </div>
          </div>




          <div  className='mt-5 mb-5 sm:ml-5 md:mt-0 md:mb-0'>
            <div className=' text-theme font-medium text-xl border-theme border-b-2 w-fit pb-3'>
              <h3>Most Popular Categories</h3>
            </div>
            <div>
              <ul className='text-theme font-normal list-disc pl-5 pt-5 space-y-3.5'>
                <li>Staples</li>
                  <li>Beverages</li>
                  <li>Personal Care</li>
                  <li>Home Care</li>
                  <li>Baby Care</li>
                  <li>Vegetables & Fruits</li>
                  <li>Snacks & Foods</li>
                  <li>Dairy & Bakery</li>
              </ul>
            </div>
          </div>







          <div  className='mt-5 mb-5 sm:ml-5 md:mt-0 md:mb-0'>
            <div className=' text-theme font-medium text-xl border-theme border-b-2 w-fit pb-3'>
              <h3>Customer Services</h3>
            </div>
            <div>
              <ul className='text-theme font-normal list-disc pl-5 pt-5 space-y-3.5'>
                <li><Link>About Us</Link></li>
                  <li><Link>About Us</Link></li>
                  <li><Link>Terms & Conditions</Link></li>
                  <li><Link>FAQ</Link></li>
                  <li><Link>Privacy Policy</Link></li>
                  <li><Link>E-waste Policy</Link></li>
                  <li><Link>Cancellation & Return Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


