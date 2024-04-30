import Link from "next/link";
import React, {Component, useEffect, useState} from "react";
import MyDrawer from "./myDrawer";
import { usePathname } from "next/navigation";

function Header() {
  const pathName = usePathname();

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        position: "fixed",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "black",
        height:'40px',
        zIndex:999,
        alignItems:'center',
      }}
    >
      <MyDrawer />

      <div>
        {pathName === "/" ? (
          <Link href="/login">
            <div className="link">Login</div>
          </Link>
        ) : null}
      </div>
      <div></div>
    </div>
  );
}

export default Header;
