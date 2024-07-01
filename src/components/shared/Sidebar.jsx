import React from 'react'
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../lib/consts/navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { HiOutlineLogout } from 'react-icons/hi';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 m-1 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'


const Sidebar = () => {
    return (
        <div className='flex flex-col bg-neutral-900 w-60 p-3 text-white'>
            <div className='flex items-center gap-2 px-1 py-3'><FcBullish fontSize={24}/>
                <span className='text-neutral-100 text-lg'>OpenShop</span>
            </div>
            <div className='flex-1'>
                {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
                    <SideBarLink key={item.key} item={item}></SideBarLink>
                ))}
            </div>
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item)=>(
                    <SideBarLink key={item.key} item={item}/>
                ))}
                <div className={classNames(linkClasses,'cursor-pointer text-red-500')}>
                    <span className='text-xl'><HiOutlineLogout/></span>Logout
                </div>
            </div>
        </div>
    )
}

function SideBarLink({item}){
    const {pathname} = useLocation()
    return(
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',linkClasses)} >
        <span className='text-xl'>{item.icon}</span>
        {item.label}
        </Link>
    )
}

export default Sidebar
