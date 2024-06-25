"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({
  href,
  children,
}: Readonly<{ href: string; children: string }>) => {
  const pathname = usePathname();
  const highlightNavItem = () => (pathname.startsWith(href) ? "active" : "");
  console.log(href, highlightNavItem());

  return (
    <Link href={href} className={highlightNavItem()}>
      {children}
    </Link>
  );
};

export default NavItem;
