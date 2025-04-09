import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow"
      aria-label="Main Navigation"
    >
      <div className="flex justify-between items-center py-5 px-6 md:px-24">
        <h1 className="font-bold text-2xl antialiased text-blue-600">
          Laksamana.
        </h1>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a
            href="#about"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="#services"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#team"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Team
          </a>
          <a
            href="#profile"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Profile
          </a>
        </div>

        <div className="hidden md:block">
          <Button>Contact Us</Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="sm:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="flex flex-col items-center">
              <SheetTitle className="text-2xl">Laksamana.</SheetTitle>

              <div className="mt-12 flex flex-col gap-6 text-lg font-medium text-gray-700">
                <a
                  href="#about"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Tentang Kami
                </a>
                <a
                  href="#services"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Layanan
                </a>
                <a
                  href="#team"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Tim
                </a>
                <a
                  href="#profile"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Profile
                </a>
              </div>
            </SheetHeader>

            <SheetFooter>
              <SheetClose asChild>
                <Button>Contact Us</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
