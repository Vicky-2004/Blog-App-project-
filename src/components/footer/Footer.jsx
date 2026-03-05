import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="w-full bg-gray-900 text-gray-300 py-16">
      
      {/* Container */}
      <div className="w-full px-10">
        
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex flex-wrap justify-between gap-10">
            
            {/* Logo Section */}
            <div className="w-full md:w-1/2 lg:w-4/12">
              <Logo width="160px" />
              <p className="mt-6 text-sm text-gray-400">
                © Copyright 2026. All Rights Reserved by DevVerse.
              </p>
            </div>

            {/* Company */}
            <div className="w-full md:w-1/3 lg:w-2/12">
              <h3 className="mb-6 text-sm font-bold uppercase text-white">
                Company
              </h3>
              <ul className="space-y-3">
                <li><Link className="hover:text-blue-400 transition duration-200" to="/">Features</Link></li>
                <li><Link className="hover:text-blue-400 transition duration-200" to="/">Pricing</Link></li>
                <li><Link className="hover:text-blue-400 transition duration-200" to="/">Affiliate</Link></li>
                <li><Link className="hover:text-blue-400 transition duration-200" to="/">Press Kit</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div className="w-full md:w-1/3 lg:w-2/12">
              <h3 className="mb-6 text-sm font-bold uppercase text-white">
                Support
              </h3>
              <ul className="space-y-3">
                <li><Link className="hover:text-blue-400 transition duration-200" to="/">Account</Link></li>
                <li><Link className="hover:text-blue-400 transition duration-200" to="/">Help</Link></li>
                <li><Link className="hover:text-blue-400 transition duration-200" to="/">Contact</Link></li>
                <li><Link className="hover:text-blue-400 transition duration-200" to="/">Customer Support</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="w-full md:w-1/3 lg:w-2/12">
              <h3 className="mb-6 text-sm font-bold uppercase text-white">
                Legal
              </h3>
              <ul className="space-y-3">
                <li><Link className="hover:text-blue-400 transition duration-200" to="/">Terms</Link></li>
                <li><Link className="hover:text-blue-400 transition duration-200" to="/">Privacy</Link></li>
                <li><Link className="hover:text-blue-400 transition duration-200" to="/">Licensing</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
