import React, { Fragment } from 'react'
import { HiOutlineSearch, HiOutlineChatAlt, HiOutlineBell } from 'react-icons/hi'
import { Popover, Transition, Menu } from '@headlessui/react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200'>
            <div className='relative'>
                <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/4 left-3' />
                <input type="text" placeholder='Search...' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4' />
            </div>
            <div className='flex items-center gap-2 mr-2'>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button className={classNames(open && 'bg-gray-200', 'p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none')}>
                                <HiOutlineChatAlt fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1">
                                <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'>
                                    <div className='flex flex-col  bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                                        <strong className='text-gray-700 font-strong'>Messages</strong>
                                        <div className='mt-2 py-1 text-sm'>
                                            <p>This is messages panel.</p>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover><Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button className={classNames(open && 'bg-gray-200', 'p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none')}>
                                <HiOutlineBell fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1">
                                <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'>
                                    <div className='flex flex-col  bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                                        <strong className='text-gray-700 font-strong'>Notifications</strong>
                                        <div className='mt-2 py-1 text-sm'>
                                            <p>This is notifications panel.</p>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                        <span className='sr-only'>Open user menu</span>
                        <div className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url("https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>
                            <span className='sr-only'>Hugh Jackson</span>
                        </div>
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-black ring-1 ring-opacity-5 focus:outline-none">
                            <div className=" px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className={classNames(active && 'bg-gray-200','text-gray-700 focus:bg-gray-200  cursor-pointer px-2 py-2 rounded-sm')} onClick={() => navigate('/profile')}>
                                            Your Profile
                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className={classNames(active && 'bg-gray-200','text-gray-700 focus:bg-gray-200  cursor-pointer px-2 py-2 rounded-sm')} onClick={() => navigate('/settings')}>
                                            Settings
                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className={classNames(active && 'bg-gray-200','text-gray-700 focus:bg-gray-200  cursor-pointer px-2 py-2 rounded-sm')} onClick={() => navigate('/signout')}>
                                            Sign out
                                        </div>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}

export default Header
