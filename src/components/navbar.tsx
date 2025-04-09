import { Button } from "./ui/button";
import { useEffect, useState } from "react";

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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "services",
      "team",
      "testimoni",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100" aria-label="Main Navigation">
      <div className="flex justify-between items-center py-4 px-4 sm:px-8 md:px-16 lg:px-24">

        <a href="#home">
          <h1
            className={`font-bold text-xl sm:text-2xl md:text-3xl hover:opacity-80 transition duration-300 cursor-pointer ${
              activeSection === "home" ? "text-blue-600" : "text-gray-800"
            }`}
          >
            Laksamana.
          </h1>
        </a>

        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          {[
            { label: "Tentang Kami", href: "about" },
            { label: "Layanan", href: "services" },
            { label: "Tim", href: "team" },
            { label: "Testimoni", href: "testimoni" },
            { label: "Kontak", href: "contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className={`hover:text-blue-600 transition-colors ${
                activeSection === link.href ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="text-center">
              <SheetTitle className="text-2xl">Laksamana.</SheetTitle>
            </SheetHeader>

            <div className="mt-10 flex flex-col gap-6 text-lg font-medium text-gray-700 px-4">
              {[
                { label: "Beranda", href: "home" },
                { label: "Tentang Kami", href: "about" },
                { label: "Layanan", href: "services" },
                { label: "Tim", href: "team" },
                { label: "Testimoni", href: "testimoni" },
                { label: "Kontak", href: "contact" },
              ].map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={`#${link.href}`}
                    className={`hover:text-blue-600 transition ${
                      activeSection === link.href
                        ? "text-blue-600 font-semibold"
                        : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </div>

            <SheetFooter className="mt-10 px-4">
              <SheetClose asChild>
                <a
                  href="#contact"
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition text-center w-full"
                >
                  Hubungi Kami
                </a>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
