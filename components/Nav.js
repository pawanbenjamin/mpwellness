import Link from "next/link";
import React from "react";

function Nav(props) {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/treatments/home">Treatments</Link>
    </nav>
  );
}

export default Nav;
