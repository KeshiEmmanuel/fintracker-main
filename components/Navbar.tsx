import Image from "next/image";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMenu, IoSearch } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav>
            <div>
                <div>
                    <IoMenu />
                </div>
                <h1>Fintracker</h1>
            </div>
            <div>
                <IoSearch />
                <AiOutlineAppstore />
                <div>
                    <Image
                        src="/userProfile.png"
                        width={40}
                        height={40}
                        alt={"userProfile"}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
