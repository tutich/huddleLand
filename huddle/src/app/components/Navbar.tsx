import Image from "next/image";
import Logo from "../../../public/assets/Logo.svg";
import User from "../../../public/assets/User.svg"
import Menu from "../../../public/assets/Menu.svg"

const navLinks = [
    {name: "Features"},
    {name: "Pricing"},
    {name: "Enterprise"},
    {name: "Careers"}
];

export function Navbar() {
    return (
        <nav className="flex w-full justify-between px-10 py-10 lg:container lg:mx-auto">
            <div className="flex items-center ">
                <Image src={Logo} alt="logo"/>

              <div className="hidden pl-[74px] gap-x-[56px] lg:flex">
                {navLinks.map((item, index) => (
                    <p key={index} className="font-medium text-[#36485C] cursor-pointer">{item.name}</p>
                ) )}
              </div>
            </div>


            <div className="flex gap-x-5 items-center">

                <p className="hidden font-medium text-[#36485C] cursor-pointer lg:block">Open Account</p>


                <div className="flex items-center gap-2">
                    <Image src={User} alt="user"/>
                    <span className="hidden font-medium text-[#36485c] cursor-pointer lg:block">Sign In</span>
                </div>

                <Image src={Menu} alt="menu" className="lg:hidden" />
            </div>
        </nav>
    )
}