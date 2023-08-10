import React from 'react'

export const NavbarCompiler = () => {
    return (
        <div className='mb-[0.1rem]'>
            <div className="navbar border-b">
                <div className='navbar-start'>
                    <a href='#' className='btn btn-ghost normal-case text-xl'>
                        Online Compiler
                    </a>
                </div>
                <div className='navbar-center'>
                    <div className='flex flex-row justify-center items-center'>
                        <button className="btn btn-ghost dropdown dropdown-end">
                            <svg width="20" height="30" viewBox="0 0 84 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M77.5 35.2417C86.1667 40.2454 86.1667 52.7546 77.5 57.7583L19.75 91.1003C11.0833 96.104 0.249995 89.8494 0.249996 79.842L0.249999 13.158C0.249999 3.15061 11.0833 -3.10401 19.75 1.89969L77.5 35.2417Z" fill="#36D399" />
                            </svg>
                        </button>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost rounded-btn">Select Language</label>
                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                <li><a>C++</a></li>
                                <li><a>C</a></li>
                                <li><a>Python</a></li>
                                <li><a>GoLang</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='navbar-end'>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://source.unsplash.com/random/400x600" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
