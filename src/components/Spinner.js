import React from 'react';

const Spinner = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-300 opacity-75 flex flex-col items-center justify-center">
            <div>
                <div className="relative">
                    <div className="w-20 h-20 border-purple-200 border-2 rounded-full"></div>
                    <div className="w-20 h-20 border-purple-900 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
                </div>

                <div className="relative">
                    <div className="w-10 h-10 border-purple-200 border-2 rounded-full"></div>
                    <div className="w-10 h-10 border-purple-900 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
                </div>

                <div className="relative">
                    <div className="w-5 h-5 border-purple-200 border-2 rounded-full"></div>
                    <div className="w-5 h-5 border-purple-900 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
                </div>
            </div>

        </div>

    );
};

export default Spinner;
