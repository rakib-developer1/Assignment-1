/* eslint-disable */
import CompanyLogo1 from "./icons/CompanyLogo1";
import CompanyLogo2 from "./icons/CompanyLogo2";
import CompanyLogo3 from "./icons/CompanyLogo3";
import CompanyLogo4 from "./icons/CompanyLogo4";
import CompanyLogo5 from "./icons/CompanyLogo5";
import CompanyLogo6 from "./icons/CompanyLogo6";

const Companies = () => {
  const logos = [
    { Component: CompanyLogo1, href: "#" },
    { Component: CompanyLogo2, href: "#" },
    { Component: CompanyLogo3, href: "#" },
    { Component: CompanyLogo4, href: "#" },
    { Component: CompanyLogo5, href: "#" },
    { Component: CompanyLogo6, href: "#" },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {logos.map(({ Component, href }, index) => (
            <a
              key={index}
              href={href}
              className="flex items-center lg:justify-center"
            >
              <Component className="h-9 hover:text-gray-900 dark:hover:text-white" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
