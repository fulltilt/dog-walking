import Link from "next/link";

export type LinkType = {
  href: string;
  title: string;
};

const NavLink = ({ href, title }: LinkType) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-black sm:text-xl rounded md:p-0 hover:text-gray-400"
    >
      {title}
    </Link>
  );
};

export default NavLink;
