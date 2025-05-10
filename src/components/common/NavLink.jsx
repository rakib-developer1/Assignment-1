const NavLink = ({ href, name, isActive }) => {
  return (
    <li>
      <a
        href={href}
        className={`block py-2 pl-3 pr-4 ${
          isActive
            ? "text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
            : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {name}
      </a>
    </li>
  );
};

export default NavLink;
