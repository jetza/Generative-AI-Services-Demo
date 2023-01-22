import React from 'react';

const HamburgerIcon = ({toggleNavbar}) => {

    return (
        <>
            {toggleNavbar?
                <button>
                    <div className="flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] bg-slate-700 bg-opacity-50 ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200 shadow-md">
                        <div className="flex flex-col justify-between w-[20px] h-[20px] origin-center overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </button>
                :
                <button>
                    <div className="flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] bg-slate-700 bg-opacity-50 ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200 shadow-md">
                        <div className="flex flex-col justify-between w-[20px] h-[20px] origin-center overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </div>
                    </div>
                </button>
                }
        </>
    );
};

export default HamburgerIcon;
