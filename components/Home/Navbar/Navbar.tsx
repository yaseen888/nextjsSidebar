import { SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[11vh] z-[100] fixed w-full'>
      <div className='="flex items-center space-x-2'>
        <SidebarTrigger />
      </div>
      <h1 className="text-center text-xl hidden sm:block md:text-2xl text-black font-bold">
        Articles
      </h1>
    </div>
  );
}

export default Navbar