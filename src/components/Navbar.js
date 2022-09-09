const Navbar = () => {
    return(
        <div className="bg-pink shadow-lg">
            <nav className="pl-7 py-3.5">
                <div className="flex gap-[6rem]">
                    <img src="/p_logo.png" alt="parinayam-logo" className="w-[12rem]"/>
                    <ul className="flex gap-9 my-auto text-white2">
                        <button className="hover:bg-white2 hover:text-red ease-in-out duration-300 py-2.5 px-5 rounded-md"><li>Home</li></button>
                        <button className="hover:bg-white2 hover:text-red ease-in-out duration-300 py-2.5 px-5 rounded-md"><li>Login</li></button>
                        <button className="hover:bg-white2 hover:text-red ease-in-out duration-300 py-2.5 px-5 rounded-md"><li>Register</li></button>
                        <button className="hover:bg-white2 hover:text-red ease-in-out duration-300 py-2.5 px-5 rounded-md"><li>Search</li></button>
                        <button className="hover:bg-white2 hover:text-red ease-in-out duration-300 py-2.5 px-5 rounded-md"><li>Membership fee</li></button>
                        <button className="hover:bg-white2 hover:text-red ease-in-out duration-300 py-2.5 px-5 rounded-md"><li>Contact Details</li></button>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;