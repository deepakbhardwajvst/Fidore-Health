// DropdownMenu.jsx
import React from 'react';

const DropdownMenu = () => {
    return (
        <div className="absolute bg-white border border-gray-300 p-2 mt-1 top-5 left-0 rounded w-60 z-10">
            <a className="text-gray-700 py-2 px-4 block cursor-pointer hover:bg-gray-100">
                Explore 1 Month Plan</a>
            <a className="text-gray-700 py-2 px-4 block cursor-pointer hover:bg-gray-100">Explore 2 Month Plan</a>
            <a className="text-gray-700 py-2 px-4 block cursor-pointer hover:bg-gray-100">Explore 3 Month Plan</a>
        </div>
    );
};

export default DropdownMenu;
