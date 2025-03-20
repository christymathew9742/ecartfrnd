import React from "react";
import { useMediaQuery } from 'react-responsive';
import { constantsText } from "../../constant/constant";
import ecartLogo from '../../accets/Image/jpg/logo11.jpeg'

const {
    ROUTES: {
       
    },
} = constantsText

const Footer = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <footer class="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 font-sans tracking-wide">
            <div class="py-8 px-8">
                <div>
                    <a href='javascript:void(0)'><img src={ecartLogo} alt="logo" class='ml-6 rounded-md w-[100px]' /></a>
                </div>
                <p class='text-gray-300 text-base mt-4 ml-6'>© 2024 ABCD Technologies Pvt. Ltd</p>
            </div>
        </footer>
    )
}

export default Footer