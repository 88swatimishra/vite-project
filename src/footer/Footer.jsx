import React from 'react'
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">

            <div className="container mx-auto flex justify-between items-center">
                <div className=' flex space-x-10 w-80   pr-48'>
                <div className=' text-gray-400 hover:text-white' >
                  QUICK LINKS
                  About Us
                  Blog
                  Contact Us
                  Uttam Nagar
                  Gurugram
                  Privacy Policy
                </div>
                </div>

                <div className=' flex  space-x-10 w-80  pr-48 '>

                    <div className="text-gray-400 hover:text-white">Company
                        About us
                        Contact us
                        Careers with us
                        Terms & Conditions
                        Request Info
                        Feedback
                        Report a problem
                        Testimonials
                    </div>

                </div>

                <div className=" flex  space-x-10 w-80  pr-48">

                    <div className="text-gray-400 hover:text-white">CONTACT US
                        HEAD OFFICE : Wz -41,kabari road, Near pillar number 706, Phase 1 Om Vihar Rd, Uttam Nagar, Delhi, 110059
                        Branch Office : Dwarka Plot no. 123/124, Sewak Park, Dwarka Mor, Metro Pillar no 783, Uttam Nagar 110059.
                        Branch Office : 241, 4th Floor, Golf Course Road, Sector 55, Gurugram, Haryana 122002
                        Phone number :+91-8448440765
                        E-mail : kamalassociatesbuilders@gmail.com
                    </div>
                    {/* <a href="#" class="text-gray-400 hover:text-white">Terms of Service</a>
                        <a href="#" class="text-gray-400 hover:text-white">Contact Us</a> */}
                </div>
            </div>
        </footer>
    )
}
export default Footer;