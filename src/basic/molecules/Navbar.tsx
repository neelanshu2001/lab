/* This example requires Tailwind CSS v2.0+ */
import { Fragment,useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import {Link} from 'react-router-dom';


function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

const Navbar=({navigation}:any)=> {
  return (
    <Disclosure as="nav" className=" py-2 sticky z-10 top-0 bg-black  backdrop-filter backdrop-blur-lg bg-opacity-30">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div className="text-white font-semibold text-xl md:text-3xl opacity-90">
                    RadioLab, IITI
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center">
                  
                </div>
                <div className="hidden md:block sm:ml-6">
                  <div className="flex space-x-3 ">
                    {navigation.map((item:any) => (
                      <Link to={item.href}
                        key={item.name}
                        onClick={()=>{
                          //console.log(item.name)
                          const ele=document.getElementById(item.name);
                          ele!=null && ele.scrollIntoView({ behavior: 'smooth'});
                        }}
                        className={classNames(
                          item.current ? 'hover:cursor-pointer opacity-100 bg-slate-900 bg-opacity-50 text-white' : 'hover:cursor-pointer opacity-100 text-gray-300 hover:bg-opacity-25 hover:bg-slate-900 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item:any) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={()=>{
                    //console.log(item.name)
                    const ele=document.getElementById(item.name);
                    ele!=null && ele.scrollIntoView({ behavior: 'smooth'});
                  }}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
export default Navbar;
