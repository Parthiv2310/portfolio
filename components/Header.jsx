import Link from "next/link";
import { Button } from "./ui/button";

import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
const Header = () => {
  return <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href='/'>
                <h1 className="text-4xl font-semibold">
                    Parthiv<span className="text-accent"></span>
                </h1>
            </Link>
            {/* calling desktop view of navbar inside the div of Header also hire me button */}
            <div className="hidden xl:flex items-center gap-8">
                <Navbar/>
                <Link href="mailto:parthivchahar2003@gmail.com" passHref>
                    <Button>Hire me</Button>
                </Link>
            </div>

            {/* calling mobile view of navbar inside the div of Header also hire me button */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
}

export default Header
