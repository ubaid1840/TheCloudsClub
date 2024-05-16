import { Img } from "@chakra-ui/react";


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
        <Img
          style={{ width: "100px" }}
          src="/logo.png"
          alt="The cloud club logo"
        />
      </div>
    )
}