import Image from 'next/image'
import logo from './assests/Hulu_Logo.svg';
import {SunIcon,MoonIcon, CheckBadgeIcon,HomeIcon,UserIcon,MagnifyingGlassIcon,BoltIcon,RectangleStackIcon } from '@heroicons/react/24/outline'
import HeaderItems from './HeaderItems';
const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row items-center justify-between'>

    <div className='flex m-5'>
        <HeaderItems title="Home" Icon={HomeIcon}/>
        <HeaderItems title="Trending" Icon={BoltIcon}/>
        <HeaderItems title="Verified" Icon={CheckBadgeIcon}/>
        <HeaderItems title="Collections" Icon={RectangleStackIcon}/>
        <HeaderItems title="Search" Icon={MagnifyingGlassIcon}/>
        <HeaderItems title="User" Icon={UserIcon}/>
    </div>
    <div className='m-6 mt-0'>
        <Image
        src={logo}
        width={100}
        height={10}
        alt="logo"/>
        </div>
    </header>

  )
}

export default Header