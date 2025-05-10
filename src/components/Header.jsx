import Logo from "../assets/logo.svg";
import DownloadButton from "./common/DownloadButton";
import NavLink from "./common/NavLink";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "#", isActive: true },
    { name: "Company", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Features", href: "#" },
    { name: "Team", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <img className="h-6 mr-3 sm:h-9" src={Logo} alt="" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Learn with Sumit
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <DownloadButton />
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  href={link.href}
                  name={link.name}
                  isActive={link.isActive || false}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
