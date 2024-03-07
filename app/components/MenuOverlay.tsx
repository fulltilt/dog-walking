import NavLink from "./NavLink";
import { LinkType } from "./NavLink";

interface Props {
  links: LinkType[];
}

const MenuOverlay = ({ links }: Props) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link: LinkType, index: number) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
