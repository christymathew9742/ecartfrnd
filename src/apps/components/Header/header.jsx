import React, {useState } from "react";
import {Modal} from 'antd';
import ecartLogo from '../../accets/Image/jpg/logo11.jpeg'
import { useMediaQuery } from 'react-responsive';
import { useLocation } from "react-router-dom";
import { LogoutOutlined, ShoppingCartOutlined } from "@ant-design/icons";
const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const baseUrl = `${window.location.origin}`;

    const handleCancelMenu = () => {
        setIsMenuOpen(false);
    };
    const showMenu = () => {
        setIsMenuOpen(true);
    };
    return (
        <header class='sticky top-0 shadow-md font-[sans-serif] tracking-wide z-50'>
            <section
                class='flex w-full lg:items-center relative py-2 lg:px-10 px-2 border-gray-200 border-b bg-white lg:min-h-[70px] max-lg:min-h-[60px]'
            >   
                <div 
                    className="w-[95%]"
                >
                    <a href={baseUrl} class="max-sm:w-full max-sm:mb-3 shrink-0">
                        <img
                            src={ecartLogo}
                            alt="logo" 
                            class='w-[160px] h-[70px]' 
                        />
                    </a>
                </div>
                <div
                    class={`flex w-[5%] lg:ml-10 px-3 py-0  outline outline-transparent ${isMobile && 'hidden'} float-end cursor-pointer`}
                >
                    <ShoppingCartOutlined  style={{fontSize:'28px', marginLeft:'10px', color:'#4a97eb'}}/>
                    <LogoutOutlined style={{fontSize:'28px', marginLeft:'10px', color:'#4a97eb'}}/>
                </div>
                <div className={`w-1/4 items-end ${!isMobile && 'hidden'}`}>
                    <button id="toggleOpen" className="items-end" onClick={showMenu}>
                        <svg class="w-20 h-12" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </section>
            <Modal  open={isMenuOpen} footer={false} onCancel={handleCancelMenu}>
                <div
                    class={`flex lg:ml-10 px-6 py-3 rounded outline outline-transparent mt-6`}
                >
                    <ShoppingCartOutlined  style={{fontSize:'18px', marginLeft:'6px'}}/>
                    <LogoutOutlined style={{fontSize:'18px', marginLeft:'6px'}}/>
                </div>
            </Modal>
        </header>
    )
}

export default Header


