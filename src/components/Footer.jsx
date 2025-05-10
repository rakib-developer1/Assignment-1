/* eslint-disable */
import Logo from "../assets/logo.svg";
import DribbbleIcon from "./icons/DribbbleIcon";
import FacebookIcon from "./icons/FacebookIcon";
import GitHubIcon from "./icons/GitHubIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Brand Center", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Help center",
      links: [
        { name: "Discord Server", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "Contact Us", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Licensing", href: "#" },
        { name: "Terms", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Brand Center", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Download",
      links: [
        { name: "iOS", href: "#" },
        { name: "Android", href: "#" },
        { name: "Windows", href: "#" },
        { name: "MacOS", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { Icon: FacebookIcon, href: "#" },
    { Icon: InstagramIcon, href: "#" },
    { Icon: TwitterIcon, href: "#" },
    { Icon: GitHubIcon, href: "#" },
    { Icon: DribbbleIcon, href: "#" },
  ];

  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {section.title}
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                {section.links.map((link, i) => (
                  <li key={i} className="mb-4">
                    <a href={link.href} className="hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <a
            href="#"
            className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="h-6 mr-3 sm:h-9" src={Logo} alt="" />
            Learn with Sumit
          </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
            <a
              href="#"
              target="_blank"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Flowbite
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Tailwind CSS
            </a>
            .
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            {socialLinks.map(({ Icon, href }, index) => (
              <li key={index}>
                <a
                  href={href}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <Icon className="w-5 h-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
