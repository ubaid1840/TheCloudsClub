import { Img } from "@chakra-ui/react";
import Link from "next/link";


export default function FixedLogo () {


    return (
        <div
        style={{
          height: "80px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "40px",
          backgroundColor: "black",
          width: "100vw",
          position: "fixed",
          zIndex : 1
        }}
      >
        <Link href="/">
        <Img
          style={{ width: "90px" }}
          src="/logo2.png"
          alt="The cloud club logo"
        />
        </Link>
      </div>
    )
}