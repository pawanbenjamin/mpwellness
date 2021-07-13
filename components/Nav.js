import Link from "next/link";
import React from "react";

function Nav(props) {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/treatments">Treatments</Link>
      <Link href="/services">Services</Link>
      <Link href="/faq">FAQ</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}

export default Nav;
