import React from "react";
import { PropsWithChildren } from "react";
import { Link } from 'react-router-dom';
import logo from './logo.png';

export const Navbar: React.FC<PropsWithChildren> = ({ children }) => (
    <div className="Navbar">
        <div className=" bg-custom-purple-800 text-white p-4 flex flex-col md:flex-row items-center justify-between">
            <div className="hover:bg-gray-900 p-2 rounded-lg">
                <Link
                    className="flex items-center mb-4 md:mb-0"
                    to={{ pathname: '/' }}
                >
                    <img src={logo} alt="Logo" className="h-8 w-8" />
                    <span className="ml-2 text-lg font-bold font-inter">Lelegoyeng Technical</span>
                </Link>
            </div>
            <div className="flex space-x-4">
                <div className='p-1 rounded-lg cursor-pointer hover:bg-gray-900 transition-colors duration-300 ease-in-out w-12 font-bold text-center'>1m</div>
                <div className='p-1 rounded-lg cursor-pointer hover:bg-gray-900 transition-colors duration-300 ease-in-out w-12 font-bold text-center'>5m</div>
                <div className='p-1 rounded-lg cursor-pointer hover:bg-gray-900 transition-colors duration-300 ease-in-out w-12 font-bold text-center'>15m</div>
                <div className='p-1 rounded-lg cursor-pointer hover:bg-gray-900 transition-colors duration-300 ease-in-out w-12 font-bold text-center'>30m</div>
                <div className='p-1 rounded-lg cursor-pointer hover:bg-gray-900 transition-colors duration-300 ease-in-out w-12 font-bold text-center'>1h</div>
                <div className='p-1 rounded-lg cursor-pointer hover:bg-gray-900 transition-colors duration-300 ease-in-out w-12 font-bold text-center'>5h</div>
            </div>
        </div>
    </div>
);
